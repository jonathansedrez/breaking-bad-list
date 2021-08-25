import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { BASE_URL, QUERY_KEYS } from '../../service/service';
import { Character } from '../../service/types';

export const CHARACTERS_PER_PAGE = 12;

const fetchCharacterById = (id: string): Promise<AxiosResponse<Character[]>> =>
  axios.get(`${BASE_URL}/characters/${id}`, {
    params: {
      id,
    },
  });

export const useFetchCharacterDetail = (id: string) => {
  return useQuery(QUERY_KEYS.CHARACTER_DETAIL, () => fetchCharacterById(id));
};
