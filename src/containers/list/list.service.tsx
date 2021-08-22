import axios, { AxiosResponse } from 'axios';

import { BASE_URL } from '../../resources/service';
import { Character } from './list.types';

export const fetchAllCharacters: Promise<AxiosResponse<Character[]>> =
  axios.get(`${BASE_URL}/characters`);
