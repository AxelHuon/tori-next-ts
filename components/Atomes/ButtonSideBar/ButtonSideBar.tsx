import useScreenSize from "@/hooks/useScreenSize";
import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TextTypesStyles } from "../TextStyled/TextStyled.style";
import WrapperIcon from "../WrapperIcon/WrapperIcon";
import { ButtonSideBarBaseStyle } from "./ButtonSideBar.style";

export interface ButtonSideBarProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
  active: number;
}

const ButtonLink = styled(Link)<ButtonSideBarProps>`
  ${ButtonSideBarBaseStyle}
  ${TextTypesStyles.Button14}
`;

const ButtonSideBar: React.FC<ButtonSideBarProps> = ({
  label,
  icon,
  href,
  active,
}) => {
  const commonProps = {
    label,
    icon,
    href,
    active,
  };

  const { theme } = useTheme();

  const isLargerThanLaptop = useScreenSize("laptop");
  return (
    <ButtonLink theme={theme} {...commonProps}>
      <WrapperIcon
        color={
          theme.mode === "light"
            ? active
              ? Colors.PRIMARY
              : Colors.GRAY_400
            : active
            ? Colors.GRAY_900
            : Colors.GRAY_400
        }
        width={"24px"}
      >
        {icon && icon}
      </WrapperIcon>
      {isLargerThanLaptop && label}
    </ButtonLink>
  );
};

export default ButtonSideBar;
