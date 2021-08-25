import React, { useState, useRef, Fragment } from 'react';
import { useNavigate } from '@reach/router';

import { useFetchCharacters } from './list.service';
import { CardImage, Input, Loader } from '../../components';
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
    <div className="list-image__wrapper">
      {/* {isError && <div>Erro</div>} */}

      <Loader isVisible={isLoading} />

      <div className="list-image__phrase-container">
        {isSuccess && (
          <Fragment>
            <h2 className="list-image__phrase">SAY MY NAME...</h2>
            <Input
              value={filterInput}
              onChange={({ target: { value } }) => setFilterInput(value)}
              placeholder="ex: Walter White"
            />
          </Fragment>
        )}

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
        {isFetchingNextPage && (
          <span className="list-image__footer__load-more">
            <p className="list-image__footer__text">Carregando mais...</p>
            <Loader isVisible={isFetchingNextPage} size="small" />
          </span>
        )}

        {!hasNextPage && !isLoading && (
          <p className="list-image__footer__text">
            Todos persononagens carregados :)
          </p>
        )}
      </div>
    </div>
  );
};
