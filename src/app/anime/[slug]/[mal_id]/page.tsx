'use client';
import { useSingleAnim } from '@/hooks/services/Anime/useSingleAnime';
import { Colors } from '@/theme/DesignSystem/Colors';
import React from 'react';
import TextStyled from '../../../../../components/Atomes/TextStyled/TextStyled';
import { useTheme } from '@/hooks/useTheme';

interface SingleAnimePageProps {
  params: { slug: string; mal_id: string };
}

const PageSingleAnime: React.FC<SingleAnimePageProps> = ({ params }) => {
  const { theme } = useTheme();
  const { anime, error } = useSingleAnim(params.mal_id);
  return (
    <>
      {error && error.message}
      <TextStyled
        type={'TitleH1Mini'}
        color={theme.mode === 'dark' ? Colors.GRAY_25 : Colors.GRAY_900}
      >
        {anime?.title}
      </TextStyled>
    </>
  );
};

export default PageSingleAnime;
