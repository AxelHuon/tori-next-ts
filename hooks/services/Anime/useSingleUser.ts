import { fetcherSingleItem } from '@/utils/fetcher';
import useSWR from 'swr';

export interface ApiReponseSingleUser {
  user: UserType;
}

export const useSingleUser = (
  email?: string | null | undefined,
  id?: string | null | undefined,
) => {
  let url = '/api/users?';

  if (id) {
    url += `id=${id}`;
  } else if (email) {
    url += `email=${email}`;
  }else{
    return {
      user:null,
      error:null
    }
  }

  const { data, error } = useSWR<ApiReponseSingleUser>(url, fetcherSingleItem);

  return {
    user: data?.user,
    error,
  };
};
