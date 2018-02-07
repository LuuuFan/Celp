import React from 'react';
import Search from './search';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestSearch} from '../../actions/search';

const mapDispatchToProps = (dispatch,ownProps) => ({
  requestSearch: (key, loc) => dispatch(requestSearch(key, loc))
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
