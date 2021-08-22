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
  onClick: () => void;
}
export const CardImage: React.FC<ICardImage> = (props: ICardImage) => {
  const { id, image, name, onClick } = props;

  return (
    <Link to={`details/${id}`}>
      <div className="card-image-wrapper" onClick={onClick}>
        <img src={image.src} alt={image.alt} className="card-image" />
        <div>
          <p className="card-image-text">{name}</p>
        </div>
      </div>
    </Link>
  );
};
