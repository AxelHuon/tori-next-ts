import { Colors } from "@/theme/DesignSystem/Colors";
import React from "react";
import styled from "styled-components";
import { TextStyledBaseStyle, TextTypesStyles } from "./TextStyled.style";
import { TextStyledType } from "./TextStyled.type";

export interface TextStyledProps {
  children: React.ReactNode;
  color?: string;
  type: TextStyledType;
  align?: "left" | "right" | "center";
}

const TextStyle = styled.p<TextStyledProps>`
  ${TextStyledBaseStyle}
  ${({ type }) => TextTypesStyles[type as TextStyledType] || ""}
`;

const TextStyled: React.FC<TextStyledProps> = ({
  children,
  color = Colors.GRAY_900,
  type,
  align,
}) => {
  const commonProps = {
    children,
    color,
    type,
    align,
  };

  return <TextStyle {...commonProps}>{children}</TextStyle>;
};

export default TextStyled;
