import React from 'react';
import {connect} from 'react-redux';
import BizIndex from './biz_index';
import {requestSearch, requestCategory} from '../../actions/search';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
  bizes: Object.values(state.entities.biz)
});

const mapDispatchToProps = (dispatch) => ({
  requestSearch: (key, loc) => dispatch(requestSearch(key, loc)),
  requestCategory: (cat, num) => dispatch(requestCategory(cat, num))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BizIndex));
