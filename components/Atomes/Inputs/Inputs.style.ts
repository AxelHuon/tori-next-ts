import { Colors } from '@/theme/DesignSystem/Colors';
import { css } from 'styled-components';
import { TextTypesStyles } from '../TextStyled/TextStyled.style';
import { InputsProps } from './Input';

export const InputsBaseStyle = css<InputsProps>`
  padding: 8px 10px;
  border-radius: 5px;
  transition: border 0.2s ease-in-out;
  border: 2px solid ${Colors.GRAY_400};
  ${TextTypesStyles.Paragraph14Regular}
  &:focus {
    outline: none;
    border: 2px solid ${Colors.PRIMARY};
  }
`;
