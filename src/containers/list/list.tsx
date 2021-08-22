import React from 'react';
import { useQuery } from 'react-query';

import { fetchAllCharacters } from './list.service';
import { CardImage } from '../../components';
import './list.styles.scss';

export const List: React.FC = () => {
  const { isLoading, isError, data } = useQuery(
    'characters',
    () => fetchAllCharacters
  );

  return (
    <div>
      {isLoading && <div>CARREGANDO...</div>}
      {isError && <div>Erro</div>}

      <div className="list-image-wrapper">
        <div className="list-image-innerWrapper">
          {data?.data &&
            data?.data?.map((character) => (
              <CardImage
                key={character.char_id}
                id={character.char_id}
                name={character.name}
                onClick={() => console.log('character.name', character.name)}
                image={{ src: character.img, alt: character.name }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
