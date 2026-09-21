import { NavItem } from "@/types/NavItem";
import { ROUTES } from "@/config/routes";

export const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "nav.destinations",
    href: ROUTES.TOURS,
  },
  { id: 2, label: "nav.aboutUs", href: ROUTES.ABOUT_US },
  { id: 3, label: "nav.contact", href: ROUTES.CONTACT },
];
