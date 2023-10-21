import React from 'react';
import styled from 'styled-components';
import { SideBarBaseStyle } from './SideBar.style';
import useScreenSize from '@/hooks/useScreenSize';

export interface SideBarProps {
  name: string;
}

const Container = styled.div<SideBarProps>`
  ${SideBarBaseStyle}
`;

const SideBar: React.FC<SideBarProps> = ({ name }) => {

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

export default SideBar;
