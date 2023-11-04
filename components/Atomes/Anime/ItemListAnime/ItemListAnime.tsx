import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/DesignSystem/Colors';
import { slugify } from '@/utils/text';
import { AnimeType } from '@/utils/types/AnimeTypes.type';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled, { keyframes } from 'styled-components';
import TextStyled from '../../TextStyled/TextStyled';

interface ItemListAnimeProps {
  anime: AnimeType;
}

const animationApear = keyframes`
  from{
    transform: scale(0.6);
    opacity: 0;
  }
  to{
    transform: scale(1);
    opacity: 1;
  }
  `;

const ItemListAnimeStyle = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: ${animationApear} 0.7s cubic-bezier(0.01, 0.46, 0.4, 0.99);
  &:hover {
    > div {
      p {
        color: ${Colors.PRIMARY_300};
      }
    }
  }
`;

export const TitleContainer = styled.div`
  opacity: 0;
`;

const ImageContainer = styled.div`
  width: 185px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  a {
    width: 100%;
    position: absolute;
    z-index: 999;
    height: 100%;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ContainerSkeleton = styled.div`
  width: 185px;
  height: 300px;
  > span {
    height: 100% !important;
  }
`;

const CustomLink = styled.a`
  text-decoration: none;
  position: relative;
  > div {
    transition: all 0.2s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  }
  &:hover {
    > div {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
    }
  }
`;

const ContainerMoreInformation = styled.div`
  position: absolute;
  transform: scale(0.8);
  filter: blur(5px);
  min-height: 10vh;
  width: 250px;
  z-index: 999;
  background-color: white;
  top: 10%;
  right: calc(-220px);
  opacity: 0;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid ${Colors.GRAY_100};
`;

const ContainerStudios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ItemListAnime: React.FC<ItemListAnimeProps> = ({ anime }) => {
  const refSkeletonImage = useRef<HTMLDivElement>(null);
  const refTitleAnime = useRef<HTMLDivElement>(null);
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    gsap.to(refSkeletonImage.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
    gsap.to(refTitleAnime.current, {
      opacity: 1,
      duration: 0.4,
      delay: 0.4,
    });
  };

  const slug = slugify(anime?.title || anime?.title_japanese || anime?.title_english || ' dsds');

  const { theme } = useTheme();

  return (
    <CustomLink href={`/anime/${slug}/${anime.mal_id} `}>
      <ItemListAnimeStyle>
        <ImageContainer>
          {anime && (
            <Image
              ref={imgRef}
              onLoad={handleImageLoad}
              sizes={'400px'}
              priority={true}
              src={
                anime?.images?.webp_large_url ||
                anime?.images?.webp_image_url ||
                anime?.images?.webp_small_url ||
                'default.png'
              }
              alt={anime.title || 'anime title'}
              fill={true}
            />
          )}
          <ContainerSkeleton ref={refSkeletonImage}>
            <Skeleton
              highlightColor={Colors.GRAY_25}
              baseColor={Colors.GRAY_100}
              width={185}
              height={300}
            />
          </ContainerSkeleton>
        </ImageContainer>
        <TitleContainer ref={refTitleAnime}>
          <TextStyled
            type={'Paragraph16Emphasized'}
            color={theme.mode === 'light' ? Colors.GRAY_900 : Colors.GRAY_25}
          >
            {anime?.title}
          </TextStyled>
        </TitleContainer>
      </ItemListAnimeStyle>
      <ContainerMoreInformation>
        <ContainerStudios>
          {anime.studios.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </ContainerStudios>
        <ContainerStudios>
          {anime.genres.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </ContainerStudios>
      </ContainerMoreInformation>
    </CustomLink>
  );
};

export default ItemListAnime;
