"use client";
import { useSingleAnim } from "@/hooks/services/Anime/useSingleAnime";
import React from "react";

interface SingleAnimePageProps {
  params: { anime: string };
}

const PageSingleAnime: React.FC<SingleAnimePageProps> = ({ params }) => {
  const { anime, error } = useSingleAnim(params.anime[0]);
  return <></>;
};

export default PageSingleAnime;
