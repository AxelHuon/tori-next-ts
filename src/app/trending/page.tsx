"use client";
import React, { useState } from "react";
import AnimeListing from "../../../components/Molecules/Anime/AnimeListing";
import SectionPageWithBackground from "../../../layouts/Sections/SectionPageWithBackground";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimeCollectionParamsType } from "../../../pages/api/apiResponseAnimeInterface";

const Catalogue: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [genres, setGenres] = useState<number>(1);
  const [studios, setStudios] = useState<number>();
  const [producers, setProducers] = useState<number>();
  const [byPopularity, setByPopularity] = useState<boolean>(true);
  const [licensors, setLicensors] = useState<number>();
  const [params, setParams] = useState<AnimeCollectionParamsType>({
    search: search,
    idProducers: producers,
    idLicensors: licensors,
    idStudios: studios,
    idGenres: genres,
    byPopularity: byPopularity ? "true" : "false",
  });

  return (
    <>
      <SectionPageWithBackground width={"100%"}>
        <AnimeListing params={params} />
      </SectionPageWithBackground>
    </>
  );
};

export default Catalogue;
