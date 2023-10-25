export interface ImageType {
  id: number;
  jpg_image_url?: string;
  jpg_small_url?: string;
  jpg_large_url?: string;
  webp_image_url?: string;
  webp_small_url?: string;
  webp_large_url?: string;
  anime: AnimeType[];
}

export interface TrailerType {
  id: number;
  youtube_id?: string;
  url?: string;
  embed_url?: string;
  maximum_img_url?: string;
  anime: AnimeType[];
}

export interface AnimeParamType {
  id: number;
  name: string;
  url: string;
  anime: AnimeType[];
}

export interface AnimeType {
  id: number;
  mal_id: number;
  title?: string;
  title_english?: string;
  title_japanese?: string;
  type?: string;
  source?: string;
  episodes?: number;
  status?: string;
  airing?: boolean;
  airedFrom?: Date;
  airedTo?: Date;
  rating?: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  season?: string;
  year?: number;
  images: ImageType;
  trailer: TrailerType;
  producers: AnimeParamType[];
  licensors: AnimeParamType[];
  studios: AnimeParamType[];
  genres: AnimeParamType[];
  imagesId: number;
  trailerId: number;
}

export interface AnimeCollectionParamsType {
  [key: string]: any;
  page?: string;
  search?: string | null;
  idProducers?: number;
  idLicensors?: number;
  idStudios?: number;
  idGenres?: number;
  byPopularity?: string;
}

export interface PaginationType {
  currentPage: number;
  hasNextPage: boolean;
  total: number;
  totalPage: number;
}
