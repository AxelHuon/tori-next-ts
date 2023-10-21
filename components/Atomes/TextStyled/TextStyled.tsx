import React from 'react';
import styled from 'styled-components';
import { TextStyledBaseStyle } from './TextStyled.style';
import useScreenSize from '@/hooks/useScreenSize';

export interface TextStyledProps {
  name: string;
}

const Container = styled.div<TextStyledProps>`
  ${TextStyledBaseStyle}
`;

const TextStyled: React.FC<TextStyledProps> = ({ name }) => {

  const commonProps = {
    name,
  };


  const isLargerThanLaptop = useScreenSize('laptop');
  const isLargerThanTablet = useScreenSize('tablet');

  return (
    <Container {...commonProps}>
      {name}
    </Container>
  );
};

export default TextStyled;
