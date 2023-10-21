import { useTheme } from "@/hooks/useTheme";
import React from "react";
import styled from "styled-components";
import { Colors } from "@/theme/DesignSystem/Colors";

export interface WrapperIconProps {
  color?: string;
  width?: string;
  children: React.ReactNode;
}

const Container = styled.div<WrapperIconProps>`
  padding: 2px;
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.width || "50px"};
  svg {
    width: ${(props) => props.width || "50px"};
    height: ${(props) => props.width || "50px"};
    path {
      fill: ${(props) =>
        props.color
          ? props.color
          : props.theme.mode === "light"
          ? Colors.GRAY_900
          : Colors.GRAY_25};
    }
  }
`;

const WrapperIcon: React.FC<WrapperIconProps> = ({
  color,
  width,
  children,
}) => {
  const commonProps = {
    color,
    width,
    children,
  };

  const { theme } = useTheme();

  return (
    <Container theme={theme} {...commonProps}>
      {children}
    </Container>
  );
};

export default WrapperIcon;
