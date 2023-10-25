'use client';
import { ThemeProvider } from '@/hooks/useTheme';
import { device } from '@/utils/device';
import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import MainContainer from '../../layouts/MainContainer/MainContainer';
import SideBar from '../../layouts/SideBar/SideBar';
import './global.css';

const ContainerContentPage = styled.article`
  padding-top: 70px;
  padding-bottom: 50px;
  width: calc(100% - 120px - 16px);
  position: relative;
  box-sizing: border-box;
  @media (${device.laptop}) {
    width: calc(100% - 240px - 64px);
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainContainer>
            <SideBar />
            <ContainerContentPage>{children}</ContainerContentPage>
          </MainContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
