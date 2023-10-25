'use client';
import { Colors } from '@/theme/DesignSystem/Colors';
import BadMoodIcon from '@/theme/DesignSystem/Icons/BadMoodIcon';
import ErrorIcon from '@/theme/DesignSystem/Icons/ErrorIcon';
import { AnimeType } from '@/utils/types/AnimeTypes.type';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ItemListAnime from '../../Atomes/Anime/ItemListAnime/ItemListAnime';
import TextStyled from '../../Atomes/TextStyled/TextStyled';
import WrapperIcon from '../../Atomes/WrapperIcon/WrapperIcon';

interface AnimListingProps {
  animes: AnimeType[];
  isloading: boolean;
  error: any;
}

const ContainerListAnime = styled.ul`
  display: grid;
  grid-gap: 28px 30px;
  min-height: 30vh;
  grid-template-columns: repeat(auto-fill, 185px);
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 300px;
`;

const ContainerAll = styled.div<AnimListingProps>`
  min-height: 40vh;
  position: relative;
  display: ${(props) => (props.error ? 'flex' : 'block')};
  justify-content: ${(props) => (props.error ? 'center' : 'unset')};
  align-items: ${(props) => (props.error ? 'center' : 'unset')};
`;

const ContainerError = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  filter: blur(5px);
  height: 100%;
`;

const AnimListing: React.FC<AnimListingProps> = ({ animes, isloading, error }) => {
  const refErrorContaianer = useRef<HTMLDivElement>(null);
  const renderAnimes = () => {
    return (
      <ContainerListAnime>
        {animes.map((item, index) => {
          return <ItemListAnime anime={item} key={index} isloading={isloading} />;
        })}
      </ContainerListAnime>
    );
  };

  useEffect(() => {
    if (error) {
      gsap.to(refErrorContaianer.current, {
        opacity: 1,
        duration: 0.6,
        filter: 'blur(0px)',
      });
    }
  }, [error]);

  const renderError = () => (
    <ContainerError ref={refErrorContaianer}>
      <WrapperIcon width={'40px'} color={error.status === 404 ? Colors.GRAY_400 : Colors.RED_900}>
        {error.status === 404 ? <BadMoodIcon /> : <ErrorIcon />}
      </WrapperIcon>
      <TextStyled
        type={'Paragraph16Emphasized'}
        color={error.status === 404 ? Colors.GRAY_400 : Colors.RED_900}
      >
        {error.message}
      </TextStyled>
    </ContainerError>
  );

  return (
    <ContainerAll error={error} animes={animes} isloading={isloading}>
      {error ? renderError() : renderAnimes()}
    </ContainerAll>
  );
};

export default AnimListing;
