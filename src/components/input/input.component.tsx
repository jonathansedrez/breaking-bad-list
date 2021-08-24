import React, { InputHTMLAttributes } from 'react';
import './input.styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { value } = props;
  return <input className="input__text" {...props} value={value} />;
};
