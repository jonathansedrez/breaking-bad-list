import React from 'react';

import { ICardImage } from './cardImage.types';
import './cardImage.styles.scss';

export const CardImage: React.FC<ICardImage> = (props: ICardImage) => {
  const { id, image, name, onClick } = props;

  return (
    <div
      className="card-image__wrapper"
      key={id}
      role="contentinfo"
      onClick={onClick}
    >
      <img src={image.src} alt={image.alt} className="card-image__image" />
      <div>
        <p className="card-image__text">{name}</p>
      </div>
    </div>
  );
};
