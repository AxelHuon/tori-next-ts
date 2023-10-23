"use client";
import { useAnimeCollection } from "@/hooks/services/Anime/useAnimeCollection";
import { useCollectionParamsAnime } from "@/hooks/services/Anime/useCollectionParamsAnime";
import React, { useEffect, useState } from "react";
import AnimeListing from "../../../components/Molecules/Anime/AnimeListing";
import SectionPageWithBackground from "../../../layouts/Sections/SectionPageWithBackground";
import "react-loading-skeleton/dist/skeleton.css";

const Catalogue: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [genreSelected, setGenres] = useState<number>(1);
  const [studioSelected, setStudios] = useState<number>();
  const [producersSelected, setProducers] = useState<number>();
  const [byPopularitySelected, setByPopularity] = useState<boolean>(false);
  const [licensorsSelected, setLicensors] = useState<number>();
  const params = {
    search: search,
    idProducers: producersSelected,
    idLicensors: licensorsSelected,
    idStudios: studioSelected,
    idGenres: genreSelected,
    byPopularity: byPopularitySelected ? "true" : "false",
  };
  const { animes, setSize, setParams, size, isValidating, resetAndFetch } =
    useAnimeCollection(params);

  const { data: genres, error: errorGenres } =
    useCollectionParamsAnime("genres");
  const { data: studios, error: errorStudios } =
    useCollectionParamsAnime("studios");
  const { data: producers, error: errorProducers } =
    useCollectionParamsAnime("producers");

  const { data: licensors, error: errorLicensors } =
    useCollectionParamsAnime("licensors");

  useEffect(() => {}, [
    search,
    genreSelected,
    studioSelected,
    producersSelected,
    byPopularitySelected,
    licensorsSelected,
    params,
  ]);

  window.onscroll = function (ev) {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    ) {
      setSize(size + 1);
    }
  };

  const handleChangeParams = () => {
    const newParams = {
      ...params,
      search: search.trimEnd().toLowerCase(),
      idProducers:
        producersSelected !== params.idProducers
          ? producersSelected
          : params.idProducers,
      idLicensors:
        licensorsSelected !== params.idLicensors
          ? licensorsSelected
          : params.idLicensors,
      idStudios:
        studioSelected !== params.idStudios ? studioSelected : params.idStudios,
      idGenres:
        genreSelected !== params.idGenres ? genreSelected : params.idGenres,
      byPopularity: byPopularitySelected ? "true" : "false",
    };
    setParams(newParams);
    setSize(1);
    resetAndFetch();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (search.length >= 1) {
        handleChangeParams();
      }
    }
  };

  const handleChangeSelect = (params: string, value: string) => {
    switch (params) {
      case "genres":
        setGenres(parseInt(value));
        break;
      case "studios":
        setStudios(parseInt(value));
        break;
      case "licensors":
        setLicensors(parseInt(value));
        break;
      case "producers":
        setProducers(parseInt(value));
        break;
      default:
        console.log("error");
    }
    handleChangeParams();
  };

  return (
    <>
      <SectionPageWithBackground width={"100%"}>
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          type={"text"}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={params.idGenres}
          onChange={(e) => handleChangeSelect("genres", e.target.value)}
        >
          <option value={""}>---</option>
          {genres.map((itemGenres) => {
            return (
              <option key={itemGenres.id} value={itemGenres.id}>
                {itemGenres.name}
              </option>
            );
          })}
        </select>
        <select
          value={params.idStudios}
          onChange={(e) => setStudios(Number(e.target.value))}
        >
          <option value={""}>---</option>
          {studios.map((itemStudio) => {
            return (
              <option key={itemStudio.id} value={itemStudio.id}>
                {itemStudio.name}
              </option>
            );
          })}
        </select>
        <select
          value={params.idProducers}
          onChange={(e) => setProducers(Number(e.target.value))}
        >
          <option value={""}>---</option>
          {producers.map((itemProducer) => {
            return (
              <option key={itemProducer.id} value={itemProducer.id}>
                {itemProducer.name}
              </option>
            );
          })}
        </select>
        <select
          value={params.idLicensors}
          onChange={(e) => setLicensors(Number(e.target.value))}
        >
          <option value={""}>---</option>
          {licensors.map((itemLicensors) => {
            return (
              <option key={itemLicensors.id} value={itemLicensors.id}>
                {itemLicensors.name}
              </option>
            );
          })}
        </select>
        <AnimeListing animes={animes} isValidating={isValidating} />
      </SectionPageWithBackground>
    </>
  );
};

export default Catalogue;
