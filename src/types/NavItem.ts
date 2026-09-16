import { NavChild } from "@/types/NavChild";

export interface NavItem {
  id: number;
  label: string;
  href: string;
  children?: NavChild[];
}
