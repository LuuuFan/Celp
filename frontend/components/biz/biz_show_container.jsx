import React from 'react';
import {connect} from 'react-redux';
import BizShow from './biz_show';

const mapStateToProps = (state, ownProps) => ({
  biz: state.entities
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BizShow);
