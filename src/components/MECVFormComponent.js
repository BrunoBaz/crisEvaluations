"use client";
import { useState, useEffect, useCallback } from "react";

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
  // Update the handleInputChange function to handle checkbox changes
  // Update handleInputChange function
  const handleInputChange = (e) => {
    if (e.target.name === "nombre") return;

    const form = e.target.form;
    if (!form || !currentUser) return;

    const formData = new FormData(form);

    // Special handling for checkboxes
    if (e.target.type === "checkbox") {
      formData.delete(e.target.name); // Remove old value
      formData.append(e.target.name, e.target.checked ? "on" : "off");
    }

    processAndSaveForm(formData, currentUser);
  };
  // Update the processAndSaveForm function to properly handle section 4 checkboxes
  // Update the volume data processing in processAndSaveForm function
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
        // Inside processAndSaveForm function, update the subsection handling:
        seccion.subsecciones.forEach((subseccion) => {
          if (subseccion.volumes) {
            const subseccionData = {
              observaciones: formData.get(`obs-${seccion.id}-${subseccion.id}`),
              datos: {},
            };
            // Inside processAndSaveForm function, update the volume data processing:
            subseccion.volumes.forEach((volume) => {
              const volumeData = {};
              if (subseccion.items) {
                subseccion.items.forEach((item) => {
                  if (item.items) {
                    // Handle nested items (for Líquido and Pudding)
                    item.items.forEach((subItem) => {
                      const value = formData.get(
                        `${subseccion.id}-${subItem.id}-${volume}`
                      );
                      if (value === "on") {
                        volumeData[subItem.id] = true;
                      }
                    });
                  } else {
                    // Handle direct items (for Néctar)
                    const value = formData.get(
                      `${subseccion.id}-${item.id}-${volume}`
                    );
                    if (value === "on") {
                      volumeData[item.id] = true;
                    }
                  }
                });
              }
              if (Object.keys(volumeData).length > 0) {
                subseccionData.datos[volume] = volumeData;
              }
            });
            result.evaluacion[seccion.id].subsecciones[subseccion.id] =
              subseccionData;
          } else {
            const checkboxData = {};
            subseccion.items.forEach((item) => {
              // Fix: Use the correct name format for section 4 checkboxes
              const value = formData.get(`${subseccion.id}-${item.id}`);
              if (value === "on") {
                checkboxData[item.id] = true;
              }
            });
            // Store the checkbox data properly
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
  // Update the renderSection function to properly handle section 4 checkboxes
  const renderSection = (seccion) => {
    if (seccion.subsecciones) {
      if (seccion.subsecciones[0]?.volumes) {
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
                    {/* Grupo de Seguridad */}
                    <tr>
                      <td
                        colSpan={subseccion.volumes.length + 1}
                        className="border p-2 bg-gray-100 font-semibold"
                      >
                        Alteraciones o signos de seguridad
                      </td>
                    </tr>
                    {(subseccion.items || [])
                      .filter(
                        (item) =>
                          item.group === "Alteraciones o signos de seguridad" ||
                          (item.id === "signos_seguridad" && item.items)
                      )
                      .map((item) => {
                        if (item.items) {
                          return item.items.map((subItem) => (
                            <tr key={subItem.id}>
                              <td className="border p-2">{subItem.title}</td>
                              {subseccion.volumes.map((volume) => (
                                <td
                                  key={volume}
                                  className="border p-2 text-center"
                                >
                                  <input
                                    type="checkbox"
                                    name={`${subseccion.id}-${subItem.id}-${volume}`}
                                    className="h-4 w-4"
                                    onChange={handleInputChange}
                                    checked={
                                      formData?.evaluacion?.[seccion.id]
                                        ?.subsecciones?.[subseccion.id]
                                        ?.datos?.[volume]?.[subItem.id] || false
                                    }
                                  />
                                </td>
                              ))}
                            </tr>
                          ));
                        }
                        return (
                          <tr key={item.id}>
                            <td className="border p-2">{item.title}</td>
                            {subseccion.volumes.map((volume) => (
                              <td
                                key={volume}
                                className="border p-2 text-center"
                              >
                                <input
                                  type="checkbox"
                                  name={`${subseccion.id}-${item.id}-${volume}`}
                                  className="h-4 w-4"
                                  onChange={handleInputChange}
                                />
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    {/* Grupo de Eficacia */}
                    <tr>
                      <td
                        colSpan={subseccion.volumes.length + 1}
                        className="border p-2 bg-gray-100 font-semibold"
                      >
                        Alteraciones o signos de eficacia
                      </td>
                    </tr>
                    {(subseccion.items || [])
                      .filter(
                        (item) =>
                          item.group === "Alteraciones o signos de eficacia" ||
                          (item.id === "signos_eficacia" && item.items)
                      )
                      .map((item) => {
                        if (item.items) {
                          return item.items.map((subItem) => (
                            <tr key={subItem.id}>
                              <td className="border p-2">{subItem.title}</td>
                              {subseccion.volumes.map((volume) => (
                                <td
                                  key={volume}
                                  className="border p-2 text-center"
                                >
                                  <input
                                    type="checkbox"
                                    name={`${subseccion.id}-${subItem.id}-${volume}`}
                                    className="h-4 w-4"
                                    onChange={handleInputChange}
                                  />
                                </td>
                              ))}
                            </tr>
                          ));
                        }
                        return (
                          <tr key={item.id}>
                            <td className="border p-2">{item.title}</td>
                            {subseccion.volumes.map((volume) => (
                              <td
                                key={volume}
                                className="border p-2 text-center"
                              >
                                <input
                                  type="checkbox"
                                  name={`${subseccion.id}-${item.id}-${volume}`}
                                  className="h-4 w-4"
                                  onChange={handleInputChange}
                                />
                              </td>
                            ))}
                          </tr>
                        );
                      })}
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
                    onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      } else {
        // Render checkbox groups
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {(seccion.subsecciones || []).map((subseccion) => (
                <div key={subseccion.id} className="space-y-2">
                  <h4 className="font-medium">{subseccion.title}</h4>
                  {/* Render checkboxes for each item */}
                  {(subseccion.items || []).map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name={`${subseccion.id}-${item.id}`}
                        className="form-checkbox"
                        onChange={handleInputChange}
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
                onChange={handleInputChange}
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
            onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
        </div>
      );
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("Por favor, ingrese un nombre de usuario");
      return;
    }

    const formData = new FormData(e.target);
    processAndSaveForm(formData, currentUser);
    alert("Evaluación guardada correctamente");
  };
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

      const savedData = localStorage.getItem(`mecv_${currentUser}`); // Fix: Changed from evpaar_ to mecv_
      if (!savedData) {
        alert("No hay datos guardados para descargar");
        return;
      }

      const blob = new Blob([savedData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mecv_${initials}.json`; // Using initials here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    [currentUser]
  );
  const handleUserSelect = (e) => {
    const selectedUserName = e.target.value;
    setSelectedUser(selectedUserName);

    if (!selectedUserName) {
      setCurrentUser("");
      setFormData({}); // Clear form data when no user is selected
      return;
    }

    try {
      const savedData = localStorage.getItem(`mecv_${selectedUserName}`);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        setCurrentUser(selectedUserName);

        // Update form fields with saved data
        requestAnimationFrame(() => {
          const form = document.querySelector("form");
          if (!form) return;

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

                      // Handle checkbox data
                      if (subsecData.datos) {
                        // In handleUserSelect, update the checkbox handling section
                        if (subsecData.datos) {
                          // Handle volume-based checkboxes
                          if (
                            Object.keys(subsecData.datos).some(
                              (key) =>
                                subsecData.datos[key] &&
                                typeof subsecData.datos[key] === "object"
                            )
                          ) {
                            Object.entries(subsecData.datos).forEach(
                              ([volume, volumeData]) => {
                                Object.keys(volumeData).forEach((itemId) => {
                                  const checkbox = form.querySelector(
                                    `input[name="${subsecId}-${itemId}-${volume}"]`
                                  );
                                  if (checkbox) {
                                    checkbox.checked = true;
                                  }
                                });
                              }
                            );
                          } else {
                            // Handle regular checkboxes
                            Object.keys(subsecData.datos).forEach((itemId) => {
                              const checkbox = form.querySelector(
                                `input[name="${subsecId}-${itemId}"]`
                              );
                              if (checkbox) {
                                checkbox.checked = true;
                              }
                            });
                          }
                        }
                      }
                    }
                  );
                }
              }
            );
          }
        });
      }
    } catch (error) {
      console.error("Error loading saved data:", error);
    }
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
      <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-2">Patologías:</label>
              <textarea
                name="patologias"
                className="w-full p-2 border rounded-md"
                rows="3"
                onChange={handleInputChange}
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
