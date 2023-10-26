import { css } from 'styled-components';

import { TextStyledProps } from './TextStyled';

export const TextStyledBaseStyle = css<TextStyledProps>`
  color: ${(props) => props.color};
  text-decoration: none !important;
  text-transform: none;
  transition: color 0.2s ease-in-out;
`;

export const TextTypesStyles = {
  TitleH1: css`
    font-size: 60px;
    font-family: 'Mont Blanc', serif;
    font-weight: 800;
    line-height: 80px;
  `,
  TitleH1Mini: css`
    font-size: 40px;
    font-family: 'Mont Blanc', serif;
    font-weight: 800;
    line-height: 80px;
  `,
  Button14: css`
    font-size: 14px;
    font-family: 'Mont Blanc', serif;
    font-weight: 600;
    line-height: 22px;
  `,
  Paragraph16Emphasized: css`
    font-size: 16px;
    font-family: 'Mont Blanc', serif;
    font-weight: 600;
    line-height: 24px;
  `,
  Paragraph14Regular: css`
    font-size: 14px;
    font-family: 'Mont Blanc', serif;
    font-weight: 400;
    line-height: 24px;
  `,
};
