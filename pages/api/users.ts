import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const emailQuery = req.query.email;
  const idQuery = req.query.id;

  let email: string | undefined = undefined;
  let id: string | undefined = undefined;

  if (Array.isArray(emailQuery)) {
    email = emailQuery[0]; // Prend le premier élément si c'est un tableau
  } else {
    email = emailQuery;
  }

  if (Array.isArray(idQuery)) {
    id = idQuery[0]; // Prend le premier élément si c'est un tableau
  } else {
    id = idQuery;
  }

  try {
    let user;

    if (email) {
      user = await prisma.user.findUnique({
        where: { email: email },
      });
    } else if (id) {
      user = await prisma.user.findUnique({
        where: { id: id },
      });
    }

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
};

export default handler;
