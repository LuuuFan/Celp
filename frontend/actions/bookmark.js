import * as APIUtilBookmark from '../util/bookmark_util';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const receiveBookmark = (payload) => ({
  type: 'RECEIVE_BOOKMARK',
  biz: payload.biz
});

export const removeBookmark = (payload) => ({
  type: 'REMOVE_BOOKMARK',
  biz: payload.biz
});

export const createBookmark = bizId => dispatch => APIUtilBookmark.createBookmark(bizId)
  .then(
    payload => dispatch(receiveBookmark(payload))
  );

  export const deleteBookmark = bizId => dispatch => APIUtilBookmark.deleteBookmark(bizId)
    .then(
      payload => dispatch(removeBookmark(payload))
    );
