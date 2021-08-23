import React from 'react';
import { Router } from '@reach/router';
import { Home, Details } from './containers';

export const Routes: React.FC = (props) => {
  return (
    <Router {...props}>
      <Home path="/" />
      <Details path="/:characterId" />
    </Router>
  );
};
