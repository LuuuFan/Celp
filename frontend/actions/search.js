import * as APIUtilSearch from '../util/search_util';
import {receiveAllBiz} from './biz';

export const requestSearch = (key, loc) => dispatch => APIUtilSearch.requestSearch(key, loc)
  .then(bizes => dispatch(receiveAllBiz(bizes)));


  export const requestCategory = (cat) => dispatch => APIUtilSearch.requestCategory(cat)
    .then(bizes => dispatch(receiveAllBiz(bizes)));
