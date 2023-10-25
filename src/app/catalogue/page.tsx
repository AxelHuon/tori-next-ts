'use client';
import { useAnimeCollection } from '@/hooks/services/Anime/useAnimeCollection';
import { useCollectionParamsAnime } from '@/hooks/services/Anime/useCollectionParamsAnime';
import { AnimeCollectionParamsType } from '@/utils/types/AnimeTypes.type';
import React, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import AnimeListing from '../../../components/Molecules/Anime/AnimeListing';

const Catalogue: React.FC = () => {
  const [paramsState, setParamsState] = useState<AnimeCollectionParamsType>({
    byPopularity: 'false',
  });

  const { animes, setParams, incrementSize, resetData, isLoading, error, params } =
    useAnimeCollection(paramsState);

  const { data: genres, error: errorGenres } = useCollectionParamsAnime('genres');
  const { data: studios, error: errorStudios } = useCollectionParamsAnime('studios');
  const { data: producers, error: errorProducers } = useCollectionParamsAnime('producers');
  const { data: licensors, error: errorLicensors } = useCollectionParamsAnime('licensors');

  window.onscroll = function (ev) {
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight) {
      incrementSize();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      if ((paramsState.search && paramsState.search.length > 0) || params.search) {
        setParams(paramsState);
        resetData();
      } else {
        const { search, ...updatedParamsState } = paramsState;
        setParamsState(updatedParamsState); // Retire la propriété search
      }
    }
  };

  const handleChangeSelect = (paramKey: string, value: string) => {
    let updatedParamsState: AnimeCollectionParamsType = { ...paramsState };

    if (value !== '0') {
      updatedParamsState[paramKey] = Number(value);
    } else {
      delete updatedParamsState[paramKey];
    }

    setParamsState(updatedParamsState);
    setParams(updatedParamsState);
    resetData();
  };

  return (
    <>
      <input
        placeholder={'Recherche'}
        onKeyDown={(e) => handleKeyDown(e)}
        type={'text'}
        onChange={(e) => setParamsState({ ...paramsState, search: e.target.value })}
      />
      <select
        value={paramsState.idGenres || 0}
        onChange={(e) => handleChangeSelect('idGenres', e.target.value)}
      >
        <option value={0}>Genre</option>
        {genres.map((itemGenres) => (
          <option key={itemGenres.id} value={itemGenres.id}>
            {itemGenres.name}
          </option>
        ))}
      </select>
      <select
        value={paramsState.idStudios || 0}
        onChange={(e) => handleChangeSelect('idStudios', e.target.value)}
      >
        <option value={0}>Studio</option>
        {studios.map((itemStudio) => (
          <option key={itemStudio.id} value={itemStudio.id}>
            {itemStudio.name}
          </option>
        ))}
      </select>
      <select
        value={paramsState.idProducers || 0}
        onChange={(e) => handleChangeSelect('idProducers', e.target.value)}
      >
        <option value={0}>Producteur</option>
        {producers.map((itemProducer) => (
          <option key={itemProducer.id} value={itemProducer.id}>
            {itemProducer.name}
          </option>
        ))}
      </select>
      <select
        value={paramsState.idLicensors || 0}
        onChange={(e) => handleChangeSelect('idLicensors', e.target.value)}
      >
        <option value={0}>Licence</option>
        {licensors.map((itemLicensors) => (
          <option key={itemLicensors.id} value={itemLicensors.id}>
            {itemLicensors.name}
          </option>
        ))}
      </select>
      <AnimeListing error={error} isloading={isLoading} animes={animes} />
    </>
  );
};

export default Catalogue;
