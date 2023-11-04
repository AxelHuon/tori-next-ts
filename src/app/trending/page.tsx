'use client';
import { useAnimeCollection } from '@/hooks/services/Anime/useAnimeCollection';
import { AnimeCollectionParamsType } from '@/utils/types/AnimeTypes.type';
import React, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import AnimeListing from '../../../components/Molecules/Anime/AnimeListing';
import FilterBar from '../../../components/Molecules/FilterBar/FilterBar';

const Catalogue: React.FC = () => {
  const [paramsState, setParamsState] = useState<AnimeCollectionParamsType>({
    byPopularity: 'true',
  });

  const { animes, setParamsRequest, incrementSize, resetData, paramsRequest, isLoading, error } =
    useAnimeCollection(paramsState);

  window.onscroll = function () {
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight) {
      incrementSize();
    }
  };

  return (
    <>
      <FilterBar
        paramsRequest={paramsRequest}
        resetData={resetData}
        setParamsRequest={setParamsRequest}
        setParamsState={setParamsState}
        paramsState={paramsState}
      />
      <AnimeListing error={error} isloading={isLoading} animes={animes} />
    </>
  );
};

export default Catalogue;
