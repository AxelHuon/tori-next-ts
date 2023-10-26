import { Colors } from '@/theme/DesignSystem/Colors';
import { css } from 'styled-components';
import { TextTypesStyles } from '../TextStyled/TextStyled.style';

import { SelectProps } from './Select';

export const SelectBaseStyle = css<SelectProps>`
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  transition: border 0.2s ease-in-out;
  border: 2px solid ${Colors.GRAY_400};
  min-height: 38px;
  ${TextTypesStyles.Paragraph14Regular}
  option {
    ${TextTypesStyles.Paragraph14Regular}
  }
  &:focus {
    outline: none;
    border: 2px solid ${Colors.PRIMARY};
  }
`;
