"use client";
import { useState, useEffect } from "react";

export function HDOFFormComponent({ data }) {
  const [formData, setFormData] = useState({});
  const [savedUsers, setSavedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const users = Object.keys(localStorage).filter((key) =>
        key.startsWith("hdof_")
      );
      setSavedUsers(users.map((key) => key.replace("hdof_", "")));
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
    if (e.target.name === "nombre") return;

    const form = e.target.form;
    if (!form || !currentUser) return;

    const formData = new FormData(form);
    processAndSaveForm(formData, currentUser);
  };

  const handleDownload = (e) => {
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

    const savedData = localStorage.getItem(`hdof_${currentUser}`);
    if (!savedData) {
      alert("No hay datos guardados para descargar");
      return;
    }

    const blob = new Blob([savedData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hdof_${initials}.json`; // Using initials here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

    data.secciones.forEach((seccion) => {
      result.evaluacion[seccion.id] = {};

      if (seccion.subsecciones) {
        seccion.subsecciones.forEach((subseccion) => {
          const subseccionData = {};

          subseccion.items.forEach((item) => {
            if (item.subsections) {
              const subsectionsData = {};
              item.subsections.forEach((sub) => {
                const value = formData.get(
                  `${subseccion.id}-${item.id}-${sub.id}`
                );
                if (value) subsectionsData[sub.id] = value;
              });
              if (Object.keys(subsectionsData).length > 0) {
                subseccionData[item.id] = subsectionsData;
              }
            } else {
              const value = formData.get(`${subseccion.id}-${item.id}`);
              if (value) subseccionData[item.id] = value;
            }
          });

          if (Object.keys(subseccionData).length > 0) {
            result.evaluacion[seccion.id][subseccion.id] = subseccionData;
          }
        });
      }
    });

    // Process anexos if they exist
    if (data.anexos) {
      result.anexos = {};
      data.anexos.forEach((anexo) => {
        const anexoData = {};
        anexo.items.forEach((item) => {
          if (item.items) {
            const itemsData = {};
            item.items.forEach((subItem) => {
              const value = formData.get(`${anexo.id}-${subItem.id}`);
              if (value) itemsData[subItem.id] = value;
            });
            if (Object.keys(itemsData).length > 0) {
              anexoData[item.id] = itemsData;
            }
          }
        });
        if (Object.keys(anexoData).length > 0) {
          result.anexos[anexo.id] = anexoData;
        }
      });
    }

    try {
      localStorage.setItem(`hdof_${userName}`, JSON.stringify(result));
      setFormData(result);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const renderItems = (items, sectionId, subsectionId = null) => {
    if (!items) return null; // Add safety check

    return items.map((item) => {
      if (!item) return null; // Add safety check for individual items

      return (
        <div key={item.id} className="mb-4">
          <label className="block mb-2">
            {item.title}
            {item.subtitle && (
              <span className="block text-sm text-gray-600">
                {item.subtitle}
              </span>
            )}
          </label>
          {item.subsections ? (
            <div className="space-y-2 ml-4">
              {item.subsections?.map((sub) => {
                if (!sub) return null; // Add safety check for subsections
                return (
                  <div key={sub.id} className="flex items-center">
                    <span className="mr-2">{sub.title}:</span>
                    <select
                      name={`${subsectionId || sectionId}-${item.id}-${sub.id}`}
                      className="border rounded p-1"
                      onChange={handleInputChange}
                    >
                      <option value="">Seleccionar</option>
                      {sub.values?.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          ) : item.values ? (
            <select
              name={`${subsectionId || sectionId}-${item.id}`}
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
            >
              <option value="">Seleccionar</option>
              {item.values?.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ) : (
            <textarea
              name={`${subsectionId || sectionId}-${item.id}`}
              className="w-full p-2 border rounded-md"
              rows="2"
              onChange={handleInputChange}
            />
          )}
          {item.note && (
            <span className="block text-sm text-gray-600 mt-1">
              {item.note}
            </span>
          )}
        </div>
      );
    });
  };

  const renderAnexos = () => {
    if (!data?.anexos) return null;

    return data.anexos.map((anexo) => {
      if (!anexo) return null; // Add safety check

      return (
        <div key={anexo.id} className="mt-8 space-y-4 p-4 border rounded-lg">
          <h2 className="text-xl font-bold">{anexo.title}</h2>
          {anexo.subtitle && (
            <h3 className="text-lg text-gray-700">{anexo.subtitle}</h3>
          )}

          {anexo.items?.map((item) => {
            if (!item) return null; // Add safety check

            return (
              <div key={item.id} className="space-y-4">
                {item.title && <h4 className="font-semibold">{item.title}</h4>}
                {item.items ? (
                  <div className="ml-4 space-y-2">
                    {item.items?.map((subItem) => {
                      if (!subItem) return null; // Add safety check

                      return (
                        <div key={subItem.id} className="flex flex-col">
                          <div className="flex items-center">
                            <span className="font-medium">{subItem.title}</span>
                            {subItem.description && (
                              <span className="ml-2 text-gray-600">
                                - {subItem.description}
                              </span>
                            )}
                          </div>
                          {subItem.values && (
                            <div className="ml-4 mt-1">
                              {subItem.values?.map((value, index) => (
                                <span
                                  key={index}
                                  className="mr-2 text-gray-700"
                                >
                                  {value}
                                </span>
                              ))}
                            </div>
                          )}
                          {subItem.text && (
                            <p className="ml-4 mt-1 text-gray-700">
                              {subItem.text}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="ml-4">
                    {item.values?.map((value, index) => (
                      <span key={index} className="mr-2">
                        {value}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    });
  };
  const handleUserSelect = (e) => {
    const selectedUserName = e.target.value;
    setSelectedUser(selectedUserName);

    if (!selectedUserName) {
      setCurrentUser("");
      return;
    }

    try {
      const savedData = localStorage.getItem(`hdof_${selectedUserName}`);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        setCurrentUser(selectedUserName);

        setTimeout(() => {
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
                  Object.entries(sectionData).forEach(
                    ([subsectionId, subsectionData]) => {
                      Object.entries(subsectionData).forEach(
                        ([itemId, itemValue]) => {
                          if (typeof itemValue === "object") {
                            // Handle nested subsections
                            Object.entries(itemValue).forEach(
                              ([subId, value]) => {
                                const input = form.querySelector(
                                  `[name="${subsectionId}-${itemId}-${subId}"]`
                                );
                                if (input) input.value = value;
                              }
                            );
                          } else {
                            const input = form.querySelector(
                              `[name="${subsectionId}-${itemId}"]`
                            );
                            if (input) input.value = itemValue;
                          }
                        }
                      );
                    }
                  );
                }
              );
            }

            // Fill anexos if they exist
            if (parsedData.anexos) {
              Object.entries(parsedData.anexos).forEach(
                ([anexoId, anexoData]) => {
                  Object.entries(anexoData).forEach(([itemId, itemsData]) => {
                    Object.entries(itemsData).forEach(([subItemId, value]) => {
                      const input = form.querySelector(
                        `[name="${anexoId}-${subItemId}"]`
                      );
                      if (input) input.value = value;
                    });
                  });
                }
              );
            }
          }
        }, 0);
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

      <form onChange={handleInputChange} className="space-y-6">
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

        {data.secciones.map((seccion) => (
          <div key={seccion.id} className="space-y-4 p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{seccion.title}</h2>
            {seccion.subtitle && (
              <h3 className="text-lg text-gray-700">{seccion.subtitle}</h3>
            )}
            {seccion.subsecciones?.map((subseccion) => (
              <div key={subseccion.id} className="ml-4 space-y-4">
                <h3 className="text-lg font-semibold">{subseccion.title}</h3>
                {renderItems(subseccion.items, seccion.id, subseccion.id)}
              </div>
            ))}
          </div>
        ))}

        {renderAnexos()}

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
