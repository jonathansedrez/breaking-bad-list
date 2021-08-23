import React, { useState, useRef } from 'react';

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

  useIntersectionObserver({
    target: footerRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage || true,
  });

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
          {isSuccess &&
            data?.pages.map((page) => (
              <React.Fragment key={page.config.params.offset}>
                {page.data.map((character) => (
                  <CardImage
                    key={character.char_id}
                    id={character.char_id}
                    name={character.name}
                    image={{ src: character.img, alt: character.name }}
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
