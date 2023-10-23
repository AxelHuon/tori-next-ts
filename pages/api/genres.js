import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    if (genres) {
      res.status(200).json({ data: genres });
    } else {
      res.status(404).send("Anime not found");
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await prisma.$disconnect();
  }
};
