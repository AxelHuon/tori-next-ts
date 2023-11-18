import { Colors } from '@/theme/DesignSystem/Colors';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { TextTypesStyles } from '../../TextStyled/TextStyled.style';

interface ButtonLinkProps {
  href: string;
  label: string;
  color?: string;
  bgcolor?: string;
  icon?: React.ReactNode;
}

const ButtonLinkStyled = styled(Link)<ButtonLinkProps>`
  text-decoration: none;
  color: ${(props) => props.color || Colors.GRAY_25};
  background-color: ${(props) => props.bgcolor || Colors.GRAY_25};
  border-radius: 2px;
  padding: 5px 10px;
  display: inline-flex;
  ${TextTypesStyles.Button14}
`;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  label,
  color = Colors.GRAY_25,
  bgcolor = Colors.PRIMARY,
  icon,
  href,
}) => {
  const commonProps = {
    label,
    color,
    bgcolor,
    icon,
    href,
  };

  return <ButtonLinkStyled {...commonProps}>{label}</ButtonLinkStyled>;
};

export default ButtonLink;
