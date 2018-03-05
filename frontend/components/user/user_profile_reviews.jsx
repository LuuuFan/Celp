import React from 'react';

class UserProfileReviews extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    const {user, imgs, reviews, biz} = this.props;
    return(
      <div className='user-profile-reviews'>
        <h1>Reviews</h1>
        
      </div>
    );
  }
}

export default UserProfileReviews;
