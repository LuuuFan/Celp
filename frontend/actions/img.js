import * as APIUtilImg from '../util/img_util';

export const RECEIVE_ALL_IMG = 'RECEIVE_ALL_IMG';
export const RECEIVE_IMG = 'RECEIVE_IMG';
export const REMOVE_IMG = 'REMOVE_IMG';

export const receiveAllImg = (imgs) => ({
  type: RECEIVE_ALL_IMG,
  imgs
});

export const receiveImg = (img) => ({
  type: RECEIVE_IMG,
  img
});

export const removeImg = (imgId) => ({
  type: REMOVE_IMG,
  imgId
});

export const requestAllImg = (id) => dispatch => APIUtilImg.requestAllImg(id)
  .then(
    imgs => dispatch(receiveAllImg(imgs))
  );

export const requestImg = (imgId) => dispatch => APIUtilImg.requestImg(imgId)
  .then(
    img => dispatch(receiveImg(img))
  );
export const createImg = (bizId, img) => dispatch => APIUtilImg.createImg(bizId, img)
  .then(
    img => dispatch(receiveImg(img))
  );

export const deleteImg = (imgId) => dispatch => APIUtilImg.deleteImg(imgId)
  .then(
    img => dispatch(removeImg(img))
  );
