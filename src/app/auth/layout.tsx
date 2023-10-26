'use client';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/' });
  };

  const handleDiscordLogin = () => {
    signIn('discord', { callbackUrl: '/' });
  };

  return (
    <>
      <button onClick={handleGoogleLogin}>Google</button>
      <button onClick={handleDiscordLogin}>Discord</button>
      {children}
    </>
  );
}
