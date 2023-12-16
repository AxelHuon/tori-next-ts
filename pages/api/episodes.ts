import type { NextApiRequest, NextApiResponse } from 'next';

const cr = require('crunchyroll.js');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { title, idSeason } = req.query;
  try {
    if (title){
    let idSeasonFilter = idSeason ? parseInt(idSeason.toString()) : 0
    await cr.login('axelhuonpro@gmail.com', 'zkj9fvh3qcm6bfe_WER');

    const search = await cr.search(title);
    const id = search.items[0].items[0].id;

    const anime = await cr.getAnime(id);

    if (anime.title.toLowerCase() === title.toString().toLowerCase()) {
      const { items: seasons } = await cr.getSeasons(anime.id, 0,1);
      let episodesData: any = {
        title: anime.title,
        seasonsTitles: [],
        episodes: [],
      };
      for (let i = 0; i< seasons.length; i++){
        episodesData.seasonsTitles.push(seasons[i].title)
      }
      const seasonsEpisodes = await cr.getEpisodes(seasons[idSeasonFilter].id);
      episodesData.episodes.push(seasonsEpisodes.items);
      res.status(200).json(episodesData);
    } else {
      return res.status(400).json({ message: 'not on crunchyroll' });
    }
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
