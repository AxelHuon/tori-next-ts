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

const TextStyle = styled.div<TextStyledProps>`
  ${TextStyledBaseStyle}
  ${({ type }) => TextTypesStyles[type as TextStyledType] || ""}
`;

const TextStyled: React.FC<TextStyledProps> = ({
  children,
  color,
  type,
  align,
}) => {
  const commonProps = {
    children,
    color,
    type,
    align,
  };

  return <TextStyle {...commonProps}>{type}</TextStyle>;
};

export default TextStyled;
