import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

import prisma from '../../../prisma/client';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  /*  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },*/
  theme: {
    colorScheme: 'dark', // "auto" | "dark" | "light"
    logo: '/images/logo/Logo-full.svg', // Absolute URL to image
  },
};
export default NextAuth(authOptions);
