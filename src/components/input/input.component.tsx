import React, { InputHTMLAttributes } from 'react';
import './input.styles.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const Input: React.FC<IInput> = (props: IInput) => {
  const { value } = props;
  return <input className="input__text" {...props} value={value} />;
};
