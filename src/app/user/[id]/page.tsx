'use client';
import { useSingleUser } from '@/hooks/services/Anime/useSingleUser';
import React from 'react';

interface UserPageProps {
  params: { id: string };
}

const UserPage: React.FC<UserPageProps> = ({ params }) => {
  const { user, error } = useSingleUser(null, params.id);

  return <div>{user?.id}</div>;
};

export default UserPage;
