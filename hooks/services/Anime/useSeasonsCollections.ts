import { fetcherSingleItem } from '@/utils/fetcher';
import useSWR from 'swr';

export interface ApiResponseSingleAnimeType {
  title: string;
  countSeasons: number;
  episodes: any[];
}
export const useSeasonsCollection = (title: string) => {
  const { data, error } = useSWR<ApiResponseSingleAnimeType>(
    title ? `/api/episodes?title=${title}` : null, // Utilisez null pour éviter d'effectuer la requête si title est vide ou non défini
    fetcherSingleItem,
  );

  return {
    data,
    error,
  };
};
