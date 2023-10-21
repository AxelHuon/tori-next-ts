import { Colors } from "@/theme/design_system/Colors";
import { css } from "styled-components";
import { ButtonLinkProps } from "./ButtonLink";

export const ButtonBaseStyle = css<ButtonLinkProps>`
  font-family: "Montserrat", serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  width: ${(props) => props.width || "fit-content"};
  position: relative;
  background-color: ${(props) => props.bgcolor || Colors.PRIMARY};
  color: ${(props) => props.color || Colors.GRAY_25};
  text-decoration: none;
  border-radius: 15px;
  font-size: 15px;
  border: 1px solid ${(props) => props.bgcolor || Colors.PRIMARY};
  flex-direction: ${(props) =>
    props.rowreverse ? "row-reverse" : "row" || "row"};
`;

export const ButtonSizeStyle = {
  small: {
    padding: "10px 20px",
  },
  large: {
    padding: "15px 20px",
  },
};
