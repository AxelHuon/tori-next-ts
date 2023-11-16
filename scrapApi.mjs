import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma =new PrismaClient();
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const upsertManyToManyRelation = async (entityName, data) => {
  const relationsData = [];
  for (let item of data) {
    const relationData = await prisma[entityName].upsert({
      where: { name: item.name },
      update: {},
      create: item,
    });
    relationsData.push({ id: relationData.id });
  }
  return relationsData;
};

const processPage = async (animeDataArray) => {
  for (const animeData of animeDataArray) {
    const {
      mal_id,
      images,
      trailer,
      title,
      title_english,
      title_japanese,
      type,
      source,
      episodes,
      status,
      airing,
      aired,
      rating,
      score,
      scored_by,
      rank,
      popularity,
      members,
      favorites,
      synopsis,
      season,
      year,
      producers,
      licensors,
      studios,
      genres,
    } = animeData;  // Obtenez les propriétés de chaque élément du tableau
    
    
    const producersData = await upsertManyToManyRelation('producer', producers.map((producer) => ({
      name: producer.name,
      url: producer.url,
    })));
    const licensorsData = await upsertManyToManyRelation('licensor', licensors.map((licensor) => ({
      name: licensor.name,
      url: licensor.url,
    })));
    const studiosData = await upsertManyToManyRelation('studio', studios.map((studio) => ({
      name: studio.name,
      url: studio.url,
    })));
    const genresData = await upsertManyToManyRelation('genre', genres.map((genre) => ({
      name: genre.name,
      url: genre.url,
    })));
    
    const anime = await prisma.anime.create({
      data: {
        mal_id,
        title,
        title_english,
        title_japanese,
        type,
        source,
        episodes,
        status,
        airing,
        airedFrom: new Date(aired.from),
        airedTo: new Date(aired.to),
        rating,
        score,
        scored_by,
        rank,
        popularity,
        members,
        favorites,
        synopsis,
        season,
        year,
        images: {
          create: {
            jpg_image_url: images.jpg.image_url,
            jpg_small_url: images.jpg.small_image_url,
            jpg_large_url: images.jpg.large_image_url,
            webp_image_url: images.jpg.image_url,
            webp_small_url: images.jpg.small_image_url,
            webp_large_url: images.jpg.large_image_url,
          },
        },
        trailer: {
          create: {
            youtube_id: trailer.youtube_id,
            url: trailer.url,
            embed_url: trailer.embed_url,
            maximum_img_url: trailer.images.maximum_image_url,
          },
        },
        producers: {
          connect: producersData,
        },
        licensors: {
          connect: licensorsData,
        },
        studios: {
          connect: studiosData,
        },
        genres: {
          connect: genresData,
        },
      },
    });
    
    console.log("Anime inserted successfully:", anime);
  }
};

const fetchAndInsertData = async () => {
  try {
    let page = 1;
    let hasNextPage = true;
    
    while (hasNextPage) {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/?page=${page}`);
      const { data, pagination } = response.data;
      
      await processPage(data);
      
      hasNextPage = pagination.has_next_page;
      page++;
      await delay(5000);
      
    }
  } catch (error) {
    console.error("Error fetching and inserting data:", error);
  }
};

fetchAndInsertData();
