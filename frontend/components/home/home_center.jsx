import React from 'react';
import HomeCenterItem from './home_center_item';
import {Link} from 'react-router-dom';
import HomeCenterActivities from './home_center_activities';

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
            <Link  to='/search?key=&loc=San+Bruno'><li>San Bruno</li></Link>
            <Link  to='/search?key=&loc=Millbrae'><li>Millbrae</li></Link>
            <Link  to='/search?key=&loc=Burlingame'><li>Burlingame</li></Link>
            <Link  to='/search?key=&loc=San+Mateo'><li>San Mateo</li></Link>
            <Link  to='/search?key=&loc=Foster+City'><li>Foster City</li></Link>
            <Link  to='/search?key=&loc=Belmont'><li>Belmont</li></Link>
            <Link  to='/search?key=&loc=Redwood+City'><li>Redwood City</li></Link>
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
        <HomeCenterActivities />
      </div>
    );
  }
}

export default HomeCenter;
