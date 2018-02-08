import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import HomeContainer from './home/home_container';
import NotFound from './error_handle/not_found';
import BizIndexContainer from './biz/biz_index_container';
import BizShowContainer from './biz/biz_show_container';
import AddImgContainer from './img/add_img_container';
import BizImgIndexContainer from './img/biz_img_index_container';
import Footer from './footer';
import WriteReviewContainer from './review/write_review_container';
import UserProfileContainer from './user/user_profile_container';

const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <Switch>
      <Route exact path='/' />
      <Route path='/signup' />
      <Route path='/login' />
      <Route exact path='/aboutme'  component={UserProfileContainer}/>
      <Route exact path='/user/:username' component={UserProfileContainer} />
      <Route path='/search' component={BizIndexContainer} />
      <Route exact path='/biz/:bizId' component={BizShowContainer} />
      <Route exact path='/biz/:bizId/photos' component={BizImgIndexContainer} />
      <ProtectedRoute exact path='/biz/:bizId/addphoto' component={AddImgContainer} />
      <ProtectedRoute exact path='/update_review/biz/:bizId' component={WriteReviewContainer} />
      <ProtectedRoute exact path='/write_review/biz/:bizId' component={WriteReviewContainer} />
      <Route render={()=>(<Redirect to='/' />)} />
    </Switch>
    <Switch>
      <Route component={Footer}/>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />

// <Route exact path='/biz' component={BizIndexContainer} />
