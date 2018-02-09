import React from 'react';

class HomeCenterActivities extends React.Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render(){

    return (
      <div className='home-center-recent-activity'>
        <h1>Recent Activity</h1>
          <ul>
            <div>
              <li className='tooltip'>Nearby<div className='tooltiptext'>under construction</div></li>
              <li className='tooltip'>Friends<div className='tooltiptext'>under construction</div></li>
              <li className='tooltip'>Following<div className='tooltiptext'>under construction</div></li>
            </div>
          </ul>
          <div className='home-center-activities group'>
            <div className='home-center-activity-item'></div>
            <div className='home-center-activity-item'></div>
            <div className='home-center-activity-item'></div>
            <div className='home-center-activity-item'></div>
            <div className='home-center-activity-item'></div>
          </div>
      </div>
    );
  }
}

export default HomeCenterActivities;
