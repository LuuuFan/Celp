import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div className='main'>
    <Route path="/" component={NavBarContainer} />
    <Route path='/signup' component={SessionFormContainer} />
    <Route path='/login' component={SessionFormContainer} />
  </div>
);

export default App;
