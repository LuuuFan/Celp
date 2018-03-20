import * as APIUtilLike from '../util/like_util';
import {receiveErrors} from './session';

export const createImgLike = (imgId) => APIUtilLike.createImgLike(imgId)
  .then(
    like => dispatch(),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteImgLike = (imgId) => APIUtilLike.deleteImgLike(imgId)
  .then(
    like => dispatch(),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
