import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import { device } from "@/utils/device";
import React from "react";
import styled from "styled-components";

interface SectionPageContainerProps {
  children: React.ReactNode;
  width: string;
}

const SectionPageContainerStyle = styled.section<SectionPageContainerProps>`
  width: calc(${(props) => props.width} - 216px);
  position: absolute;
  right: 34px;
  top: 54px;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1em;

  transition:
    background-color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96),
    border 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  border: 2px solid
    ${(props) =>
      props.theme.mode === "light" ? Colors.PRIMARY_25 : Colors.GRAY_700};
  background-color: ${(props) =>
    props.theme.mode === "light" ? Colors.GRAY_25 : Colors.GRAY_800};

  @media (${device.laptop}) {
    width: calc(${(props) => props.width} - 320px - 45px);
  }
`;

const SectionPageWithBackground: React.FC<SectionPageContainerProps> = ({
  children,
  width = "100%",
}) => {
  const { theme } = useTheme();

  return (
    <SectionPageContainerStyle width={width} theme={theme}>
      {children}
    </SectionPageContainerStyle>
  );
};

export default SectionPageWithBackground;
