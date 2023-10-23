import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import React from "react";
import styled from "styled-components";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainerStyled = styled.main`
  min-height: 100vh;
  display: flex;
  padding-inline: 36px;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.theme.mode === "light" ? Colors.GRAY_25 : Colors.GRAY_900};
  transition: background-color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
`;

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return <MainContainerStyled theme={theme}>{children}</MainContainerStyled>;
};

export default MainContainer;
