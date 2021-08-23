import axios, { AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';

import { BASE_URL, QUERY_KEYS } from '../../service/service';
import { Character } from './list.types';

export const CHARACTERS_PER_PAGE = 12;

const fetchCharacters = (
  offset: number,
  name?: string
): Promise<AxiosResponse<Character[]>> =>
  axios.get(`${BASE_URL}/characters`, {
    params: {
      limit: CHARACTERS_PER_PAGE,
      offset,
      name,
    },
  });

export const useFetchCharacters = (name: string) => {
  return useInfiniteQuery(
    [QUERY_KEYS.CHARACTERS, name],
    async ({ pageParam = 0 }) => fetchCharacters(pageParam, name),
    {
      getNextPageParam: (lastPage, allGroups) => {
        const totalCharacters = allGroups.reduce(
          (allcharactersCounter, currentPage) => {
            return allcharactersCounter + currentPage.data.length;
          },
          0
        );
        return !lastPage.data.length ? undefined : totalCharacters;
      },
    }
  );
};
