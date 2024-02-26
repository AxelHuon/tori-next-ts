import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const groups = await prisma.group.findMany({
      where: { users: req.query.id },
    });
    if (groups) {
      res.status(200).json({ data: groups });
    } else {
      res.status(404).send('licensors not found');
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
