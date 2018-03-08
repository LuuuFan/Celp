import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserSettings from './user_settings';
import {updateUser, clearErrors} from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
