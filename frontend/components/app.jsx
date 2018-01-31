import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HomeContainer from './home/home_container';
import NotFound from './error_handle/not_found';
import BizIndexContainer from './biz/biz_index_container';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <Switch>
      <Route path='/biz' component={BizIndexContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
