import React, { useRef } from 'react';
import './presentation.styles.scss';
import presentationImage from '../../assets/images/presentation.jpg';

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
    <div className="presentation-contatiner" ref={presentationContainer}>
      <div className="presentation-inner-contatiner">
        <span className="presentation-title-container">
          <h1 className="presentation-title">Breaking</h1>
          <h1 className="presentation-title">Bad</h1>
          <button className="presentation-button" onClick={handleClickButton}>
            Let&apos;s cook
          </button>
        </span>
        <img src={presentationImage} alt="Walter White face" />
      </div>
    </div>
  );
};
