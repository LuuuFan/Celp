import {RECEIVE_CONFIRMATION, CLEAR_NOTIFICATION} from '../actions/notification';

const notificationReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return action.confirmation

    case CLEAR_NOTIFICATION:
      return {};

    default:
      return state;

  }
};

export default notificationReducer;
