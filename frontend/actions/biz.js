import * as APIUtilBiz from '../util/biz_util';
import {receiveErrors} from './session';

export const RECEIVE_ALL_BIZ = 'RECEIVE_ALL_BIZ';
export const RECEIVE_BIZ = 'RECEIVE_BIZ';

export const receiveAllBiz = (bizes) => ({
  type: RECEIVE_ALL_BIZ,
  bizes
});

export const receiveBiz = (payload) => ({
  type: RECEIVE_BIZ,
  payload
});

export const requestAllBiz = () => dispatch => APIUtilBiz.fetchBizes()
  .then(
    bizes => dispatch(receiveAllBiz(bizes))
  );

export const requestBiz = (bizId) => dispatch => APIUtilBiz.fetchBiz(bizId)
  .then(
    payload => dispatch(receiveBiz(payload))
  );

export const sendSMS = (bizId, phoneNumber) => dispatch => APIUtilBiz.sendSMS(bizId, phoneNumber)
  .then(
    confirmation => dispatch(receiveConfirmation(confirmation)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
