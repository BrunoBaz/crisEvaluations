"use client";
import { useState, useEffect, useCallback } from "react";

export function FormComponent({ data }) {
  const { secciones } = data;
  const [formData, setFormData] = useState({});
  const [savedUsers, setSavedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  // Load saved users on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const users = Object.keys(localStorage).filter((key) =>
        key.startsWith("evpaar_")
      );
      setSavedUsers(users.map((key) => key.replace("evpaar_", "")));
    }
  }, []);

  // Load saved data when user is selected
  useEffect(() => {
    if (selectedUser) {
      const savedData = localStorage.getItem(`evpaar_${selectedUser}`);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        setCurrentUser(selectedUser);
        fillFormWithData(parsedData);
      }
    }
  }, [selectedUser]);

  const fillFormWithData = useCallback((data) => {
    // Fill personal info
    Object.entries(data.personalInfo).forEach(([key, value]) => {
      const element = document.getElementsByName(key)[0];
      if (element) element.value = value;
    });

    // Fill evaluation fields
    Object.entries(data.evaluacion).forEach(([sectionId, sectionData]) => {
      if (typeof sectionData === "object" && sectionData.valor) {
        const selectElement = document.getElementsByName(
          `seccion-${sectionId}`
        )[0];
        const obsElement = document.getElementsByName(`obs-${sectionId}`)[0];
        if (selectElement) selectElement.value = sectionData.valor;
        if (obsElement && sectionData.observaciones)
          obsElement.value = sectionData.observaciones;
      } else {
        Object.entries(sectionData).forEach(([subId, subData]) => {
          const selectElement = document.getElementsByName(
            `seccion-${sectionId}-subseccion-${subId}`
          )[0];
          const obsElement = document.getElementsByName(
            `obs-${sectionId}-subseccion-${subId}`
          )[0];
          if (selectElement) selectElement.value = subData.valor;
          if (obsElement && subData.observaciones)
            obsElement.value = subData.observaciones;
        });
      }
    });
  }, []);

  const processFormData = useCallback(
    (form) => {
      const formData = new FormData(form);
      return {
        personalInfo: {
          nombre: formData.get("nombre"),
          edad: formData.get("edad"),
          patologias: formData.get("patologias"),
        },
        evaluacion: secciones.reduce((acc, seccion) => {
          if (seccion.subsecciones) {
            acc[seccion.id] = seccion.subsecciones.reduce(
              (subAcc, subseccion) => {
                const value = formData.get(
                  `seccion-${seccion.id}-subseccion-${subseccion.id}`
                );
                const obs = formData.get(
                  `obs-${seccion.id}-subseccion-${subseccion.id}`
                );

                if (value && value !== "N/A") {
                  subAcc[subseccion.id] = {
                    valor: value,
                    ...(obs && { observaciones: obs }),
                  };
                }
                return subAcc;
              },
              {}
            );
          } else {
            const value = formData.get(`seccion-${seccion.id}`);
            const obs = formData.get(`obs-${seccion.id}`);

            if (value && value !== "N/A") {
              acc[seccion.id] = {
                valor: value,
                ...(obs && { observaciones: obs }),
              };
            }
          }
          return acc;
        }, {}),
      };
    },
    [secciones]
  );

  const handleBlur = useCallback(
    (e) => {
      if (e.target.name === "nombre" && e.target.value) {
        const newUser = e.target.value;
        setCurrentUser(newUser);
        const form = e.target.form;
        if (!form) return;

        const result = processFormData(form);
        localStorage.setItem(`evpaar_${newUser}`, JSON.stringify(result));
        setFormData(result);

        // Update saved users list
        setSavedUsers((prev) => {
          if (!prev.includes(newUser)) {
            return [...prev, newUser];
          }
          return prev;
        });
      }
    },
    [processFormData]
  );

  const handleInputChange = useCallback(
    (e) => {
      if (e.target.name === "nombre") return;

      const form = e.target.form;
      if (!form || !currentUser) return;

      const result = processFormData(form);
      localStorage.setItem(`evpaar_${currentUser}`, JSON.stringify(result));
      setFormData(result);
    },
    [currentUser, processFormData]
  );
  // Add this handler after other handlers
  const handleDownload = useCallback(
    (e) => {
      e.preventDefault();
      if (!currentUser) {
        alert("Por favor, complete el nombre del usuario primero");
        return;
      }

      // Get initials from current user
      const initials = currentUser
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();

      const savedData = localStorage.getItem(`evpaar_${currentUser}`);
      if (!savedData) {
        alert("No hay datos guardados para descargar");
        return;
      }

      const blob = new Blob([savedData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `evpaar_${initials}.json`; // Using initials here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    [currentUser]
  );

  // Replace the single submit button with this buttons group
  <div className="flex gap-4">
    <button
      type="submit"
      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
    >
      Guardar Evaluación
    </button>
    <button
      type="button"
      onClick={handleDownload}
      className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
    >
      Descargar
    </button>
  </div>;
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const result = processFormData(e.target);
      if (result.personalInfo.nombre) {
        localStorage.setItem(
          `evpaar_${result.personalInfo.nombre}`,
          JSON.stringify(result)
        );
        console.log("Form submitted:", result);
      }
    },
    [processFormData]
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {savedUsers.length > 0 && (
        <div className="mb-6">
          <label className="block mb-2">Cargar datos guardados:</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => setSelectedUser(e.target.value)}
            value={selectedUser}
          >
            <option value="">Seleccionar usuario</option>
            {savedUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
      )}

      <form onChange={handleInputChange} onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-bold">Información Personal</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Nombre:</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full p-2 border rounded-md"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label className="block mb-2">Edad:</label>
              <input
                type="number"
                name="edad"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block mb-2">Patologías:</label>
              <textarea
                name="patologias"
                className="w-full p-2 border rounded-md"
                rows="3"
              />
            </div>
          </div>
        </div>

        {secciones.map((seccion) => (
          <div key={seccion.id} className="space-y-4 mb-6">
            <h2 className="text-xl font-bold">
              {seccion.id}. {seccion.title}
            </h2>

            {seccion.subsecciones ? (
              seccion.subsecciones.map((subseccion) => (
                <div key={subseccion.id} className="ml-4 space-y-2">
                  <h3 className="text-lg font-semibold">
                    {subseccion.id} {subseccion.title}
                  </h3>
                  <select
                    className="w-full p-2 border rounded-md"
                    name={`seccion-${seccion.id}-subseccion-${subseccion.id}`}
                  >
                    <option value="">Seleccione una opción</option>
                    {subseccion.items.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.description}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name={`obs-${seccion.id}-subseccion-${subseccion.id}`}
                    placeholder="Observaciones"
                    className="w-full p-2 border rounded-md mt-2"
                    rows="2"
                  />
                </div>
              ))
            ) : (
              <div>
                <select
                  className="w-full p-2 border rounded-md"
                  name={`seccion-${seccion.id}`}
                >
                  <option value="">Seleccione una opción</option>
                  {seccion.items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.description}
                    </option>
                  ))}
                </select>
                <textarea
                  name={`obs-${seccion.id}`}
                  placeholder="Observaciones"
                  className="w-full p-2 border rounded-md mt-2"
                  rows="2"
                />
              </div>
            )}
          </div>
        ))}
        {/* Replace the single submit button with this buttons group */}
        <div className="flex gap-4">
          <button
            type="submit"
            onClick={handleDownload}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Guardar Evaluación
          </button>
        </div>
      </form>
    </div>
  );
}
