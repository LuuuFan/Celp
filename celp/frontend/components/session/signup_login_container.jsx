import {connect} from 'react-redux';
import {createUser, createSession} from '../../actions/session';
import SignupLogin from './signup_login';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return ({
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/signup' ? createUser : createSession;
  return ({
    action: user =>  dispatch(action(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupLogin);
