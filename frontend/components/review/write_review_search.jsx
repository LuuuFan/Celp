import React from 'react';
import SearchContainer from '../nav_bar/search_container';
import HomeCenterActivities from '../home/home_center_activities';

class WriteReviewSearch extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        <div className='write-review-search-banner'>
          <div className='write-review-search-header'>
            <div className='write-review-search'>
              <h1>You Next Review Awaits</h1>
              <p>Review everything from your favorite burger to your dentist.</p>
              <SearchContainer />
            </div>
            <div className='write-review-search-img-container'>
              <img src='https://s3-media3.fl.yelpcdn.com/assets/2/www/img/6010a06f69a3/writeareview/rating_building.png'/>
            </div>
          </div>
        </div>
        <div className='write-review-temp'>
          <HomeCenterActivities />
        </div>
      </div>
    )
  }

}

export default WriteReviewSearch;
