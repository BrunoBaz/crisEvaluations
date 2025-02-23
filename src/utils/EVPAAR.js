export const EVPAAR = {
  title:
    "Escala de Valoración de la Participación en la Alimentación y Actividades Relacionadas (EVPAAR)",
  interpretacion: {
    rangos: [
      { rango: "80-100", nivel: "Autónomo" },
      { rango: "60-79", nivel: "Supervisión mínima" },
      { rango: "40-59", nivel: "Asistencia moderada" },
      { rango: "0-39", nivel: "Alta dependencia" },
    ],
  },
  secciones: [
    {
      id: 1,
      title: "Capacidad para la Alimentación",
      subsecciones: [
        {
          id: 1.1,
          title: "Capacidad para llevarse los alimentos a la boca",
          items: [
            {
              value: 4,
              nivel: "Independiente",
              description: "Lleva los alimentos a la boca sin dificultad",
            },
            {
              value: 3,
              nivel: "Leve dificultad",
              description:
                "Puede hacerlo, pero con movimientos torpes o lentos",
            },
            {
              value: 2,
              nivel: "Asistencia parcial",
              description:
                "Necesita que le acerquen la comida o le guíen la mano",
            },
            {
              value: 1,
              nivel: "Dependencia alta",
              description: "Necesita que alguien le dé de comer completamente",
            },
          ],
        },
        {
          id: 1.2,
          title: "Capacidad para sujetar y manejar los cubiertos",
          items: [
            {
              value: 4,
              nivel: "Independiente",
              description: "Sujeta y usa los cubiertos sin dificultad",
            },
            {
              value: 3,
              nivel: "Leve dificultad",
              description:
                "Puede usar los cubiertos, pero con adaptaciones o esfuerzo",
            },
            {
              value: 2,
              nivel: "Asistencia parcial",
              description: "Necesita ayuda para sostenerlos o manipularlos",
            },
            {
              value: 1,
              nivel: "Dependencia total",
              description:
                "No puede usar cubiertos y requiere alimentación asistida",
            },
          ],
        },
        {
          id: 1.3,
          title: "Capacidad para masticar los alimentos",
          items: [
            {
              value: 4,
              nivel: "Masticación eficiente",
              description:
                "Puede masticar todo tipo de alimentos sin dificultad",
            },
            {
              value: 3,
              nivel: "Masticación lenta o con esfuerzo",
              description: "Mastica con lentitud o con dificultades leves",
            },
            {
              value: 2,
              nivel: "Necesita adaptación de la dieta",
              description: "Solo puede comer alimentos blandos o triturados",
            },
            {
              value: 1,
              nivel: "No puede masticar",
              description: "Requiere alimentación especial (triturada o sonda)",
            },
          ],
        },
        {
          id: 1.4,
          title: "Capacidad para deglutir los alimentos",
          items: [
            {
              value: 4,
              nivel: "Deglución normal",
              description: "Traga sin dificultad ni riesgo de aspiración",
            },
            {
              value: 3,
              nivel: "Riesgo ocasional de atragantamiento",
              description: "Puede tragar, pero con precaución",
            },
            {
              value: 2,
              nivel: "Necesita espesantes o control de líquidos",
              description: "Requiere adaptación para evitar atragantamientos",
            },
            {
              value: 1,
              nivel: "Deglución severamente afectada",
              description: "No puede tragar y necesita alimentación por sonda",
            },
          ],
        },
        {
          id: 1.5,
          title: "Necesidad de supervisión durante la comida",
          items: [
            {
              value: 4,
              nivel: "No necesita supervisión",
              description: "Come de manera autónoma y segura",
            },
            {
              value: 3,
              nivel: "Supervisión leve",
              description:
                "Necesita recordatorios para mantener el ritmo adecuado",
            },
            {
              value: 2,
              nivel: "Supervisión moderada",
              description:
                "Requiere vigilancia para evitar atragantamientos o accidentes",
            },
            {
              value: 1,
              nivel: "Supervisión total",
              description: "Requiere que otra persona lo alimente por completo",
            },
          ],
        },
        {
          id: 1.6,
          title: "Tipo de ayuda necesaria para la alimentación",
          items: [
            {
              value: 4,
              nivel: "No necesita ayuda",
              description: "Es completamente autónomo",
            },
            {
              value: 3,
              nivel: "Ayuda en la preparación",
              description:
                "Puede comer solo, pero necesita que le preparen el plato",
            },
            {
              value: 2,
              nivel: "Ayuda parcial",
              description:
                "Necesita asistencia para llevar los alimentos a la boca",
            },
            {
              value: 1,
              nivel: "Ayuda total",
              description:
                "Necesita ser alimentado completamente por otra persona",
            },
          ],
        },
        {
          id: 1.7,
          title: "Babeo o pérdida de alimento al comer",
          items: [
            {
              value: 2,
              nivel: "No",
              description: "No presenta babeo ni pérdida de alimento",
            },
            {
              value: 1,
              nivel: "Sí, ocasionalmente",
              description:
                "Ocurre en ciertas ocasiones, pero no afecta significativamente la alimentación",
            },
            {
              value: 0,
              nivel: "Sí, de manera frecuente",
              description:
                "Presenta babeo constante o pérdida de alimento durante la comida",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Alimentación y uso de utensilios",
      items: [
        {
          value: 4,
          nivel: "Independiente",
          description:
            "Come solo sin dificultad, usa cubiertos y maneja líquidos sin ayuda",
        },
        {
          value: 3,
          nivel: "Independiente con apoyo mínimo",
          description:
            "Puede comer solo, pero necesita ayuda en algunas tareas",
        },
        {
          value: 2,
          nivel: "Necesita asistencia moderada",
          description:
            "Requiere apoyo frecuente para llevar los alimentos a la boca o controlar el ritmo de la ingesta",
        },
        {
          value: 1,
          nivel: "Dependencia severa",
          description:
            "Necesita alimentación asistida completamente, pero coopera en el proceso",
        },
        {
          value: 0,
          nivel: "Dependencia total",
          description:
            "No participa en la alimentación y requiere alimentación por sonda o vía alternativa",
        },
      ],
    },
    {
      id: 3,
      title: "Movilidad del miembro superior",
      items: [
        {
          value: 4,
          nivel: "Movilidad completa",
          description:
            "Puede mover su brazo y mano sin dificultad para la alimentación",
        },
        {
          value: 3,
          nivel: "Movilidad con leve dificultad",
          description:
            "Puede mover su brazo con alguna limitación, pero logra alimentarse",
        },
        {
          value: 2,
          nivel: "Movilidad reducida",
          description:
            "Dificultades notables para manipular utensilios, requiere adaptaciones",
        },
        {
          value: 1,
          nivel: "Movilidad severamente limitada",
          description: "No puede llevarse los alimentos a la boca sin ayuda",
        },
        {
          value: 0,
          nivel: "Movilidad nula",
          description: "No tiene movilidad funcional en el miembro superior",
        },
      ],
    },
    {
      id: 4,
      title: "Procesamiento sensorial oral",
      items: [
        {
          value: "N/A",
          nivel: "N/A",
          description: "No aplica",
        },
        {
          value: 4,
          nivel: "Respuesta adecuada",
          description:
            "Tolera y gestiona bien diferentes texturas, temperaturas y sabores",
        },
        {
          value: 3,
          nivel: "Leve alteración sensorial",
          description: "Presenta leves preferencias o aversiones sensoriales",
        },
        {
          value: 2,
          nivel: "Sensibilidad moderada",
          description:
            "Rechaza ciertas texturas o temperaturas, requiere adaptación",
        },
        {
          value: 1,
          nivel: "Sensibilidad severa",
          description:
            "Dificultad significativa con múltiples texturas y temperaturas",
        },
        {
          value: 0,
          nivel: "Respuesta extrema",
          description: "Rechazo total de alimentos por factores sensoriales",
        },
      ],
    },
    {
      id: 5,
      title: "Postura y posicionamiento durante la alimentación",
      subsecciones: [
        {
          id: 5.1,
          title: "Control Postural",
          items: [
            {
              value: 4,
              nivel: "Control postural adecuado",
              description:
                "Se sienta y mantiene la postura sin necesidad de ajustes",
            },
            {
              value: 3,
              nivel: "Control postural con ajustes mínimos",
              description:
                "Puede mantenerse en postura adecuada con supervisión o ligeros ajustes",
            },
            {
              value: 2,
              nivel: "Control postural con asistencia",
              description:
                "Necesita apoyo o corrección frecuente para evitar malas posturas o riesgo de aspiración",
            },
            {
              value: 1,
              nivel: "Control postural deficiente",
              description:
                "No puede mantener una postura adecuada sin apoyo externo",
            },
            {
              value: 0,
              nivel: "No puede mantenerse en postura adecuada",
              description: "Requiere asistencia total para posicionarse",
            },
          ],
        },
        {
          id: 5.2,
          title: "Uso de accesorios de posicionamiento",
          items: [
            {
              value: 2,
              nivel: "No",
              description: "No requiere accesorios de posicionamiento",
            },
            {
              value: 1,
              nivel: "Sí, ocasionalmente",
              description:
                "Usa cojines, reposacabezas o reposapiés de manera esporádica",
            },
            {
              value: 0,
              nivel: "Sí, de forma habitual",
              description:
                "Requiere accesorios de posicionamiento constantemente para mantener la postura",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Reconocimiento y regulación del hambre y la saciedad",
      items: [
        {
          value: 4,
          nivel: "Independiente",
          description:
            "Reconoce y expresa claramente cuándo tiene hambre o está satisfecho",
        },
        {
          value: 3,
          nivel: "Supervisión mínima",
          description:
            "Reconoce la sensación de hambre y saciedad, pero necesita apoyo para regular cantidades",
        },
        {
          value: 2,
          nivel: "Asistencia parcial",
          description:
            "Requiere ayuda para identificar el momento adecuado para comer o dejar de comer",
        },
        {
          value: 1,
          nivel: "Dependencia severa",
          description: "No reconoce hambre o saciedad sin guía constante",
        },
        {
          value: 0,
          nivel: "Dependencia total",
          description: "No puede expresar hambre o saciedad",
        },
      ],
    },
    {
      id: 7,
      title: "Toma de decisiones en la alimentación",
      items: [
        {
          value: 4,
          nivel: "Independiente",
          description:
            "Escoge sus alimentos y expresa preferencias de manera clara",
        },
        {
          value: 3,
          nivel: "Supervisión mínima",
          description:
            "Puede elegir entre opciones, pero necesita ayuda para equilibrar su alimentación",
        },
        {
          value: 2,
          nivel: "Asistencia parcial",
          description:
            "Puede hacer elecciones simples si se le presentan opciones específicas",
        },
        {
          value: 1,
          nivel: "Dependencia severa",
          description:
            "Necesita orientación constante para tomar decisiones sobre su comida",
        },
        {
          value: 0,
          nivel: "Dependencia total",
          description: "No puede tomar decisiones sobre su alimentación",
        },
      ],
    },
    {
      id: 8,
      title: "Posicionamiento y actuación de la persona que brinda apoyo",
      items: [
        {
          value: "N/A",
          nivel: "N/A",
          description: "No aplica",
        },
        {
          value: 4,
          nivel: "Óptimo",
          description:
            "Se posiciona correctamente, a la altura y lado adecuado, usa tiempos adecuados y utensilios apropiados",
        },
        {
          value: 3,
          nivel: "Bueno",
          description:
            "Se posiciona bien, pero podría mejorar la altura o el uso de utensilios adaptados",
        },
        {
          value: 2,
          nivel: "Regular",
          description:
            "Su posición o ritmo no es adecuado, generando dificultades",
        },
        {
          value: 1,
          nivel: "Deficiente",
          description:
            "Mala posición y/o uso inadecuado de utensilios, afectando la alimentación",
        },
        {
          value: 0,
          nivel: "Inadecuado",
          description: "No sigue estrategias adecuadas para la alimentación",
        },
      ],
    },
    {
      id: 9,
      title: "Ambiente y entorno de la alimentación",
      items: [
        {
          value: 4,
          nivel: "Óptimo",
          description:
            "Ambiente tranquilo, sin ruidos excesivos, con buena iluminación y espacio adecuado",
        },
        {
          value: 3,
          nivel: "Bueno",
          description:
            "Pequeñas distracciones o ligeras dificultades, pero en general el ambiente es adecuado",
        },
        {
          value: 2,
          nivel: "Regular",
          description:
            "Ruido moderado, iluminación deficiente o espacio limitado afecta la alimentación",
        },
        {
          value: 1,
          nivel: "Deficiente",
          description:
            "Ambiente caótico, con distracciones constantes o iluminación inadecuada",
        },
        {
          value: 0,
          nivel: "Inadecuado",
          description:
            "Entorno perjudicial para la alimentación, sin adaptaciones necesarias",
        },
      ],
    },
    {
      id: 10,
      title: "Administración de Medicación Relacionada con la Alimentación",
      subsecciones: [
        {
          id: 10.1,
          title: "Independencia en la toma de medicación",
          items: [
            {
              value: "N/A",
              nivel: "N/A",
              description: "No aplica",
            },
            {
              value: 4,
              nivel: "Independiente",
              description: "Toma su medicación de manera autónoma",
            },
            {
              value: 3,
              nivel: "Supervisión mínima",
              description:
                "Puede tomar su medicación, pero necesita recordatorios",
            },
            {
              value: 2,
              nivel: "Asistencia parcial",
              description:
                "Requiere ayuda para preparar o administrar la medicación",
            },
            {
              value: 1,
              nivel: "Dependencia severa",
              description:
                "No puede gestionar su medicación, pero colabora al recibirla",
            },
            {
              value: 0,
              nivel: "Dependencia total",
              description: "No participa en la administración de su medicación",
            },
          ],
        },
        {
          id: 10.2,
          title: "Formato de la medicación y adaptación",
          items: [
            {
              value: "N/A",
              nivel: "N/A",
              description: "No aplica",
            },
            {
              value: 4,
              nivel: "Tabletas o cápsulas",
              description: "Puede tragarlas sin dificultad",
            },
            {
              value: 3,
              nivel: "Tabletas o cápsulas",
              description: "Necesita trocearlas para ingerirlas",
            },
            {
              value: 2,
              nivel: "Líquidos",
              description: "Puede ingerirlos con facilidad",
            },
            {
              value: 1,
              nivel: "Líquidos",
              description: "Necesita espesantes para ingerirlos",
            },
            {
              value: 0,
              nivel: "Vía alternativa",
              description:
                "Se administra por vía enteral con supervisión o apoyo total",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      title: "Higiene antes y después de la alimentación",
      items: [
        {
          value: 4,
          nivel: "Independiente",
          description: "Se lava las manos y la boca sin necesidad de ayuda",
        },
        {
          value: 3,
          nivel: "Higiene con supervisión",
          description: "Puede limpiarse solo, pero requiere supervisión",
        },
        {
          value: 2,
          nivel: "Higiene con asistencia parcial",
          description:
            "Necesita ayuda para completar la limpieza, pero realiza algunos pasos solo",
        },
        {
          value: 1,
          nivel: "Higiene con asistencia total",
          description:
            "No puede realizar la higiene sin ayuda, pero colabora en el proceso",
        },
        {
          value: 0,
          nivel: "Dependencia total",
          description:
            "No participa en la higiene, requiere asistencia completa",
        },
      ],
    },
  ],
};
