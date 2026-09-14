import { NavItem } from "@/types/NavItem";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "destinos",
    href: "#",
    children: [
      { label: "Cusco", href: "#" },
      { label: "Arequipa", href: "#" },
      { label: "Puno", href: "#" },
      { label: "Ica", href: "#" },
    ],
  },
  { label: "nosotros", href: "#" },
  { label: "contacto", href: "#" },
];