'use client';
import { useSingleAnim } from '@/hooks/services/Anime/useSingleAnime';
import { Colors } from '@/theme/DesignSystem/Colors';
import React from 'react';
import TextStyled from '../../../../../components/Atomes/TextStyled/TextStyled';

interface SingleAnimePageProps {
  params: { slug: string; mal_id: string };
}

const PageSingleAnime: React.FC<SingleAnimePageProps> = ({ params }) => {
  const { anime, error } = useSingleAnim(params.mal_id);
  return (
    <>
      {error && error.message}
      <TextStyled type={'Paragraph16Emphasized'} color={Colors.GRAY_25}>
        {anime?.title}
      </TextStyled>
    </>
  );
};

export default PageSingleAnime;
