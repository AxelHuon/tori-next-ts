import { AnimeParamType } from '@/utils/types/AnimeTypes.type';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SelectBaseStyle } from './Select.style';

export interface SelectProps {
  label: string;
  data: AnimeParamType[];
  value?: number | string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

const SelectStyled = styled.select<SelectProps>`
  ${SelectBaseStyle}
`;

const Select: React.FC<SelectProps> = ({ label, data, value = 0, onChange, name }) => {
  const commonProps = {
    label,
    data,
    value,
    onChange,
    name,
  };
  return (
    <SelectStyled {...commonProps}>
      <option value={0}>All</option>
      {data.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </SelectStyled>
  );
};

export default Select;
