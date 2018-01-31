import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HomeContainer from './home/home_container';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
  </div>
);

export default App;
