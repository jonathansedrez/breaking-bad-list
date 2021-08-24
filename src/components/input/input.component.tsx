import React, { InputHTMLAttributes, Fragment } from 'react';
import './input.styles.scss';

export const Input: React.FC = (
  props: InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <Fragment>
      <input className="input__text" {...props} />
    </Fragment>
  );
};
