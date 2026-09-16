import { NavItem } from "@/types/NavItem";
import { ROUTES } from "@/config/routes";

export const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "nav.destinations",
    href: ROUTES.TOURS,
    children: [
      { id: 1, label: "Cusco", href: "/tours" },
      { id: 2, label: "Arequipa", href: "/tours" },
      { id: 3, label: "Puno", href: "/tours" },
      { id: 4, label: "Ica", href: "/tours" },
    ],
  },
  { id: 2, label: "nav.aboutUs", href: ROUTES.ABOUT_US },
  { id: 3, label: "nav.contact", href: ROUTES.CONTACT },
];
