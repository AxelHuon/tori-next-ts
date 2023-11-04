'use client';
import { ThemeProvider } from '@/hooks/useTheme';
import { device } from '@/utils/device';
import { SessionProvider } from 'next-auth/react';
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
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <SessionProvider>
            <MainContainer>
              <SideBar />
              <ContainerContentPage>{children}</ContainerContentPage>
            </MainContainer>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
