import React from 'react';
import {connect} from 'react-redux';
import BizIndex from './biz_index';

const mapStateToProps = (state) => ({
  bizes: Object.values(state.entities.biz)
});

export default connect(mapStateToProps, null)(BizIndex);
