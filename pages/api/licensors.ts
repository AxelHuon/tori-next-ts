import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const licensors = await prisma.licensor.findMany();
    if (licensors) {
      res.status(200).json({ data: licensors });
    } else {
      res.status(404).send("licensors not found");
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
