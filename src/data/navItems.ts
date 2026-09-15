import { NavItem } from "@/types/NavItem";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "destinos",
    href: "/tours",
    children: [
      { label: "Cusco", href: "/tours" },
      { label: "Arequipa", href: "/tours" },
      { label: "Puno", href: "/tours" },
      { label: "Ica", href: "/tours" },
    ],
  },
  { label: "nosotros", href: "/sobre-nosotros" },
  { label: "contacto", href: "/contacto" },
];
