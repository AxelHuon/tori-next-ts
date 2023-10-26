import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { InputsBaseStyle } from './Inputs.style';

export interface InputsProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  name: string;
}

const InputStyled = styled.input<InputsProps>`
  ${InputsBaseStyle}
`;

const Input: React.FC<InputsProps> = ({
  placeholder,
  type = 'text',
  onChange,
  onKeyDown,
  name,
}) => {
  const commonProps = {
    placeholder,
    onChange,
    onKeyDown,
    type,
    name,
  };

  return <InputStyled {...commonProps} />;
};

export default Input;
