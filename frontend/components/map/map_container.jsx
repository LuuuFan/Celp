import React from 'react';
import {connect} from 'react-redux';
import Map from './map';


const mapStateToProps = (state) => ({
  bizes: Object.values(state.entities.biz)
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
