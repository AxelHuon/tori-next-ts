import { Colors } from "@/theme/DesignSystem/Colors";
import { device } from "@/utils/device";
import { css } from "styled-components";

import { ButtonSideBarProps } from "./ButtonSideBar";

export const ButtonSideBarBaseStyle = css<ButtonSideBarProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  box-sizing: border-box;
  text-decoration: none;
  padding: 12px 10px 12px 10px;
  border-radius: 10px;
  transition:
    background-color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96),
    color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? props.active
        ? Colors.PRIMARY_25
        : "transparent"
      : props.active
      ? Colors.GRAY_25
      : "transparent"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.active
        ? Colors.PRIMARY
        : Colors.GRAY_400
      : props.active
      ? Colors.GRAY_900
      : Colors.GRAY_400};
  @media (${device.laptop}) {
    width: 100%;
  }
`;
