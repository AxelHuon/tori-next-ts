import { fetcherSingleItem } from '@/utils/fetcher';
import useSWR from 'swr';

export interface ApiReponseSingleUser {
  user: UserType;
}
export const useSingleUser = (email: string) => {
  const { data, error } = useSWR<ApiReponseSingleUser>(
    `/api/users?email=${email}`,
    fetcherSingleItem,
  );

  return {
    user: data?.user,
    error,
  };
};
