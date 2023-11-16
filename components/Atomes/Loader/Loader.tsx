import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  margin: 30px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid rgba(255, 255, 255, 0.2);
  border-right: 0.5em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left: 0.5em solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

const Loader: React.FC<LoaderProps> = ({}) => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;
