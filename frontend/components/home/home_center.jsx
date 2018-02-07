import React from 'react';
import HomeCenterItem from './home_center_item';

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
                {bizes.map(biz=><HomeCenterItem key={biz.id} biz={biz}/>)}
              </div>
            </div>
           : ""}
        </div>
      </div>
    );
  }
}

export default HomeCenter;
