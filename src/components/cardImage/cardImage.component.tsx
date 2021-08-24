import React from 'react';

import { ICardImage } from './cardImage.types';
import './cardImage.styles.scss';

export const CardImage: React.FC<ICardImage> = (props: ICardImage) => {
  const { id, image, name, onClick } = props;

  return (
    <div
      className="card-image-wrapper"
      key={id}
      role="contentinfo"
      onClick={onClick}
    >
      <img src={image.src} alt={image.alt} className="card-image" />
      <div>
        <p className="card-image-text">{name}</p>
      </div>
    </div>
  );
};
