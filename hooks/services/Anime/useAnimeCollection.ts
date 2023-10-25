import { fetcherCollection } from '@/utils/fetcher';
import {
  AnimeCollectionParamsType,
  AnimeType,
  PaginationType,
} from '@/utils/types/AnimeTypes.type';
import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

export interface ApiResponseAnimeCollectionType {
  animes: AnimeType[];
  pagination: PaginationType;
}

export const useAnimeCollection = (initialParams: AnimeCollectionParamsType) => {
  const [params, setParams] = useState<AnimeCollectionParamsType>(initialParams);
  let updatedParams = {
    ...params,
  };
  useEffect(() => {
    if (params.byPopularity === 'false') {
      delete updatedParams.byPopularity;
    }

    if (!params.search || params.search === '') {
      delete updatedParams.search;
    }

    if (params.idProducers === 0) {
      delete updatedParams.idProducers;
    }

    if (params.idLicensors === 0) {
      delete updatedParams.idLicensors;
    }

    if (params.idStudios === 0) {
      delete updatedParams.idStudios;
    }

    if (params.idGenres === 0) {
      delete updatedParams.idGenres;
    }
  }, []);

  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [paginationState, setPaginationState] = useState<PaginationType | null>();

  const { data, error, size, setSize, isValidating, isLoading } =
    useSWRInfinite<ApiResponseAnimeCollectionType>(
      (index) => [
        `/api/animes`,
        {
          ...updatedParams,
          page: index + 1,
        },
      ],
      fetcherCollection,
      {
        revalidateOnFocus: true,
      },
    );

  useEffect(() => {
    setAnimes([]);
  }, [params]);

  useEffect(() => {
    if (data) {
      let newAnimes = data.map((page) => page?.animes).flat();
      let currentLength = animes.length;
      let newLength = newAnimes.length;
      let newPagination = data.map((page) => page?.pagination).flat();
      setPaginationState(newPagination[data.length - 1]);
      if (newLength > currentLength) {
        let updatedAnimes = newAnimes.slice(currentLength);
        setAnimes((prevAnimes) => [...prevAnimes, ...updatedAnimes]);
      }
    }
  }, [data]);

  const resetData = () => {
    setAnimes([]);
    setSize(1);
  };

  const incrementSize = () => {
    if (paginationState?.hasNextPage && !error) {
      setSize(size + 1);
    }
  };

  return {
    isLoading,
    animes,
    error,
    params,
    size,
    pagination: paginationState,
    setSize,
    incrementSize,
    isValidating,
    setParams,
    resetData,
  };
};
