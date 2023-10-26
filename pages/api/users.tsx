import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../prisma/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const emailQuery = req.query.email;
  let email: string | undefined = undefined;

  if (Array.isArray(emailQuery)) {
    email = emailQuery[0]; // Prend le premier élément si c'est un tableau
  } else {
    email = emailQuery;
  }

  if (email) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send(error);
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(404).send('Id is required');
  }
};

export default handler;
