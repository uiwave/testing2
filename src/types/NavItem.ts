import { NavChild } from "@/types/NavChild";

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}
