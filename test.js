const cr = require('crunchyroll.js');

(async () => {
  // Login to crunchyroll
  await cr.login('axelhuonpro@gmail.com', 'zkj9fvh3qcm6bfe_WER');

  const search = await cr.search('one piece');
  const id = search.items[1].items[0].id;
  console.log(id);

  const anime = await cr.getAnime(id);
  const { items: seasons } = await cr.getSeasons(anime.id);
  console.log(`${anime.title} Seasons:`);
  for (season of seasons) {
    const episodes = await cr.getEpisodes(season.id);
    console.log(`${season.title}: ${episodes.total} eps`);
  }
})();
