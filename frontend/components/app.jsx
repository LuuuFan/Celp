import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from './home/home';

const App = () => (
  <div className='main'>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
  </div>
);

export default App;


// <Route exact path='/' component={Home} />
