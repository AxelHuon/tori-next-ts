import { AnimeType } from "@/utils/types/AnimeTypes.type";
import useSWR from "swr";
import { fetcherSingleItem } from "@/utils/fetcher";

export interface ApiResponseSingleAnimeType {
  anime: AnimeType;
}
export const useSingleAnim = (id: string) => {
  const { data, error } = useSWR<ApiResponseSingleAnimeType>(
    `/api/animes?id=${id}`,
    fetcherSingleItem,
  );
  return {
    anime: data?.anime,
    error,
  };
};
