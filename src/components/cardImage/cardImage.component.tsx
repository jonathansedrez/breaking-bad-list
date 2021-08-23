import React from 'react';
import { Link } from '@reach/router';

import './cardImage.styles.scss';

interface Image {
  src: string;
  alt: string;
}

interface ICardImage {
  id: string;
  image: Image;
  name: string;
}
export const CardImage: React.FC<ICardImage> = (props: ICardImage) => {
  const { id, image, name } = props;

  return (
    <Link to={`/${id}`}>
      <div className="card-image-wrapper">
        <img src={image.src} alt={image.alt} className="card-image" />
        <div>
          <p className="card-image-text">{name}</p>
        </div>
      </div>
    </Link>
  );
};
