import type { NextApiRequest, NextApiResponse } from 'next';

const cr = require('crunchyroll.js');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.query;
  try {
    if (title){
    await cr.login('axelhuonpro@gmail.com', 'zkj9fvh3qcm6bfe_WER');

    const search = await cr.search(title);
    const id = search.items[0].items[0].id;

    const anime = await cr.getAnime(id);

    if (anime.title.toLowerCase() === title.toString().toLowerCase()) {
      const { items: seasons } = await cr.getSeasons(anime.id);
      let episodesData: any = {
        title: anime.title,
        countSeasons: seasons.length,
        episodes: [],
      };
      const seasonsEpisodes = await cr.getEpisodes(seasons[0].id);
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
