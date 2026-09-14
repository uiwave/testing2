import React from "react";
import { FacebookIcon } from "@/components/social/FacebookIcon";
import { InstagramIcon } from "@/components/social/InstagramIcon";
import { TikTokIcon } from "@/components/social/TikTokIcon";

export interface SocialLink {
  id: "facebook" | "instagram" | "tiktok";
  name: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const socialList: SocialLink[] = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/CHULLPIEXP",
    Icon: FacebookIcon,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/chullpi_expeditions/?igsh=eWZjYm9raW5oMHJ6#",
    Icon: InstagramIcon,
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@chullpiexpeditions",
    Icon: TikTokIcon,
  },
];


// Mapa para acceso individual
export const socialMap = Object.fromEntries(
  socialList.map((item) => [item.id, item]),
) as Record<SocialLink["id"], SocialLink>;

// Helper para seleccionar varios por ID
export const getSocials = (ids: Array<SocialLink["id"]>): SocialLink[] => {
  return ids.map((id) => socialMap[id]).filter(Boolean);
};
