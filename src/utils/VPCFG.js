export const VPCFG = {
  title: "Evaluación Pares Craneales",
  secciones: [
    {
      id: 1,
      title: "Trigémino",
      items: [
        {
          id: "masticacion",
          title: "Masticación",
          type: "text",
        },
        {
          id: "fuerza_cierre",
          title: "Fuerza del cierre mandibular",
          type: "text",
        },
        {
          id: "lateralizacion",
          title: "Lateralización mandibular",
          type: "text",
        },
        {
          id: "sensibilidad_cara",
          title: "Sensibilidad",
          type: "text",
        },
      ],
    },
    {
      id: 2,
      title: "Facial",
      subsecciones: [
        {
          id: 2.1,
          title: "Inspección en reposo",
          items: [
            {
              id: "frente",
              title: "Frente",
              type: "text",
            },
            {
              id: "ojo",
              title: "Ojo",
              type: "text",
            },
            {
              id: "boca",
              title: "Boca",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Glosofaríngeo",
      items: [
        {
          id: "reflejo_nauseoso",
          title: "",
          type: "text",
        },
      ],
    },
    {
      id: 4,
      title: "Neumogástrico (Vago)",
      subsecciones: [
        {
          id: 4.1,
          title: "Función del paladar",
          items: [
            {
              id: "paladar_reposo",
              title: "Paladar en reposo (simetría)",
              type: "text",
            },
            {
              id: "paladar_movimiento",
              title: "En movimiento (/a/) ó estimulación reflejo nauseoso (IX)",
              type: "text",
            },
          ],
        },
        {
          id: 4.2,
          title: "Función laríngea",
          items: [
            {
              id: "voz",
              title:
                "Evaluación preliminar valoración voz /a/ prolongada. 7-8 s",
              type: "text",
            },
            {
              id: "cambios_tono",
              title: "Cambios de tono",
              type: "text",
            },
            {
              id: "cierre_glotico",
              title: "Cierre glótico",
              type: "text",
            },
            {
              id: "tos",
              title: "Movimiento muscular",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Espinal",
      items: [
        {
          id: "musculos",
          title:
            "Tamaño y simetría de los músculos esternocleidomastoideo. Palpación",
          type: "text",
        },
        {
          id: "giro_cabeza",
          title:
            "Giro de cabeza hacia un lado manteniéndolo y el examinador intenta colocarla a línea media de nuevo",
          type: "text",
        },
        {
          id: "empuje_cabeza",
          title: "Empuje de cabeza hacia delante en contrarresistencia",
          type: "text",
        },
        {
          id: "elevacion_hombros",
          title: "Elevación de hombros en contrarresistencia",
          type: "text",
        },
      ],
    },
    {
      id: 6,
      title: "Hipogloso",
      items: [
        {
          id: "lengua_reposo",
          title: "Exploración de la lengua en reposo",
          type: "text",
        },
        {
          id: "sacar_lengua",
          title: "Sacar la lengua",
          type: "text",
        },
        {
          id: "movimiento_arriba_atras",
          title: "Arriba y hacia atrás",
          type: "text",
        },
        {
          id: "movimiento_laterales",
          title: "Laterales",
          type: "text",
        },
        {
          id: "contrarresistencia",
          title: "Contrarresistencia",
          type: "text",
        },
      ],
    },
    {
      id: 7,
      title: "Fases de la alimentación",
      subsecciones: [
        {
          id: 7.1,
          title: "Fase Oral preparatoria",
          items: [
            {
              id: "piezas_dentales",
              title: "Piezas dentales",
              values: ["Todas las piezas", "Faltan piezas", "Dentadura postiza"],
            },
            {
              id: "babeo",
              title: "Competencia esfínter labial/sellado labial - Presencia de babeo",
              values: ["Si", "No"],
            },
            {
              id: "movimientos_linguales",
              title: "Movimientos linguales",
              values: ["Anterior", "Posterior", "Retracción", "Laterales", "N/A"],
              multiple: true,
            },
            {
              id: "masticacion",
              title: "Masticación",
              values: ["Presente", "No presente", "N/A"],
            },
            {
              id: "sensibilidad_orofaringea",
              title: "Sensibilidad orofaríngea",
              values: ["Si", "No", "N/A"],
            },
            {
              id: "limpieza_surcos",
              title: "Capacidad de limpieza de los surcos gingivolabiales",
              values: ["Presente", "No presente", "N/A"],
            },
            {
              id: "tipper",
              title: "Capacidad de hacer Tipper",
              values: ["Presente", "No presente", "N/A"],
            },
          ],
        },
        {
          id: 7.2,
          title: "Fase oral de transporte",
          items: [
            {
              id: "capacidad_bolo",
              title: "Capacidad para transportar el bolo",
              subsections: [
                {
                  id: "laterales",
                  title: "Lateralización de lengua",
                  values: ["Normal", "Alterado", "N/A"],
                },
                {
                  id: "elevar_paldar",
                  title: "Elevar y contactar con paladar duro",
                  values: ["Normal", "Alterado", "N/A"],
                },
                {
                  id: "elevar_contra",
                  title: "Elevar en contrarresistencia",
                  values: ["Normal", "Alterado", "N/A"],
                },
                {
                  id: "repasar",
                  title: "Repasar la lengua con el paladar",
                  values: ["Normal", "Alterado", "N/A"],
                },
              ],
            },
            {
              id: "sello_palatogloso",
              title: "Sellado palatogloso",
              subsections: [
                {
                  id: "pronunciar",
                  title: "Pronunciar k/k/k",
                  values: ["Normal", "Alterado", "N/A"],
                },
                {
                  id: "depresor",
                  title: "Expulsar depresor",
                  values: ["Normal", "Alterado", "N/A"],
                },
                {
                  id: "reflejo_palatal",
                  title: "Reflejo palatal",
                  values: ["Normal", "Alterado", "N/A"],
                },
              ],
            },
            {
              id: "fuerza_propulsion",
              title: "Fuerza en la propulsión",
              values: ["Normal", "Alterado", "N/A"],
            },
          ],
        },
        {
          id: 7.3,
          title: "Fase faríngea",
          items: [
            {
              id: "calidad_vocal",
              title: "Calidad vocal",
              values: ["Normal", "Aérea", "Húmeda", "Nasal"],
            },
            {
              id: "retraso_disparo",
              title: "Retraso del disparo deglutorio",
              values: ["Si", "No"],
            },
            {
              id: "elevar_velo",
              title: "Elevar el velo (decir y sostener una /a/)",
              values: ["Normal", "Alterado"],
            },
          ],
        },
      ],
    },
  ],
};
