import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface IDetails extends RouteComponentProps {
  characterId?: string;
}

export const Details: React.FC<IDetails> = (props: IDetails) => {
  const { characterId } = props;

  return <div>details {characterId}</div>;
};
