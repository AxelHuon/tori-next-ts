import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../prisma/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const studios = await prisma.studio.findMany();
    if (studios) {
      res.status(200).json({ data: studios });
    } else {
      res.status(404).send('studios not found');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  } finally {
    await prisma.$disconnect();
  }
};

export default handler;
