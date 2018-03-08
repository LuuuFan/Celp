import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserSettings from './user_settings';
import {updateUser} from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser

});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
