import { Colors } from '@/theme/DesignSystem/Colors';
import ArrowDownIcon from '@/theme/DesignSystem/Icons/ArrowDownIcon';
import { AnimeParamType } from '@/utils/types/AnimeTypes.type';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import WrapperIcon from '../WrapperIcon/WrapperIcon';
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

const ContainerSelect = styled.div`
  position: relative;
  width: 100%;
  > div {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Select: React.FC<SelectProps> = ({ label, data, value = 0, onChange, name }) => {
  const commonProps = {
    label,
    data,
    value,
    onChange,
    name,
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    console.log('focus');
    setIsFocused(true);
  };
  const handleBlur = () => {
    console.log('blur');
    setIsFocused(false);
  };

  return (
    <ContainerSelect>
      <WrapperIcon width={'20px'} color={isFocused ? Colors.PRIMARY : Colors.GRAY_400}>
        <ArrowDownIcon />
      </WrapperIcon>
      <SelectStyled onBlur={() => handleBlur()} onFocus={() => handleFocus()} {...commonProps}>
        <option value={0}>All</option>
        {data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </SelectStyled>
    </ContainerSelect>
  );
};

export default Select;
