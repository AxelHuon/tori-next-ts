import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcherSingleItem } from "@/utils/fetcher";
import { GenreType } from "../../../pages/api/apiResponseAnimeInterface";

export const useCollectionParamsAnime = (params: string) => {
  const [dataState, setDataState] = useState<GenreType[]>([]);
  const { data, error } = useSWR(`/api/${params}`, fetcherSingleItem);

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
