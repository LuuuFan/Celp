import React from 'react';
import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {requestUser} from '../../actions/user';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users,
  biz: state.entities.biz,
  reviews: state.entities.reviews,
  imgs: state.entities.imgs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (username) => dispatch(requestUser(username))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
