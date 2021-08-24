import React, { useRef } from 'react';
import './presentation.styles.scss';

import presentationImage from '../../assets/images/presentation-gif.gif';

export const Presentation: React.FC = () => {
  const presentationContainer = useRef<HTMLDivElement>(null);

  const handleClickButton = () => {
    const presentationHeight = presentationContainer.current?.offsetHeight;
    window.scrollTo({
      top: presentationHeight || 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="presentation__contatiner" ref={presentationContainer}>
      <div className="presentation__contatiner-image">
        <img
          src={presentationImage}
          alt="imagem apresentação"
          className="presentation__image"
        />
      </div>
      <button className="presentation__button" onClick={handleClickButton}>
        Let&apos;s cook
      </button>
    </div>
  );
};
