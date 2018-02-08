import * as APIUtilUser from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (payload) => {
  let reviews = payload.reviews ? payload.reviews : {};
  let imgs = payload.imgs ? payload.imgs : {};
  let biz = payload.biz ? payload.biz : {};
  return ({
    type: RECEIVE_USER,
    user: payload.user,
    reviews: reviews,
    imgs: imgs,
    biz: biz
});
}


export const requestUser = (username) => dispatch => APIUtilUser.requestUser(username)
  .then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
