import React from 'react';
import SearchContainer from '../nav_bar/search_container';

class HomeWriteReview extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        <div className='home-write-review-header'>
          <h1>You Next Review Awaits</h1>
          <p>Review everything from your favorite burger to your dentist.</p>
          <SearchContainer />
        </div>
      </div>
    )
  }

}

export default HomeWriteReview;
