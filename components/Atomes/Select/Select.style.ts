import { Colors } from '@/theme/DesignSystem/Colors';
import { css } from 'styled-components';
import { TextTypesStyles } from '../TextStyled/TextStyled.style';

import { SelectProps } from './Select';

export const SelectBaseStyle = css<SelectProps>`
  padding: 8px 10px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  transition: border 0.2s ease-in-out;
  border: 2px solid ${Colors.GRAY_400};
  -webkit-appearance: none; /* Remove default arrow for Safari */
  -moz-appearance: none; /* Remove default arrow for Firefox */
  appearance: none; /* Remove default arrow for other browsers */
  ${TextTypesStyles.Paragraph14Regular}
  option {
    ${TextTypesStyles.Paragraph14Regular}
  }
  &:focus {
    outline: none;
    border: 2px solid ${Colors.PRIMARY};
  }
`;
