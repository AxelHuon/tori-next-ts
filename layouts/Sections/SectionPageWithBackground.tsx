import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import { device } from "@/utils/device";
import React from "react";
import styled from "styled-components";

interface SectionPageContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const SectionPageContainerStyle = styled.section<SectionPageContainerProps>`
  width: ${(props) => props.width};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 3em;
  height: ${(props) => props.height};
  transition:
    background-color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96),
    border 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  border: 2px solid
    ${(props) =>
      props.theme.mode === "light" ? Colors.PRIMARY_25 : Colors.GRAY_700};
  background-color: ${(props) =>
    props.theme.mode === "light" ? Colors.GRAY_25 : Colors.GRAY_800};
`;

const SectionPageWithBackground: React.FC<SectionPageContainerProps> = ({
  children,
  width = "100%",
  height = "fit-content",
}) => {
  const { theme } = useTheme();

  return (
    <SectionPageContainerStyle height={height} width={width} theme={theme}>
      {children}
    </SectionPageContainerStyle>
  );
};

export default SectionPageWithBackground;
