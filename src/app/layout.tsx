"use client";
import "./global.css";
import { Colors } from "@/theme/design_system/Colors";
import { ThemeContextProvider } from "@/theme/design_system/ThemeContext";
import styled, { ThemeProvider } from "styled-components";

const PageMainContainer = styled.main`
  background: ${Colors.GRAY_25};
  min-height: 100vh;
  position: relative;
  padding-inline: 35px;
  display: flex;
  gap: 35px;
  flex-wrap: nowrap;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ThemeContextProvider>
          <PageMainContainer></PageMainContainer>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
