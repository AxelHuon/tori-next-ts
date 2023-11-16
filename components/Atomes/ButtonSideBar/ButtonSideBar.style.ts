import { Colors } from '@/theme/DesignSystem/Colors';
import { device } from '@/utils/device';
import { css } from 'styled-components';

import { ButtonSideBarProps } from './ButtonSideBar';

export const ButtonSideBarBaseStyle = css<ButtonSideBarProps>`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  justify-content: center;
  padding: 12px 10px 12px 10px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) =>
      props.label === 'Déconnexion'
        ? Colors.RED_200
        : props.theme.mode === 'dark'
        ? props.active
          ? ''
          : 'rgba(255, 255, 255, 0.1);'
        : props.active
        ? ''
        : Colors.PRIMARY_25};
  }
  img {
    border-radius: 30px;
  }
  transition:
    background-color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96),
    color 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  background-color: ${(props) =>
    props.bgcolor
      ? props.bgcolor
      : props.theme.mode === 'light'
      ? props.active
        ? Colors.PRIMARY_25
        : 'transparent'
      : props.active
      ? Colors.GRAY_25
      : 'transparent'};
  color: ${(props) =>
    props.color
      ? props.color
      : props.theme.mode === 'light'
      ? props.active
        ? Colors.PRIMARY
        : Colors.GRAY_400
      : props.active
      ? Colors.GRAY_900
      : Colors.GRAY_400};
  @media (${device.laptop}) {
    justify-content: flex-start;
  }
`;
