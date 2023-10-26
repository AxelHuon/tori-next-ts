'use client';
import { useSingleUser } from '@/hooks/services/Anime/useSingleUser';
import React, { useEffect, useState } from 'react';

interface UserPageProps {
  params: { email: string };
}

const UserPage: React.FC<UserPageProps> = ({ params }) => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (params.email) {
      setEmail(decodeURIComponent(params.email));
    }
  }, [params.email]);

  const { user, error } = useSingleUser(params.email);

  return <div>{user?.id}</div>;
};

export default UserPage;
