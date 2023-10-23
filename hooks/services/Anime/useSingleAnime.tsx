import { useState } from "react";
import useSWR from "swr";
import { fetcherSingleItem } from "@/utils/fetcher";

export const useSingleAnim = (id: string) => {
  const { data, error } = useSWR(`/api/animes?id=${id}`, fetcherSingleItem);
  return {
    anime: data?.anime,
    error,
  };
};
