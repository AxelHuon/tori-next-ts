import React from "react";
import HomeIcon from "@/theme/DesignSystem/Icons/HomeIcon";

interface SideBarDataProps {
  id: number;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const sideBarData = [
  {
    id: 1,
    label: "Accueil",
    icon: <HomeIcon>,
    href: "/",
  },
];
