export const MECV = {
  title: "Método de Exploración Clínica de Volumen-Viscosidad (MECV-V)",
  secciones: [
    {
      id: 1,
      title: "Viscosidad",
      subsecciones: [
        {
          id: 1.1,
          title: "Néctar",
          items: [
            {
              id: "tos",
              title: "TOS",
              values: ["", "Sí", "No"]
            },
            {
              id: "cambio_voz",
              title: "Cambio de voz",
              values: ["", "Sí", "No"]
            },
            {
              id: "desaturacion",
              title: "Desaturación de oxígeno",
              values: ["", "Sí", "No"]
            }
          ],
          volumes: ["5ml", "10ml", "20ml"]
        },
        {
          id: 1.2,
          title: "Líquido",
          items: [
            {
              id: "tos",
              title: "TOS",
              values: ["", "Sí", "No"]
            },
            {
              id: "cambio_voz",
              title: "Cambio de voz",
              values: ["", "Sí", "No"]
            },
            {
              id: "desaturacion",
              title: "Desaturación de oxígeno",
              values: ["", "Sí", "No"]
            }
          ],
          volumes: ["5ml", "10ml", "20ml"]
        },
        {
          id: 1.3,
          title: "Pudding",
          items: [
            {
              id: "tos",
              title: "TOS",
              values: ["", "Sí", "No"]
            },
            {
              id: "cambio_voz",
              title: "Cambio de voz",
              values: ["", "Sí", "No"]
            },
            {
              id: "desaturacion",
              title: "Desaturación de oxígeno",
              values: ["", "Sí", "No"]
            }
          ],
          volumes: ["5ml", "10ml", "20ml"]
        }
      ]
    },
    {
      id: 2,
      title: "Evaluación Final",
      items: [
        {
          id: "evaluacion_final",
          title: "Evaluación Final",
          type: "textarea"
        }
      ]
    },
    {
      id: 3,
      title: "Recomendación Dietética",
      items: [
        {
          id: "recomendacion_dietetica",
          title: "Recomendación Dietética",
          type: "textarea"
        }
      ]
    },
    {
      id: 4,
      title: "Ingesta de Fluidos Recomendada",
      subsecciones: [
        {
          id: 4.1,
          title: "Viscosidad",
          items: [
            {
              id: "liquido",
              title: "Líquido",
              type: "checkbox"
            },
            {
              id: "nectar",
              title: "Néctar",
              type: "checkbox"
            },
            {
              id: "pudding",
              title: "Pudding",
              type: "checkbox"
            }
          ]
        },
        {
          id: 4.2,
          title: "Volumen",
          items: [
            {
              id: "bajo",
              title: "Bajo",
              type: "checkbox"
            },
            {
              id: "medio",
              title: "Medio",
              type: "checkbox"
            },
            {
              id: "alto",
              title: "Alto",
              type: "checkbox"
            }
          ]
        }
      ]
    }
  ]
};