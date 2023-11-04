import { AnimeParamType } from "@/utils/types/AnimeTypes.type";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcherSingleItem } from "@/utils/fetcher";

interface ApiResponseAnimeParamType {
  data: AnimeParamType[];
}

export const useCollectionParamsAnime = (
  params: "studios" | "genres" | "producers" | "licensors",
) => {
  const [dataState, setDataState] = useState<AnimeParamType[]>([]);
  const { data, error } = useSWR<ApiResponseAnimeParamType>(
    `/api/${params}`,
    fetcherSingleItem,
  );

  useEffect(() => {
    if (data) {
      setDataState(data?.data);
    }
  }, [data]);

  return {
    data: dataState,
    error,
  };
};
