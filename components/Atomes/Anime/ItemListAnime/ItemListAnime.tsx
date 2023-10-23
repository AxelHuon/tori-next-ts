import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/theme/DesignSystem/Colors";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import Image from "next/image";
import { AnimeType } from "../../../../pages/api/apiResponseAnimeInterface";
import TextStyled from "../../TextStyled/TextStyled";
interface ItemListAnimeProps {
  isValidating: boolean;
  animeItem: AnimeType;
}

const apearItemList = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ItemList = styled.li<ItemListAnimeProps>`
  animation: ${apearItemList} 0.6s cubic-bezier(0.45, 0.12, 0.15, 0.96);
  position: relative;
  width: 185px;
  a {
    width: 100%;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    border-radius: 7px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const ContainerSkeleton = styled.div`
  position: absolute;
  height: 100% !important;
  width: 100% !important;
  z-index: 99;
  top: 0;
  left: 0;
  opacity: 1;
  > span {
    position: absolute;
    height: 100% !important;
    width: 100% !important;
    z-index: 99;
    top: 0;
    left: 0;
    opacity: 1;
    > span {
      height: 100% !important;
      width: 100% !important;
    }
  }
`;

const ContainerSkeletonImage = styled.div`
  position: relative;
  br {
    display: none;
  }
`;

const ItemListAnime: React.FC<ItemListAnimeProps> = ({
  isValidating,
  animeItem,
}) => {
  const skeletonContaineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isValidating) {
      gsap.to(skeletonContaineRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.5,
      });
    }
  }, [isValidating]);

  const { theme } = useTheme();

  return (
    <ItemList isValidating={isValidating} animeItem={animeItem}>
      <Link href={`anime/${animeItem.id}`}>
        <ContainerSkeletonImage>
          <ContainerSkeleton ref={skeletonContaineRef}>
            <Skeleton width={300} height={300} />
          </ContainerSkeleton>
          <Image
            src={
              animeItem?.images.webp_large_url
                ? animeItem?.images.webp_large_url
                  ? animeItem?.images.webp_large_url
                  : animeItem?.images.webp_large_url
                : ""
            }
            alt={animeItem?.title || "anime title"}
            width={"300"}
            height={"300"}
          />
        </ContainerSkeletonImage>
        <TextStyled
          type={"Paragraph16Emphasized"}
          color={theme.mode === "light" ? Colors.GRAY_900 : Colors.GRAY_25}
        >
          {animeItem.title?.substring(0, 50)}
          {animeItem.title
            ? animeItem.title?.length > 50
              ? "..."
              : null
            : null}
        </TextStyled>
      </Link>
    </ItemList>
  );
};

export default ItemListAnime;
