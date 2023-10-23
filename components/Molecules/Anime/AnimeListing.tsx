import React from "react";
import styled from "styled-components";
import { AnimeType } from "../../../pages/api/apiResponseAnimeInterface";
import ItemListAnime from "../../Atomes/Anime/ItemListAnime/ItemListAnime";

interface AnimListingProps {
  animes: AnimeType[];
  isValidating: boolean;
}

const ContainerListAnime = styled.ul`
  display: grid;
  grid-gap: 28px 30px;
  grid-template-columns: repeat(auto-fill, 185px);
  justify-content: space-between;
`;

const AnimListing: React.FC<AnimListingProps> = ({ animes, isValidating }) => {
  return (
    <ContainerListAnime>
      {animes?.map((item, index) => {
        return (
          <ItemListAnime
            key={index}
            isValidating={isValidating}
            animeItem={item}
          />
        );
      })}
    </ContainerListAnime>
  );
};

export default AnimListing;
