import * as APIUtilSession from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
// });

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createUser = (user) => dispatch => APIUtilSession.createUser(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );

export const createSession = (user) => dispatch => APIUtilSession.createSession(user)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );

  export const logout = () => dispatch => APIUtilSession.deleteSession()
    .then(
      user => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors))
    );
