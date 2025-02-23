export const VPCFG = {
  title: "Evaluación Pares Craneales",
  secciones: [
    {
      id: 1,
      title: "Trigémino",
      items: [
        {
          id: "masticacion",
          title: "Masticación. Forma directa palpación Masetero",
          type: "text"
        },
        {
          id: "fuerza_cierre",
          title: "Fuerza del cierre mandibular, contrarresistencia",
          type: "text"
        },
        {
          id: "lateralizacion",
          title: "Lateralización mandibular, contrarresistencia",
          type: "text"
        },
        {
          id: "sensibilidad_cara",
          title: "Sensibilidad; aplicación algodón por toda la cara, presión fuerte y constante. 3 zonas",
          type: "text"
        },
        {
          id: "sensibilidad_lengua",
          title: "Sensibilidad: 2/3 anteriores de la lengua estímulos táctiles",
          type: "text"
        }
      ]
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
              title: "Frente. Arrugar la frente y mirar al techo, simetría de arrugamiento",
              type: "text"
            },
            {
              id: "ojo",
              title: "Ojo. Cierre de párpados. Central/periférica",
              type: "text"
            },
            {
              id: "boca",
              title: "Boca. Movimiento boca. Sonrisa, morritos, comisuras hacia abajo",
              type: "text"
            }
          ]
        },
        {
          id: 2.2,
          title: "Otros",
          items: [
            {
              id: "estapedio",
              title: "Estapedio. Intensos y molestos ruidos",
              type: "text"
            },
            {
              id: "sensitivo",
              title: "Sensitivo. Gusto 2/3 anteriores; salado, dulce, ácido, amargo",
              type: "text"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Glosofaríngeo",
      items: [
        {
          id: "reflejo_nauseoso",
          title: "R. Nauseoso, integridad Glosofaríngeo, estimular pared faríngea. Observar si percibe el estímulo, si percibe a nivel sensitivo puede estar afectada sólo la acción motora que realiza el X, alteración sensitiva implica afectación del IX",
          type: "text"
        }
      ]
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
              type: "text"
            },
            {
              id: "paladar_movimiento",
              title: "En movimiento (/a/) ó estimulación reflejo nauseoso (IX)",
              type: "text"
            }
          ]
        },
        {
          id: 4.2,
          title: "Función laríngea laringoscopia",
          items: [
            {
              id: "voz",
              title: "Evaluación preliminar valoración voz /a/ prolongada. 7-8 s",
              type: "text"
            },
            {
              id: "cambios_tono",
              title: "Cambios de tono",
              type: "text"
            },
            {
              id: "cierre_glotico",
              title: "Cierre glótico",
              type: "text"
            },
            {
              id: "tos",
              title: "Movimiento de tos voluntario",
              type: "text"
            }
          ]
        },
        {
          id: 7,
          title: "FASE ORAL DE TRANSPORTE",
          subsecciones: [
            {
              id: 7.1,
              title: "Capacidad para transportar el bolo",
              items: [
                {
                  id: "movimientos_linguales",
                  title: "Movimientos linguales",
                  subsections: [
                    {
                      id: "laterales",
                      title: "Laterales contrarresistencia",
                      values: ["Normal", "Alterado"]
                    },
                    {
                      id: "elevar_paldar",
                      title: "Elevar y contactar con el paladar duro",
                      values: ["Normal", "Alterado"]
                    },
                    {
                      id: "elevar_contra",
                      title: "Elevar contrarresistencia",
                      values: ["Normal", "Alterado"]
                    },
                    {
                      id: "repasar",
                      title: "Repasar con la lengua el paladar",
                      values: ["Normal", "Alterado"]
                    }
                  ]
                }
              ]
            },
            {
              id: 7.2,
              title: "Sello palatogloso",
              items: [
                {
                  id: "pronunciar",
                  title: "Pronunciar k/k/k",
                  values: ["Normal", "Alterado"]
                },
                {
                  id: "depresor",
                  title: "Meter 2/3 del depresor y que lo expulse",
                  values: ["Normal", "Alterado"]
                },
                {
                  id: "reflejo_palatal",
                  title: "Reflejo palatal",
                  values: ["Normal", "Alterado"]
                }
              ]
            },
            {
              id: 7.3,
              title: "Fuerza en la propulsión",
              items: [
                {
                  id: "presion_lengua",
                  title: "Presionar la base de la lengua y sentir su fuerza",
                  values: ["Normal", "Alterado"]
                }
              ]
            }
          ]
        },
        {
          id: 8,
          title: "FASE FARÍNGEA",
          items: [
            {
              id: "calidad_vocal",
              title: "Calidad vocal",
              values: ["Normal", "Aérea", "Húmeda", "Nasal"]
            },
            {
              id: "retraso_disparo",
              title: "Retraso del disparo deglutorio",
              subtitle: "Palpar la laringe en el cuello, dar la orden de deglutir y cronometrar mentalmente el retraso del ascenso laríngeo",
              note: "*Auscultación cervical",
              type: "text"
            },
            {
              id: "elevar_velo",
              title: "Elevar el velo (decir y sostener una /a/)",
              values: ["Normal", "Alterado"]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Espinal",
      items: [
        {
          id: "musculos",
          title: "Tamaño y simetría de los músculos esternocleidomastoideo. Palpación",
          type: "text"
        },
        {
          id: "giro_cabeza",
          title: "Giro de cabeza hacia un lado manteniéndolo y el examinador intenta colocarla a línea media de nuevo",
          type: "text"
        },
        {
          id: "empuje_cabeza",
          title: "Empuje de cabeza hacia delante en contrarresistencia",
          type: "text"
        },
        {
          id: "elevacion_hombros",
          title: "Elevación de hombros en contrarresistencia",
          type: "text"
        }
      ]
    },
    {
      id: 6,
      title: "Hipogloso",
      items: [
        {
          id: "lengua_reposo",
          title: "Exploración de la lengua en reposo",
          type: "text"
        },
        {
          id: "sacar_lengua",
          title: "Sacar la lengua",
          type: "text"
        },
        {
          id: "movimiento_arriba_atras",
          title: "Arriba y hacia atrás",
          type: "text"
        },
        {
          id: "movimiento_laterales",
          title: "Laterales",
          type: "text"
        },
        {
          id: "contrarresistencia",
          title: "Contrarresistencia",
          type: "text"
        }
      ]
    }
  ]
};