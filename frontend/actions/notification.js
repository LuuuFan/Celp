
export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION
});

export const receiveConfirmation = (confirmation) => ({
  type: RECEIVE_CONFIRMATION,
  confirmation
});
