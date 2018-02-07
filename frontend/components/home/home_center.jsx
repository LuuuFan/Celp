import React from 'react';
import HomeCenterItem from './home_center_item';
import {Link} from 'react-router-dom';

class HomeCenter extends React.Component{

  render(){
    const {bizes} = this.props;
    return(
      <div className='home-center'>
        <div className='home-center-restaurant-location'>
          <h1>Celp San Francisco</h1>
          <ul>
            <li>Daly City</li>
            <li>South San Francisco</li>
            <li>San Burno</li>
            <li>Millbare</li>
            <li>Burlingame</li>
            <li>San Mateo</li>
            <li>Foster City</li>
            <li>Belmont</li>
            <li>San Carlos</li>
            <li>Redwood City</li>
          </ul>
          {bizes.length > 0 ?
            <div className='home-center-restaurant-samples'>
              <h2>Hot & New Businesses</h2>
              <div>
                {bizes.map(biz=><HomeCenterItem key={biz.id} biz={biz} />)}
              </div>
              <Link to='/search?cat=Restaurant'>See more hot and new businesses</Link>
            </div>
           : ""}
        </div>
        <div className='home-center-recent-activity'>
          <h1>Recent Activity</h1>
            <ul>
              <div>
                <li>Nearby</li>
                <li>Friends</li>
                <li>Following</li>
              </div>
            </ul>
        </div>
      </div>
    );
  }
}

export default HomeCenter;
