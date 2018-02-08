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
            <Link to='/search?key=&loc=daly+city'><li>Daly City</li></Link>
            <Link  to='/search?key=&loc=South+San+Francisco'><li>South San Francisco</li></Link>
            <Link  to='/search?key=&loc=San+Burno'><li>San Burno</li></Link>
            <Link  to='/search?key=&loc=Millbare'><li>Millbare</li></Link>
            <Link  to='/search?key=&loc=Burlingame'><li>Burlingame</li></Link>
            <Link  to='/search?key=&loc=San+Mateo'><li>San Mateo</li></Link>
            <Link  to='/search?key=&loc=Foster+City'><li>Foster City</li></Link>
            <Link  to='/search?key=&loc=Belmont'><li>Belmont</li></Link>
            <Link  to='/search?key=&loc=Redwood=City'><li>Redwood City</li></Link>
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
