export const HDOF = {
  title:
    "Protocolo de exploración dinámica Interdisciplinar del frenillo lingual",
  secciones: [
    {
      id: "caracteristicas_odontologicas",
      title: "Características odontológicas",
      subtitle: "(información facilitada por el odontólogo)",
      subsecciones: [
        {
          id: "alteraciones_maxilomandibulares",
          title: "1.1. Alteraciones maxilomandibulares",
          items: [
            {
              id: "tendencia_cl_III",
              title:
                "Tendencia a Cl. III (hiperplasia mandibular / hipoplasia maxilar superior)",
              values: ["Sí", "No"],
            },
            {
              id: "tendencia_cl_II",
              title:
                "Tendencia a Cl. II (hipoplasia mandibular / hiperplasia maxilar superior)",
              values: ["Sí", "No"],
            },
            {
              id: "mordida_abierta",
              title: "Mordida abierta (anterior / lateral / posterior)",
              values: ["Sí", "No"],
            },
            {
              id: "mordida_cruzada",
              title:
                "Mordida cruzada unilateral / bilateral (hipoplasia maxilar superior / hiperplasia mandibular)",
              values: ["Sí", "No"],
            },
            {
              id: "otras_alteraciones",
              title: "Otras",
              type: "text",
            },
          ],
        },
        {
          id: "anomalias_dentoalveolares",
          title: "1.2. Anomalías dentoalveolares",
          items: [
            {
              id: "proinclinacion",
              title: "Proinclinación incisivos inferiores",
              values: ["Sí", "No"],
            },
            {
              id: "retroinclinacion",
              title: "Retroinclinación incisivos superiores",
              values: ["Sí", "No"],
            },
            {
              id: "diastema",
              title: "Diastema interincisivo inferior",
              values: ["Sí", "No"],
            },
            {
              id: "linguoversion",
              title: "Linguoversión incisivos centrales inferiores",
              values: ["Sí", "No"],
            },
            {
              id: "recesion",
              title: "Recesión mucogingival",
              values: ["Sí", "No"],
            },
            {
              id: "alteraciones_periodontales",
              title: "Alteraciones periodontales",
              values: ["Sí", "No"],
            },
            {
              id: "otras_anomalias",
              title: "Otras",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      id: "caracteristicas_anatomicas",
      title: "Características anatómicas de la lengua",
      subsecciones: [
        {
          id: "aspectos_forma",
          title: "2.1. Aspectos de forma",
          items: [
            {
              id: "apariencia",
              title: "Apariencia",
              values: ["Normal", "Estrecha / larga", "Voluminosa / ancha"],
            },
            {
              id: "tamano",
              title: "Tamaño",
              values: ["Normal", "Pequeña", "Grande"],
            },
            {
              id: "apice",
              title: "Ápice",
              values: [
                "Normal",
                "Leve fisura",
                "Bífida / corazón",
                "En el suelo de la boca",
              ],
            },
            {
              id: "dorso",
              title: "Dorso",
              values: ["Normal", "Leve surco", "Surco marcado"],
            },
            {
              id: "otros_aspectos",
              title: "Otros",
              type: "text",
            },
          ],
        },
        {
          id: "aspectos_tono",
          title: "2.2. Aspectos de tono",
          items: [
            {
              id: "tono",
              title: "Tono",
              values: ["Normal", "Hipotónica", "Hipertónica"],
            },
          ],
        },
        {
          id: "posicion_reposo",
          title: "2.3. Posición de reposo",
          items: [
            {
              id: "ubicacion_vertical",
              title: "Ubicación lingual en reposo en sentido vertical",
              values: ["No visible", "Media", "Baja"],
            },
            {
              id: "posicion_sagital",
              title: "Posición lingual en reposo en sentido sagital",
              values: ["No visible", "Avanzada"],
              subsections: [
                {
                  id: "avanzada_tipo",
                  title: "Tipo de avance",
                  values: [
                    "Contra arcada dentaria superior / inferior",
                    "Entre arcada dentaria anterior / lateral",
                  ],
                },
              ],
            },
            {
              id: "ubicacion_transversal",
              title: "Ubicación lingual en sentido transversal",
              values: [
                "Normal",
                "Con desbordamiento",
                "Contra arcadas (con indentaciones linguales)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "caracteristicas_funcionales",
      title: "Características de la funcionalidad lingual",
      subsecciones: [
        {
          id: "aspectos_movilidad",
          title: "3.1. Aspectos de movilidad",
          items: [
            {
              id: "praxias_linguales",
              title: "Praxias linguales aisladas",
              subsections: [
                {
                  id: "protrusion",
                  title: "Protrusión",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "supraversion_interna",
                  title: "Supraversión interna",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "supraversion_externa",
                  title: "Supraversión externa",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "infraversion",
                  title: "Infraversión",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "lateralizacion_derecha",
                  title: "Lateralización derecha",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "lateralizacion_izquierda",
                  title: "Lateralización izquierda",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "retraccion",
                  title: "Retracción",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "barrer_paladar",
                  title: "Barrer el paladar",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "adosamiento_paladar",
                  title: "Adosamiento al paladar",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
                {
                  id: "vibracion_punta",
                  title: "Vibración punta lingual",
                  values: ["Realiza bien", "Con dificultad", "No posible"],
                },
              ],
            },
            {
              id: "elevacion_lingual",
              title: "Elevación lingual (*)",
              values: [
                "Punta lingual toca rugas palatinas en apertura bucal máxima (5)",
                "Punta lingual casi toca rugas palatinas en apertura bucal máxima (4)",
                "Punta lingual sobrepasa mitad de la apertura bucal máxima (3)",
                "Punta lingual no llega o llega justo a la mitad de la apertura bucal máxima (2)",
                "No es posible ningún movimiento de elevación de la punta lingual (1)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "competencia_lingual",
      title: "Competencia lingual en las funciones orofaciales",
      subsecciones: [
        {
          id: "respiracion",
          title: "4.1. Respiración",
          items: [
            {
              id: "postura_lingual",
              title: "Características postura lingual en reposo",
              values: ["No visible", "Sin contacto con rugas palatinas"],
            },
          ],
        },
        {
          id: "succion",
          title: "4.2. Succión (a valorar sólo en lactantes)",
          items: [
            {
              id: "caracteristicas_succion",
              title: "Características de la succión",
              values: [
                "Con movimiento anteroposterior",
                "Con movimiento posteroanterior",
              ],
            },
            {
              id: "otras_caracteristicas",
              title: "Otras características",
              type: "text",
            },
          ],
        },
        {
          id: "deglucion",
          title: "4.3. Deglución (información obtenida por el logopeda)",
          items: [
            {
              id: "caracteristicas_deglucion",
              title: "Características de la deglución",
              values: ["Funcional", "Disfuncional"],
              conditionalSubsections: {
                Disfuncional: [
                  {
                    id: "tipo_disfuncion",
                    title: "Tipo de disfunción",
                    values: [
                      "Con empuje lingual",
                      "Con interposición lingual",
                      "Otra forma clínica",
                    ],
                  },
                ],
              },
            },
            {
              id: "triple_cierre",
              title:
                "Características Triple Cierre (verificado con Técnica de Payne)",
              subsections: [
                {
                  id: "modificacion_contacto",
                  title: "Modificación de algún punto de contacto",
                  type: "checkbox",
                  values: ["Sí"],
                  description: {
                    type: "textarea",
                    placeholder:
                      "Describa las modificaciones del punto de contacto",
                  },
                },
                {
                  id: "ausencia_contacto",
                  title: "Ausencia de algún punto de contacto",
                  type: "checkbox",
                  values: ["Sí"],
                  description: {
                    type: "textarea",
                    placeholder: "Describa los puntos de contacto ausentes",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "masticacion",
          title: "4.4. Masticación",
          items: [
            {
              id: "caracteristicas_masticacion",
              title: "Características de la masticación",
              values: ["Eficiente", "Ineficiente"],
              subsections: [
                {
                  id: "tipo_ineficiencia",
                  title: "Tipo de ineficiencia",
                  values: [
                    "Inadecuada cohesión del bolo alimenticio",
                    "Lateralización insuficiente del bolo por incompetencia lingual",
                    "Incompetencia de otras estructuras musculares",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "habla_voz",
          title: "4.5. Habla y voz",
          items: [
            {
              id: "habla_espontanea",
              title: "Habla espontánea",
              values: ["Inteligible", "Ininteligible"],
            },
            {
              id: "articulacion",
              title: "Articulación y coarticulación del habla",
              values: ["Precisa", "Imprecisa"],
            },
            {
              id: "apertura_bucal",
              title: "Apertura bucal en el habla",
              values: ["Normal", "Reducida / limitada"],
            },
            {
              id: "movimientos_mandibulares",
              title: "Movimientos mandibulares",
              values: [
                "Normales",
                "Con avance mandibular",
                "Con desviación derecha / izquierda",
              ],
            },
            {
              id: "velocidad_habla",
              title: "Velocidad del habla",
              values: ["Normal", "Acelerada", "Enlentecida"],
            },
            {
              id: "voz",
              title: "Voz",
              values: ["Normal", "Disfónica", "Nasalizada"],
            },
            {
              id: "articulaciones_compensadas",
              title: "Articulaciones compensadas",
              values: ["/l/", "/n/", "/t/", "/d/", "/r/", "/R/", "Otras"],
              anexos: [
                {
                  id: "anexo_1",
                  title: "Anexo 1",
                  subtitle: "Listado de palabras",
                  items: [
                    {
                      id: "fonemas",
                      items: [
                        {
                          id: "l",
                          title: "/l/",
                          values: ["lupa", "pala", "col"],
                        },
                        {
                          id: "n",
                          title: "/n/",
                          values: ["nube", "mona", "pan"],
                        },
                        {
                          id: "t",
                          title: "/t/",
                          values: ["tapa", "bata"],
                        },
                        {
                          id: "d",
                          title: "/d/",
                          values: ["dos", "boda", "salud"],
                        },
                        {
                          id: "s",
                          title: "/s/",
                          values: ["sopa", "mesa", "dos", "castillo"],
                          additional: [
                            "espada",
                            "escuela",
                            "fantasma",
                            "esfoliar",
                          ],
                        },
                        {
                          id: "z",
                          title: "/z/",
                          values: ["zoo", "taza", "lápiz"],
                        },
                        {
                          id: "r",
                          title: "/r/",
                          values: ["pera", "mar"],
                        },
                        {
                          id: "R",
                          title: "/R/",
                          values: ["rata", "gorra"],
                        },
                      ],
                    },
                    {
                      id: "grupos_consonanticos_l",
                      title: "Grupos consonánticos /l/",
                      values: ["plato", "clavo", "blusa", "globo", "flan"],
                    },
                    {
                      id: "grupos_consonanticos_r",
                      title: "Grupos consonánticos /r/",
                      values: [
                        "príncipe",
                        "cruz",
                        "bruja",
                        "grande",
                        "fruta",
                        "tres",
                        "dragón",
                      ],
                    },
                  ],
                },
                {
                  id: "anexo_2",
                  title: "Anexo 2",
                  subtitle: "Formas clínicas más frecuentes",
                  items: [
                    {
                      id: "formas_clinicas",
                      items: [
                        {
                          id: "forma_A",
                          title: "A",
                          description: "Long. normal + fijación adecuada",
                        },
                        {
                          id: "forma_B",
                          title: "B",
                          description: "Long. normal + fijación anteriorizada",
                        },
                        {
                          id: "forma_C",
                          title: "C",
                          description: "Long. justa + fijación adecuada",
                        },
                        {
                          id: "forma_D",
                          title: "D",
                          description: "Long. justa + fijación anteriorizada",
                        },
                        {
                          id: "forma_E",
                          title: "E",
                          description: "Long. corta + fijación anteriorizada",
                        },
                        {
                          id: "forma_F",
                          title: "F",
                          description:
                            "Long. corta + fijación muy anteriorizada",
                        },
                        {
                          id: "forma_G",
                          title: "G",
                          description: "Fusionado al suelo de la boca",
                        },
                      ],
                    },
                    {
                      id: "observaciones",
                      title: "Observaciones",
                      items: [
                        {
                          id: "obs_1",
                          text: "La fijación anteriorizada impide la libre movilidad del ápice lingual. Su influencia negativa se tiene que valorar en relación con la longitud del frenillo.",
                        },
                        {
                          id: "obs_2",
                          text: 'La combinación "corta-anteriorizada" es la más desfavorable y a menudo requiere la intervención quirúrgica.',
                        },
                        {
                          id: "obs_3",
                          text: "A veces, aunque el resultado de la medición esté dentro de los valores normales (60% o más), si la fijación apical es muy anteriorizada, podemos encontrarnos dificultades o limitaciones que justificarán igualmente la intervención quirúrgica.",
                        },
                        {
                          id: "obs_4",
                          text: "El resultado aislado de la medición no es una información directa y concluyente ya que sólo interrelacionando este dato con otras informaciones o variables individuales (fijación, valores de la apertura bucal, forma y anchura de la arcada maxilar...) nos posibilitará hacer un diagnóstico cuidadoso y plantear la intervención más adecuada, ya sea conservadora o quirúrgica.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "formas_clinicas",
              items: [
                {
                  id: "forma_A",
                  title: "A",
                  description: "Long. normal + fijación adecuada",
                },
                {
                  id: "forma_B",
                  title: "B",
                  description: "Long. normal + fijación anteriorizada",
                },
                {
                  id: "forma_C",
                  title: "C",
                  description: "Long. justa + fijación adecuada",
                },
                {
                  id: "forma_D",
                  title: "D",
                  description: "Long. justa + fijación anteriorizada",
                },
                {
                  id: "forma_E",
                  title: "E",
                  description: "Long. corta + fijación anteriorizada",
                },
                {
                  id: "forma_F",
                  title: "F",
                  description: "Long. corta + fijación muy anteriorizada",
                },
                {
                  id: "forma_G",
                  title: "G",
                  description: "Fusionado al suelo de la boca",
                },
              ],
            },
            {
              id: "observaciones",
              title: "Observaciones",
              items: [
                {
                  id: "obs_1",
                  text: "La fijación anteriorizada impide la libre movilidad del ápice lingual. Su influencia negativa se tiene que valorar en relación con la longitud del frenillo.",
                },
                {
                  id: "obs_2",
                  text: 'La combinación "corta-anteriorizada" es la más desfavorable y a menudo requiere la intervención quirúrgica.',
                },
                {
                  id: "obs_3",
                  text: "A veces, aunque el resultado de la medición esté dentro de los valores normales (60% o más), si la fijación apical es muy anteriorizada, podemos encontrarnos dificultades o limitaciones que justificarán igualmente la intervención quirúrgica.",
                },
                {
                  id: "obs_4",
                  text: "El resultado aislado de la medición no es una información directa y concluyente ya que sólo interrelacionando este dato con otras informaciones o variables individuales (fijación, valores de la apertura bucal, forma y anchura de la arcada maxilar...) nos posibilitará hacer un diagnóstico cuidadoso y plantear la intervención más adecuada, ya sea conservadora o quirúrgica.",
                },
              ],
            },
          ],
        },
        {
          id: "otros_fonemas",
          title: "Otros fonemas alterados o compensados",
          items: [
            {
              id: "otros_fonemas_alterados",
              type: "textarea",
              rows: 3,
              placeholder: "Describa otros fonemas alterados o compensados",
            },
          ],
        },
      ],
    },
    {
      id: "medicion",
      title: "5.3. Medición",
      subtitle: "Medición con pie de rey (*)",
      subsecciones: [
        {
          id: "medidas",
          items: [
            {
              id: "apertura_maxima",
              title: "a / Apertura bucal máxima",
              type: "number",
              suffix: "mm",
            },
            {
              id: "apertura_rugas",
              title: "b / Apertura bucal con punta lingual en rugas palatinas",
              type: "number",
              suffix: "mm",
            },
            {
              id: "relacion_medidas",
              title: "c / Relación entre las medidas anteriores",
              type: "number",
              suffix: "%",
              formula: "(b x 100) / a",
            },
          ],
        },
      ],
    },
    {
      id: "sintesis_valoracion",
      title: "6. Síntesis valoración",
      subsecciones: [
        {
          id: "aspectos_anatomicos",
          title: "6.1. Aspectos anatómicos más significativos",
          items: [
            {
              id: "relacion_longitud_fijacion",
              title: "Relación longitud-fijación del frenillo lingual",
              type: "table",
              rows: [
                {
                  id: "longitud",
                  title: "Longitud",
                  values: ["Normal", "Suficiente-justo", "Corto-fusionado"],
                },
                {
                  id: "fijacion",
                  title: "Fijación",
                  values: ["Adecuada", "Anteriorizada", "Muy anteriorizada"],
                },
              ],
            },
          ],
        },
        {
          id: "aspectos_funcionales",
          title: "6.2. Aspectos funcionales más significativos",
          subtitle: "Alteraciones en la competencia lingual",
          items: [
            {
              id: "alteraciones",
              type: "checkbox",
              values: [
                "Movilidad lingual aislada",
                "Posición de reposo lingual",
                "Funciones orofaciales (respiración, succión, deglución...)",
              ],
            },
            {
              id: "otras",
              title: "Otras (maxilodentales, periodontales, mecánicas...)",
              type: "textarea",
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      id: "conclusion",
      title: "7. Conclusión e indicación",
      subsecciones: [
        {
          id: "conclusion_frenillo",
          title: "7.1. Conclusión",
          subtitle: "Presencia de frenillo lingual",
          items: [
            {
              id: "estado",
              type: "radio",
              values: ["Normal", "Alterado"],
            },
            {
              id: "descripcion",
              title: "Descripción frenillo lingual alterado",
              type: "textarea",
              rows: 2,
            },
            {
              id: "forma_clinica",
              title: "Forma clínica aproximada",
              subtitle: "(consultar anexo 2)",
              type: "textarea",
              rows: 2,
            },
          ],
        },
        {
          id: "indicacion",
          title: "7.2. Indicación",
          subtitle: "Plan terapéutico recomendado",
          items: [
            {
              id: "plan",
              type: "checkbox",
              values: [
                "Conservador o logopédico",
                "Quirúrgico",
                "Combinado o mixto",
              ],
              conditionalSubsections: {
                "Combinado o mixto": [
                  {
                    id: "plan_description",
                    title: "Descripción del plan combinado",
                    type: "textarea",
                    rows: 3,
                    placeholder: "Describa el plan terapéutico combinado"
                  }
                ]
              }
            }
          ],
        },
      ],
    },
  ],
};
