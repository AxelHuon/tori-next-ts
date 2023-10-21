"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { Colors } from "@/theme/design_system/Colors";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ButtonBaseStyle, ButtonSizeStyle } from "./Button.style";

export interface ButtonLinkProps {
  labelButton: string;
  isNextLink?: boolean;
  href: string;
  bgcolor?: string;
  color?: string;
  width?: string;
  rowreverse?: boolean;
  size?: "small" | "large";
  icon?: React.ReactNode;
}

export const ButtonNextLink = styled(Link)<ButtonLinkProps>`
  ${ButtonBaseStyle}
  ${(props) => ButtonSizeStyle[props.size || "small"]}
`;

export const ButtonHrefLink = styled.a<ButtonLinkProps>`
  ${ButtonBaseStyle}
  ${(props) => ButtonSizeStyle[props.size || "small"]}
`;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  labelButton,
  isNextLink = true,
  href,
  width = "fit-content",
  bgcolor = Colors.PRIMARY,
  color = Colors.GRAY_25,
  icon,
  rowreverse = false,
  size = "small",
}) => {
  const isLargerThanLaptopM = useScreenSize("laptop");

  return (
    <>
      {isNextLink ? (
        <ButtonNextLink
          labelButton={labelButton}
          bgcolor={bgcolor}
          width={width}
          href={href}
          color={color}
          size={size}
          rowreverse={rowreverse}
        >
          {icon && icon}
          {labelButton}
        </ButtonNextLink>
      ) : (
        <ButtonHrefLink
          labelButton={labelButton}
          bgcolor={bgcolor}
          width={width}
          href={href}
          color={color}
          size={size}
        >
          {icon && icon}
          {labelButton}
        </ButtonHrefLink>
      )}
    </>
  );
};

export default ButtonLink;
