import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/DesignSystem/Colors';
import React from 'react';
import styled from 'styled-components';
import { TextTypesStyles } from '../../Atomes/TextStyled/TextStyled.style';

export interface FormItemProps {
  label: string;
  name: string;
  children: React.ReactNode;
  width?: string;
}

const Container = styled.div<FormItemProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  label {
    ${TextTypesStyles.Paragraph16Emphasized}
    transition: color 0.2s ease-in-out;
    color: ${(props) => (props.theme.mode === 'light' ? Colors.GRAY_900 : Colors.GRAY_25)};
  }
`;

const FormItem: React.FC<FormItemProps> = ({ children, label, name, width = 'fit-content' }) => {
  const commonProps = {
    children,
    label,
    name,
    width,
  };

  const { theme } = useTheme();

  return (
    <Container theme={theme} {...commonProps}>
      <label htmlFor={name}>{label}</label>
      {children}
    </Container>
  );
};

export default FormItem;
