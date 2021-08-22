import React, { Fragment } from 'react';
import { List, Presentation } from '../';
import { RouteComponentProps } from '@reach/router';

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Fragment>
      <Presentation />
      <List />
    </Fragment>
  );
};
