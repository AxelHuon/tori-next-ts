import { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcherCollection } from "@/utils/fetcher";
import {
  AnimeCollectionParamsType,
  AnimeType,
} from "../../../pages/api/apiResponseAnimeInterface";

export const useAnimeCollection = (
  initialParams: AnimeCollectionParamsType,
) => {
  const [params, setParams] =
    useState<AnimeCollectionParamsType>(initialParams);
  const [animes, setAnimes] = useState<AnimeType[]>([]);

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index) => [`/api/animes`, { ...params, page: index + 1 }],
    fetcherCollection,
    { revalidateOnFocus: true },
  );
  useEffect(() => {
    setAnimes([]);
  }, [params]);

  useEffect(() => {
    if (data) {
      console.log(data);
      let newAnimes = data.map((page) => page.animes).flat();
      let currentLength = animes.length;
      let newLength = newAnimes.length;
      if (newLength > currentLength) {
        let updatedAnimes = newAnimes.slice(currentLength);
        setAnimes((prevAnimes) => [...prevAnimes, ...updatedAnimes]);
      }
    }
  }, [data]);

  const resetAndFetch = () => {
    setAnimes([]);
    setSize(1);
  };

  return {
    animes,
    error,
    size,
    setSize,
    isValidating,
    setParams,
    resetAndFetch,
  };
};
