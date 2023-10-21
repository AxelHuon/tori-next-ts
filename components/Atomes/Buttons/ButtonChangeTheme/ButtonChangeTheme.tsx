import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import MoonIcon from "@/theme/DesignSystem/Icons/MoonIcon";
import SunIcon from "@/theme/DesignSystem/Icons/SunIcon";
import React, { useEffect } from "react";
import styled from "styled-components";
import { TextTypesStyles } from "../../TextStyled/TextStyled.style";
import WrapperIcon from "../../WrapperIcon/WrapperIcon";

interface ButtonPartProps {
  mode: "light" | "dark";
}

const ButtonChangeThemeStyled = styled.div`
  width: 100%;
  position: relative;
  max-width: 500px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const ButtonPart = styled.button<ButtonPartProps>`
  ${TextTypesStyles.Button14}
  z-index: 10;
  width: 50%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 12px 10px;
  transition: color 0.2s ease-in-out;
  color: ${(props) =>
    props.mode === "light"
      ? props.theme.mode === "light"
        ? Colors.PRIMARY
        : Colors.GRAY_400
      : props.theme.mode === "dark"
      ? Colors.GRAY_900
      : Colors.GRAY_400};
  box-sizing: border-box;
`;

const ActiveBackground = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: ${(props) =>
    props.theme.mode === "light" ? Colors.PRIMARY_25 : Colors.GRAY_25};
  z-index: 1;
  left: 0;
  transition:
    transform 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96),
    background-color 0.3s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  transform: translateX(
    ${(props) => (props.theme.mode === "light" ? "0" : "100%")}
  );
  border-radius: 10px;
`;

const ButtonChangeTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ButtonChangeThemeStyled>
      <ActiveBackground theme={theme}></ActiveBackground>
      <ButtonPart onClick={() => toggleTheme()} theme={theme} mode={"light"}>
        <WrapperIcon
          color={theme.mode === "light" ? Colors.PRIMARY : Colors.GRAY_400}
          width={"24px"}
        >
          <SunIcon />
        </WrapperIcon>
        <p>Light</p>
      </ButtonPart>
      <ButtonPart onClick={() => toggleTheme()} theme={theme} mode={"dark"}>
        <WrapperIcon
          color={theme.mode === "dark" ? Colors.GRAY_900 : Colors.GRAY_400}
          width={"24px"}
        >
          <MoonIcon />
        </WrapperIcon>
        <p>Dark</p>
      </ButtonPart>
    </ButtonChangeThemeStyled>
  );
};

export default ButtonChangeTheme;
