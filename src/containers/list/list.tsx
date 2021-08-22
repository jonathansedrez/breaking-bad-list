import React, { useState } from 'react';

import { useFetchCharacters } from './list.service';
import { CardImage, Input } from '../../components';
import { useDebounce } from '../../hooks';
import './list.styles.scss';

export const List: React.FC = () => {
  const [filterInput, setFilterInput] = useState('');

  const filterInputDebounce = useDebounce(filterInput);
  const { isLoading, isError, data } = useFetchCharacters(filterInputDebounce);

  return (
    <div>
      {isLoading && <div>CARREGANDO...</div>}
      {isError && <div>Erro</div>}

      <Input
        value={filterInput}
        onChange={({ target: { value } }) => setFilterInput(value)}
      />

      <div className="list-image-wrapper">
        <div className="list-image-innerWrapper">
          {data?.data &&
            data?.data?.map((character) => (
              <CardImage
                key={character.char_id}
                id={character.char_id}
                name={character.name}
                image={{ src: character.img, alt: character.name }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
