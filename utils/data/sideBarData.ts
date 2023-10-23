import CatalogueIcon from "@/theme/DesignSystem/Icons/CatalogueIcon";
import GroupsIcon from "@/theme/DesignSystem/Icons/GroupsIcon";
import SearchIcon from "@/theme/DesignSystem/Icons/SearchIcon";
import TrendIcon from "@/theme/DesignSystem/Icons/TrendIcon";
import React, { FC, FunctionComponent } from "react";
import HomeIcon from "@/theme/DesignSystem/Icons/HomeIcon";

interface SideBarDataProps {
  id: number;
  label: string;
  icon: FunctionComponent;
  href: string;
}

export const sideBarData: SideBarDataProps[] = [
  {
    id: 1,
    label: "Accueil",
    icon: HomeIcon,
    href: "/",
  },
  {
    id: 2,
    label: "Catalogue",
    icon: CatalogueIcon,
    href: "/catalogue",
  },
  {
    id: 3,
    label: "Populaire",
    icon: TrendIcon,
    href: "/trending",
  },
  {
    id: 4,
    label: "Mes groupes",
    icon: GroupsIcon,
    href: "/my-groups",
  },
  {
    id: 5,
    label: "Rechercher",
    icon: SearchIcon,
    href: "/search",
  },
];
