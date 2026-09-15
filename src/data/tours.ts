import { Tour } from "@/types/Tour";

export const TOURS: Tour[] = [
  {
    slug: "cusco-machu-picchu",
    destination: "CUSCO",
    image: "/images/Tour-a-Machu-Picchu-03.webp",
    title: "Machu Picchu Full Day",
    price: 299,
    duration: "1 Día",
    description:
      "Vive la experiencia de conocer la maravilla del mundo en un tour full day desde Cusco. Atravesa el valle del Urubamba, toma el tren panorámico y explora cada rincón de la ciudadela inca con un guía experto.",
    difficulty: "Moderada",
    images: [
      "/images/Tour-a-Machu-Picchu-03.webp",
      "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
      "/images/puno.webp",
      "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cusco → Machu Picchu → Cusco",
        description:
          "Recogida en el hotel a las 4:30 am. Traslado a Ollantaytambo para abordar el tren hacia Aguas Calientes. Llegada a Machu Picchu para un tour guiado de 3 horas explorando el Templo del Sol, la Roca Intihuatana y el Jardín Sagrado. Tiempo libre para fotos antes del regreso.",
      },
    ],
    includes: [
      "Transporte ida y vuelta desde Cusco",
      "Tren panorámico ida y vuelta",
      "Entrada a Machu Picchu",
      "Guía turístico certificado",
      "Almuerzo en Aguas Calientes",
    ],
    notIncludes: [
      "Propinas",
      "Seguro de viaje",
      "Gastos personales",
      "Bus de Aguas Calientes a Machu Picchu (opcional)",
    ],
  },
  {
    slug: "ica-huacachina",
    destination: "ICA",
    image: "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    title: "Oasis de Huacachina y Tubulares",
    price: 85,
    duration: "Full Day",
    description:
      "Disfruta de una aventura emocionante en el desierto de Ica. Conduce tubulares por las dunas, practica sandboarding y relájate en el oasis de Huacachina, un esmeralda verde en medio del desierto.",
    difficulty: "Baja",
    images: [
      "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
      "/images/Tour-a-Machu-Picchu-03.webp",
      "/images/puno.webp",
      "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ica → Huacachina → Ica",
        description:
          "Recogida en el hotel a las 9:00 am. Traslado al desierto para 1 hora de paseo en tubulares por las dunas. Luego 45 minutos de sandboarding en las dunas más altas. Llegada al oasis de Huacachina para tiempo libre y fotografía. Regreso a las 4:00 pm.",
      },
    ],
    includes: [
      "Transporte ida y vuelta desde Ica",
      "1 hora de tubulares",
      "45 minutos de sandboarding",
      "Seguro básico",
    ],
    notIncludes: ["Almuerzo", "Propinas", "Gastos personales"],
  },
  {
    slug: "puno-lago-titicaca",
    destination: "PUNO",
    image: "/images/puno.webp",
    title: "Islas Uros y Taquile",
    price: 120,
    duration: "2 Días / 1 Noche",
    description:
      "Explora el lago más alto del mundo navegable. Conoce las islas flotantes de los Uros, construidas con totora, y la isla de Taquile, famosa por sus textiles declarados patrimonio cultural inmaterial de la humanidad.",
    difficulty: "Baja",
    images: [
      "/images/puno.webp",
      "/images/Tour-a-Machu-Picchu-03.webp",
      "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
      "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Puno → Islas Uros",
        description:
          "Recogida en el puerto a las 7:00 am. Navegación hacia las islas flotantes de los Uros. Visita guiada explicando la cultura y estilo de vida de sus habitantes. Almuerzo típico. Tarde libre para explorar Puno.",
      },
      {
        day: 2,
        title: "Isla de Taquile → Puno",
        description:
          "Navegación temprana hacia la isla de Taquile. Caminata por los senderos de la isla, visita a los talleres textiles y almuerzo con vista al lago. Regreso a Puno al atardecer.",
      },
    ],
    includes: [
      "Transporte en lancha",
      "Guía turístico bilingüe",
      "1 noche en alojamiento local",
      "Almuerzo día 1 y día 2",
      "Entrada a islas Uros",
    ],
    notIncludes: [
      "Transporte terrestre desde/hacia Puno",
      "Propinas",
      "Gastos personales",
      "Bebidas",
    ],
  },
  {
    slug: "arequipa-canon-del-colca",
    destination: "AREQUIPA",
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    title: "Cañón del Colca Express",
    price: 150,
    duration: "2 Días / 1 Noche",
    description:
      "Admira uno de los cañones más profundos del mundo y observa los cóndores en vuelo libre. Termina el viaje relajándote en las aguas termales de La Calera, con aguas a 38°C con vista a los volcanes.",
    difficulty: "Moderada",
    images: [
      "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
      "/images/Tour-a-Machu-Picchu-03.webp",
      "/images/puno.webp",
      "/images/Tour-Huacachina-Buggy-Sandboarding-02.webp",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arequipa → Cañón del Colca",
        description:
          "Salida a las 3:00 am desde Arequipa. Parada en el mirador de los volcanes Misti y Chachani. Llegada al Cruz del Cóndor para observar el vuelo de los cóndores. Almuerzo en Chivay. Tarde libre para explorar la localidad.",
      },
      {
        day: 2,
        title: "Chivay → Aguas Termales → Arequipa",
        description:
          "Mañana libre para visitar el mercado de Chivay. Traslado a las aguas termales de La Calera para relajarse 2 horas. Regreso a Arequipa llegando aproximadamente a las 6:00 pm.",
      },
    ],
    includes: [
      "Transporte ida y vuelta desde Arequipa",
      "Guía turístico certificado",
      "1 noche en hotel en Chivay",
      "Almuerzo día 1",
      "Entrada a aguas termales La Calera",
    ],
    notIncludes: [
      "Cena y desayuno",
      "Propinas",
      "Gastos personales",
      "Seguro de viaje",
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}
