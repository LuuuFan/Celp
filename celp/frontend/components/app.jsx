import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupLoginContainer from './session/signup_login_container';

const App = () => (
  <div className='main'>
    <Route path="/" component={NavBarContainer} />
    <Route path='/signup' component={SignupLoginContainer} />
    <Route path='/login' component={SignupLoginContainer} />
  </div>
);

export default App;
