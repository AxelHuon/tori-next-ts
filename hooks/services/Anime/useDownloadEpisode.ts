import { fetcherSingleItem } from '@/utils/fetcher';
import useSWR from 'swr';

export const useDownloadEpisode = (url: string) => {
  const { data, error } = useSWR<any>(`/api/crunchy-cli?url=${url}`, fetcherSingleItem);
  return {
    data,
    error,
  };
};
