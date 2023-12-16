'use client';
import { useSeasonsCollection } from '@/hooks/services/Anime/useSeasonsCollections';
import { useSingleAnim } from '@/hooks/services/Anime/useSingleAnime';
import { Colors } from '@/theme/DesignSystem/Colors';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import TextStyled from '../../../../../components/Atomes/TextStyled/TextStyled';
import { useTheme } from '@/hooks/useTheme';

interface SingleAnimePageProps {
  params: { slug: string; mal_id: string };
}

const PageSingleAnime: React.FC<SingleAnimePageProps> = ({ params }) => {
  const { theme } = useTheme();
  const { anime, error } = useSingleAnim(params.mal_id);
  const { data, error: errorSeasonsCollections } = useSeasonsCollection(anime?.title || '', 14);

  const handleClickDownloadButton = async (url: string, title: string) => {
    const download = () => axios.get(`/api/upload-episode?url=${url}&title=${title}`);
    toast.promise(
      download(),
      {
        loading: 'Téléchargement en cours...', // Message pendant le chargement
        success: (data: any) => {
          let encodedUrl = encodeURI(data.data.url) + '.mp4'
          const onClickToastSuccess = () =>{
            toast.dismiss()
            window.open(encodedUrl)
          }
          return (<div onClick={()=>onClickToastSuccess()}>Clique pour télécharger</div>)
        },
        error: (error: any) => {
          console.log(error);
          if (error.request) {
            console.log(error.request);
            if (error.request.status === 404) {
              return (<div onClick={()=>toast.dismiss()}>Une erreur est survenue</div>)
            } else {
              return (<div onClick={()=>toast.dismiss()}>Une erreur est survenue</div>)
            }
          }
          return 'Une erreur est survenue';
        },
      },
      {
        position:'bottom-center',
        style: {
          cursor:"pointer",
          fontFamily:"MontBlanc Regular"
        },
        duration: 1000000000,
        success: {
          style:{
            cursor:"pointer",
            fontFamily:"MontBlanc Regular",
            color:Colors.GRAY_25,
            background:Colors.PRIMARY,
          },
          icon: '🔥',
        },
      },
    );
  };


  return (
    <>
      {error && error.message}
      <TextStyled type={'TitleH1Mini'} color={theme.mode ==="dark" ? Colors.GRAY_25 : Colors.GRAY_900}>
        {anime?.title}
      </TextStyled>
      {data &&
        data.episodes['0'].map((item: any, index: number) => {
          return (
            <div key={index}>
              <button
                onClick={() =>
                  handleClickDownloadButton(
                    `https://www.crunchyroll.com/fr/watch/${item.id}/${item.slug_title}`,
                    item.title,
                  )
                }
              >
                {item.title}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default PageSingleAnime;
