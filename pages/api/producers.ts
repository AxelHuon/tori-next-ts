import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const producers = await prisma.producer.findMany();
    if (producers) {
      res.status(200).json({ data: producers });
    } else {
      res.status(404).send("producers not found");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
