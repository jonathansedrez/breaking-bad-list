import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { BASE_URL, QUERY_KEYS } from '../../resources/service';
import { Character } from './list.types';

const fetchCharacters = (name?: string): Promise<AxiosResponse<Character[]>> =>
  axios.get(`${BASE_URL}/characters`, {
    params: {
      name,
    },
  });

export const useFetchCharacters = (name: string) => {
  return useQuery([QUERY_KEYS.CHARACTERS, name], () => fetchCharacters(name));
};
