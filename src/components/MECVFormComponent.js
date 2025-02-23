"use client";
import { useState, useEffect } from "react";

export function MECVFormComponent({ data }) {
  const { secciones } = data;
  const [formData, setFormData] = useState({});
  const [savedUsers, setSavedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const users = Object.keys(localStorage).filter((key) =>
        key.startsWith("mecv_")
      );
      setSavedUsers(users.map((key) => key.replace("mecv_", "")));
    }
  }, []);
  const handleBlur = (e) => {
    if (e.target.name === "nombre" && e.target.value) {
      setCurrentUser(e.target.value);
      const form = e.target.form;
      if (!form) return;

      const formData = new FormData(form);
      processAndSaveForm(formData, e.target.value);
    }
  };
  const handleInputChange = (e) => {
    if (e.target.name === "nombre") return; // Skip auto-save for name field

    const form = e.target.form;
    if (!form || !currentUser) return;
    const formData = new FormData(form);
    processAndSaveForm(formData, currentUser);
  };
  const processAndSaveForm = (formData, userName) => {
    const result = {
      personalInfo: {
        nombre: formData.get("nombre"),
        edad: formData.get("edad"),
        patologias: formData.get("patologias"),
      },
      evaluacion: {},
    };
    // Process form data for all sections
    secciones.forEach((seccion) => {
      if (seccion.subsecciones) {
        result.evaluacion[seccion.id] = {
          observaciones: formData.get(`obs-${seccion.id}`),
          subsecciones: {},
        };
        seccion.subsecciones.forEach((subseccion) => {
          if (subseccion.volumes) {
            const subseccionData = {
              observaciones: formData.get(`obs-${seccion.id}-${subseccion.id}`),
              datos: {},
            };
            subseccion.volumes.forEach((volume) => {
              const volumeData = {};
              subseccion.items.forEach((item) => {
                const value = formData.get(
                  `${subseccion.id}-${item.id}-${volume}`
                );
                if (value) {
                  volumeData[item.id] = value;
                }
              });
              if (Object.keys(volumeData).length > 0) {
                subseccionData.datos[volume] = volumeData;
              }
            });
            result.evaluacion[seccion.id].subsecciones[subseccion.id] =
              subseccionData;
          } else {
            const checkboxData = {};
            subseccion.items.forEach((item) => {
              const value = formData.get(`${subseccion.id}-${item.id}`);
              if (value) {
                checkboxData[item.id] = true;
              }
            });
            result.evaluacion[seccion.id].subsecciones[subseccion.id] = {
              datos: checkboxData,
              observaciones: formData.get(`obs-${seccion.id}-${subseccion.id}`),
            };
          }
        });
      } else if (seccion.items) {
        result.evaluacion[seccion.id] = {
          valor: formData.get(`seccion-${seccion.id}`),
          observaciones: formData.get(`obs-${seccion.id}`),
        };
      }
    });
    localStorage.setItem(`mecv_${userName}`, JSON.stringify(result));
    setFormData(result);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (currentUser) {
      processAndSaveForm(formData, currentUser);
    }
    console.log("Form submitted:", formData);
  };
  const handleUserSelect = (e) => {
    const selectedUserName = e.target.value;
    setSelectedUser(selectedUserName);

    if (!selectedUserName) {
      setCurrentUser("");
      return;
    }

    try {
      const savedData = localStorage.getItem(`mecv_${selectedUserName}`);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        setCurrentUser(selectedUserName);

        requestAnimationFrame(() => {
          const form = document.querySelector("form");
          if (form) {
            // Fill personal info
            const nombreInput = form.querySelector('input[name="nombre"]');
            const edadInput = form.querySelector('input[name="edad"]');
            const patologiasInput = form.querySelector(
              'textarea[name="patologias"]'
            );

            if (nombreInput)
              nombreInput.value = parsedData.personalInfo.nombre || "";
            if (edadInput) edadInput.value = parsedData.personalInfo.edad || "";
            if (patologiasInput)
              patologiasInput.value = parsedData.personalInfo.patologias || "";

            // Fill evaluation fields
            if (parsedData.evaluacion) {
              Object.entries(parsedData.evaluacion).forEach(
                ([sectionId, sectionData]) => {
                  // Handle text sections
                  const sectionTextarea = form.querySelector(
                    `textarea[name="seccion-${sectionId}"]`
                  );
                  if (sectionTextarea && sectionData.valor) {
                    sectionTextarea.value = sectionData.valor;
                  }

                  // Handle observations
                  const obsTextarea = form.querySelector(
                    `textarea[name="obs-${sectionId}"]`
                  );
                  if (obsTextarea && sectionData.observaciones) {
                    obsTextarea.value = sectionData.observaciones;
                  }

                  // Handle subsections
                  if (sectionData.subsecciones) {
                    Object.entries(sectionData.subsecciones).forEach(
                      ([subsecId, subsecData]) => {
                        // Handle subsection observations
                        const subsecObs = form.querySelector(
                          `textarea[name="obs-${sectionId}-${subsecId}"]`
                        );
                        if (subsecObs && subsecData.observaciones) {
                          subsecObs.value = subsecData.observaciones;
                        }

                        // Handle checkbox or volume data
                        if (subsecData.datos) {
                          if (
                            typeof subsecData.datos === "object" &&
                            !Array.isArray(subsecData.datos)
                          ) {
                            // Handle volume data
                            Object.entries(subsecData.datos).forEach(
                              ([volume, volumeData]) => {
                                Object.entries(volumeData).forEach(
                                  ([itemId, value]) => {
                                    const select = form.querySelector(
                                      `select[name="${subsecId}-${itemId}-${volume}"]`
                                    );
                                    if (select) select.value = value;
                                  }
                                );
                              }
                            );
                          } else {
                            // Handle checkboxes
                            Object.keys(subsecData.datos).forEach((itemId) => {
                              const checkbox = form.querySelector(
                                `input[name="${subsecId}-${itemId}"]`
                              );
                              if (checkbox) checkbox.checked = true;
                            });
                          }
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        });
      }
    } catch (error) {
      console.error("Error loading saved data:", error);
    }
  };
  const handleDownload = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("Por favor, complete el nombre del usuario primero");
      return;
    }

    const savedData = localStorage.getItem(`mecv_${currentUser}`);
    if (!savedData) {
      alert("No hay datos guardados para descargar");
      return;
    }

    const blob = new Blob([savedData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mecv_${currentUser}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // Replace the single submit button with this buttons group
  <div className="flex gap-4">
    <button
      type="submit"
      onClick={handleDownload}
      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
    >
      Guardar Evaluación
    </button>
  </div>;
  const renderSection = (seccion) => {
    if (seccion.subsecciones) {
      if (seccion.subsecciones[0].volumes) {
        // Render viscosity test tables
        return (
          <div className="space-y-6">
            {seccion.subsecciones.map((subseccion) => (
              <div key={subseccion.id} className="ml-4 space-y-4">
                <h3 className="text-lg font-semibold">{subseccion.title}</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Signos</th>
                      {subseccion.volumes.map((volume) => (
                        <th key={volume} className="border p-2">
                          {volume}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subseccion.items.map((item) => (
                      <tr key={item.id}>
                        <td className="border p-2">{item.title}</td>
                        {subseccion.volumes.map((volume) => (
                          <td key={volume} className="border p-2">
                            <select
                              name={`${subseccion.id}-${item.id}-${volume}`}
                              className="w-full p-1 border rounded"
                            >
                              {item.values.map((value) => (
                                <option key={value} value={value}>
                                  {value}
                                </option>
                              ))}
                            </select>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium">
                    Observaciones {subseccion.title}:
                  </label>
                  <textarea
                    name={`obs-${seccion.id}-${subseccion.id}`}
                    className="w-full p-2 border rounded-md"
                    rows="2"
                    placeholder={`Ingrese observaciones para ${subseccion.title}`}
                  />
                </div>
              </div>
            ))}
            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium">
                Observaciones generales {seccion.title}:
              </label>
              <textarea
                name={`obs-${seccion.id}`}
                className="w-full p-2 border rounded-md"
                rows="2"
                placeholder={`Ingrese observaciones generales para ${seccion.title}`}
              />
            </div>
          </div>
        );
      } else {
        // Render checkbox groups
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {seccion.subsecciones.map((subseccion) => (
                <div key={subseccion.id} className="space-y-2">
                  <h4 className="font-medium">{subseccion.title}</h4>
                  {subseccion.items.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name={`${subseccion.id}-${item.id}`}
                        className="form-checkbox"
                      />
                      <span>{item.title}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">
                Observaciones {seccion.title}:
              </label>
              <textarea
                name={`obs-${seccion.id}`}
                className="w-full p-2 border rounded-md"
                rows="2"
                placeholder={`Ingrese observaciones para ${seccion.title}`}
              />
            </div>
          </div>
        );
      }
    } else if (seccion.items) {
      // Render textarea sections with observations
      return (
        <div className="space-y-4">
          <textarea
            name={`seccion-${seccion.id}`}
            className="w-full p-2 border rounded-md"
            rows="3"
            placeholder={`Ingrese ${seccion.title}`}
          />
          <div>
            <label className="block mb-2 text-sm font-medium">
              Observaciones:
            </label>
            <textarea
              name={`obs-${seccion.id}`}
              className="w-full p-2 border rounded-md"
              rows="2"
              placeholder={`Ingrese observaciones para ${seccion.title}`}
            />
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {savedUsers.length > 0 && (
        <div className="mb-6">
          <label className="block mb-2">Cargar datos guardados:</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={handleUserSelect}
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
      <form
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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
            {renderSection(seccion)}
          </div>
        ))}
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
