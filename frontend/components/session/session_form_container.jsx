import {connect} from 'react-redux';
import {createUser, createSession, clearErrors} from '../../actions/session';
import SessionFrom from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return ({
    formType,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/signup' ? createUser : createSession;
  return ({
    action: user =>  dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFrom);
