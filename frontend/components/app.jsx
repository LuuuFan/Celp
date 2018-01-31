import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from './home/home';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={Home} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
  </div>
);

export default App;
