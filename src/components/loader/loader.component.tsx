import React, { Fragment } from 'react';
import './loader.styles.scss';

interface ILoader {
  isVisible: boolean;
  size?: 'large' | 'small';
}

export const Loader: React.FC<ILoader> = (props: ILoader) => {
  const { isVisible, size = 'large' } = props;
  return (
    <Fragment>
      {isVisible ? (
        <div className={`loader ${size === 'small' && 'loader--small'}`} />
      ) : null}
    </Fragment>
  );
};
