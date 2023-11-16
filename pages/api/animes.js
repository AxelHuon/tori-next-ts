import prisma from '../../prisma/client';

const handler = async (req, res) => {
  const mal_id = req.query.id ? Number(req.query.id) : null;
  if (mal_id) {
    try {
      const anime = await prisma.anime.findUnique({
        where: { mal_id: mal_id },
        include: {
          images: true,
          trailer: true,
          producers: true,
          licensors: true,
          studios: true,
          genres: true,
        },
      });
      if (anime) {
        res.status(200).json({ anime });
      } else {
        res.status(404).send('Anime not found');
      }
    } catch (error) {
      res.status(500).send(error);
    } finally {
      await prisma.$disconnect();
    }
  } else {
    const page = Number(req.query.page) || 1;
    const resultsPerPage = 25;
    const skip = (page - 1) * resultsPerPage;
    const search = req.query.search || '';
    const byPopularity = req.query.byPopularity === 'true';
    const idProducers = req.query.idProducers ? Number(req.query.idProducers) : null;
    const idLicensors = req.query.idLicensors ? Number(req.query.idLicensors) : null;
    const idStudios = req.query.idStudios ? Number(req.query.idStudios) : null;
    const idGenres = req.query.idGenres ? Number(req.query.idGenres) : null;

    try {
      const animes = await prisma.anime.findMany({
        take: resultsPerPage,
        skip,
        orderBy: byPopularity ? { popularity: 'asc' } : { favorites: 'desc' },
        include: {
          images: true,
          trailer: true,
          producers: true,
          licensors: true,
          studios: true,
          genres: true,
        },
        where: {
          ...(search
            ? {
                OR: [
                  {
                    title: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                  {
                    title_english: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                  {
                    title_japanese: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                ],
              }
            : {}),
          producers: idProducers ? { some: { id: idProducers } } : undefined,
          licensors: idLicensors ? { some: { id: idLicensors } } : undefined,
          studios: idStudios ? { some: { id: idStudios } } : undefined,
          genres: idGenres ? { some: { id: idGenres } } : undefined,
        },
      });
      const totalAnimes = await prisma.anime.count({
        where: {
          ...(search
            ? {
                OR: [
                  {
                    title: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                  {
                    title_english: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                  {
                    title_japanese: {
                      contains: search,
                      mode: 'insensitive',
                    },
                  },
                ],
              }
            : {}),
          producers: idProducers ? { some: { id: idProducers } } : undefined,
          licensors: idLicensors ? { some: { id: idLicensors } } : undefined,
          studios: idStudios ? { some: { id: idStudios } } : undefined,
          genres: idGenres ? { some: { id: idGenres } } : undefined,
        },
      });
      const totalPages = Math.ceil(totalAnimes / resultsPerPage);
      res.status(200).json({
        animes,
        pagination: {
          total: totalAnimes,
          currentPage: page,
          totalPages,
          hasNextPage: page < totalPages,
        },
      });
    } catch (error) {
      res.status(500).send(error);
    } finally {
      await prisma.$disconnect();
    }
  }
};

export default handler;
