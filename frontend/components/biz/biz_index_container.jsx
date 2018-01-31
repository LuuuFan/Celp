import React from 'react';
import {connect} from 'react-redux';
import BizIndex from './biz_index';
import {requestAllBiz} from '../../actions/biz';

const mapStateToProps = (state) => ({
  bizes: Object.values(state.entities.biz)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllBiz: () => dispatch(requestAllBiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(BizIndex);
