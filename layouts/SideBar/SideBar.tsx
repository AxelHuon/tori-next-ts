'use client';
import useScreenSize from '@/hooks/useScreenSize';
import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/DesignSystem/Colors';
import LoginIcon from '@/theme/DesignSystem/Icons/LoginIcon';
import FullLogo from '@/theme/DesignSystem/Logos/FullLogo';
import LittleLogo from '@/theme/DesignSystem/Logos/LittleLogo';
import { sideBarData } from '@/utils/data/sideBarData';
import { device } from '@/utils/device';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonChangeTheme from '../../components/Atomes/Buttons/ButtonChangeTheme/ButtonChangeTheme';
import ButtonSideBar from '../../components/Atomes/ButtonSideBar/ButtonSideBar';

const Container = styled.aside`
  height: 100vh;
  position: fixed;
  width: fit-content;
  left: 0;
  background-color: transparent;
  z-index: 99;
  display: inline-flex;
  padding: 56px 30px 30px 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  @media (${device.laptop}) {
    width: 300px;
  }
`;

const HeaderSideBar = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: 30px;
  border-bottom: 2px solid
    ${(props) => (props.theme.mode === 'light' ? Colors.PRIMARY_25 : Colors.GRAY_700)};
`;

const ListItem = styled.li`
  width: fit-content;
  @media (${device.laptop}) {
    width: 100%;
  }
`;

const FooterSideBar = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const ContainerList = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media (${device.laptop}) {
    width: 100%;
  }
`;

const ContainerListFooter = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
  border-top: 2px solid
    ${(props) => (props.theme.mode === 'light' ? Colors.PRIMARY_25 : Colors.GRAY_700)};
  @media (${device.laptop}) {
    width: 100%;
  }
`;

const SideBar: React.FC = () => {
  const isLargerThanLaptop = useScreenSize('laptop');
  const { theme } = useTheme();
  const pathname = usePathname();

  const { data: session } = useSession();

  const [encodedEmail, setEncodedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (session && session?.user?.email) {
      setEncodedEmail(encodeURIComponent(session?.user?.email));
    }
  }, [session]);

  return (
    <Container>
      <HeaderSideBar>
        <ContainerLogo theme={theme}>
          {isLargerThanLaptop ? <FullLogo /> : <LittleLogo />}
        </ContainerLogo>
        <ContainerList>
          {sideBarData.map((item) => {
            return (
              <ListItem key={item.id}>
                <ButtonSideBar
                  active={pathname === item.href ? 1 : 0}
                  href={item.href}
                  icon={<item.icon />}
                  label={item.label}
                />
              </ListItem>
            );
          })}
        </ContainerList>
      </HeaderSideBar>
      <FooterSideBar>
        <ButtonChangeTheme />
        <ContainerListFooter theme={theme}>
          {session ? (
            <>
              <ListItem>
                <ButtonSideBar
                  label={session?.user?.name || 'Mon compte'}
                  href={`/user/${encodedEmail}`}
                  imageSrc={
                    session?.user?.image ? session?.user?.image : '/images/user/default.png'
                  }
                  userName={session?.user?.name || 'userName'}
                  active={pathname === '/moncompte' ? 1 : 0}
                />
              </ListItem>
              <ListItem>
                <ButtonSideBar
                  label={'Déconnexion'}
                  color={Colors.RED_900}
                  bgcolor={Colors.RED_100}
                  onClick={() => signOut()}
                  icon={<LoginIcon />}
                />
              </ListItem>
            </>
          ) : (
            <ListItem>
              <ButtonSideBar label={'Connexion'} onClick={() => signIn()} icon={<LoginIcon />} />
            </ListItem>
          )}
        </ContainerListFooter>
      </FooterSideBar>
    </Container>
  );
};

export default SideBar;
