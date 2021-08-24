import React, { useState, useRef } from 'react';
import { useNavigate } from '@reach/router';

import { useFetchCharacters } from './list.service';
import { CardImage, Input } from '../../components';
import { useDebounce, useIntersectionObserver } from '../../hooks';
import './list.styles.scss';

export const List: React.FC = () => {
  const [filterInput, setFilterInput] = useState('');

  const filterInputDebounce = useDebounce(filterInput);
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFetchCharacters(filterInputDebounce);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useIntersectionObserver({
    target: footerRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage || true,
  });

  const handleNavigate = (characterId: string) => {
    navigate(`/${characterId}`);
  };

  return (
    <div>
      {/* {isLoading && <div>CARREGANDO...</div>}
      {isError && <div>Erro</div>} */}

      <div className="list-image__phrase-container">
        <h2 className="list-image__phrase">SAY MY NAME...</h2>
        <Input
          value={filterInput}
          onChange={({ target: { value } }) => setFilterInput(value)}
          placeholder="ex: Walter White"
        />
      </div>

      <div className="list-image__wrapper">
        <div className="list-image-innerWrapper">
          {isSuccess &&
            data?.pages.map((page) => (
              <React.Fragment key={page.config.params.offset}>
                {page.data.map((character) => (
                  <CardImage
                    key={character.char_id}
                    id={character.char_id}
                    name={character.name}
                    image={{ src: character.img, alt: character.name }}
                    onClick={() => handleNavigate(character.char_id)}
                  />
                ))}
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="list-image__footer" ref={footerRef}>
        <p>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
        </p>
      </div>
    </div>
  );
};
