export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Carlos Mamani",
    role: "Director General",
    image: "/images/Tour-a-Machu-Picchu-03.webp",
    bio: "Con más de 15 años de experiencia en turismo aventura, Carlos fundó Chullpi Expeditions con la visión de mostrar la verdadera esencia del Perú.",
  },
  {
    name: "María Quispe",
    role: "Coordinadora de Tours",
    image: "/images/puno.webp",
    bio: "Especialista en logística y planificación de viajes, María asegura que cada expedición sea una experiencia inolvidable.",
  },
  {
    name: "Andrés Huanca",
    role: "Guía Turístico Senior",
    image: "/images/Canon-del-Colca-y-Aguas-Termales-de-La-Calera-03.webp",
    bio: "Guía certificado con profundo conocimiento de la historia y cultura peruana. Apasionado por compartir los tesoros ocultos del país.",
  },
];
