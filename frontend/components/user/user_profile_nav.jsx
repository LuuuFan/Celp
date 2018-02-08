import React from 'react';

class UserProfileNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {className: ''};
  }

  render(){
    const {user} = this.props;
    return(
      <div className='user-show-detail-nav'>
        <h2>{user.username}'s Profile</h2>
        <ul>
          <li><i className="fas fa-user"></i>Profile Overview</li>
          <li><i className="fas fa-star"></i>Reviews</li>
          <li><i className="fas fa-camera"></i>Business Photos</li>
          <li><i className="fas fa-bookmark"></i>Bookmarks</li>
        </ul>
      </div>
    );
  }
}

export default UserProfileNav;
