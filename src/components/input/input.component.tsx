import React, { InputHTMLAttributes, Fragment } from 'react';
import './input.styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { value } = props;
  return (
    <Fragment>
      <input className="input__text" {...props} value={value} />
    </Fragment>
  );
};
