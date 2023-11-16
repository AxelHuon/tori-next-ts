import useScreenSize from '@/hooks/useScreenSize';
import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/DesignSystem/Colors';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { TextTypesStyles } from '../../TextStyled/TextStyled.style';
import WrapperIcon from '../../WrapperIcon/WrapperIcon';
import { ButtonSideBarBaseStyle } from './ButtonSideBar.style';

export interface ButtonSideBarProps {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: number;
  color?: string;
  bgcolor?: string;
  imageSrc?: string;
  userName?: string;
}

const ButtonLink = styled(Link)<ButtonSideBarProps>`
  ${ButtonSideBarBaseStyle}
  ${TextTypesStyles.Button14}
`;

const ButtonOnClick = styled.button<ButtonSideBarProps>`
  ${ButtonSideBarBaseStyle}
  ${TextTypesStyles.Button14}
`;

const ButtonSideBar: React.FC<ButtonSideBarProps> = ({
  label,
  icon,
  href,
  active,
  onClick,
  color,
  bgcolor,
  imageSrc,
  userName,
}) => {
  const commonProps = {
    label,
    icon,
    href,
    active,
    onClick,
    color,
    bgcolor,
    imageSrc,
    userName,
  };

  const { theme } = useTheme();

  const isLargerThanLaptop = useScreenSize('laptop');
  return (
    <>
      {onClick ? (
        <ButtonOnClick theme={theme} {...commonProps}>
          {icon ? (
            <WrapperIcon
              color={
                color
                  ? color
                  : theme.mode === 'light'
                  ? active
                    ? Colors.PRIMARY
                    : Colors.GRAY_400
                  : active
                  ? Colors.GRAY_900
                  : Colors.GRAY_400
              }
              width={'24px'}
            >
              {icon && icon}
            </WrapperIcon>
          ) : null}
          {imageSrc ? (
            <Image width={30} height={30} src={imageSrc} alt={`profil picture ${userName}`} />
          ) : null}
          {isLargerThanLaptop && label}
        </ButtonOnClick>
      ) : (
        <ButtonLink theme={theme} {...commonProps}>
          {icon ? (
            <WrapperIcon
              color={
                color
                  ? color
                  : theme.mode === 'light'
                  ? active
                    ? Colors.PRIMARY
                    : Colors.GRAY_400
                  : active
                  ? Colors.GRAY_900
                  : Colors.GRAY_400
              }
              width={'24px'}
            >
              {icon && icon}
            </WrapperIcon>
          ) : null}
          {imageSrc ? (
            <Image width={30} height={30} src={imageSrc} alt={`profil picture ${userName}`} />
          ) : null}
          {isLargerThanLaptop && label}
        </ButtonLink>
      )}
    </>
  );
};

export default ButtonSideBar;
