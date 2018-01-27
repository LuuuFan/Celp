import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div className='main'>
    <Route path="/" component={NavBarContainer} />
  </div>
);

export default App;
