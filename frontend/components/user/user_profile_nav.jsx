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
          <li className='tooltip'><i className="fas fa-star"></i>Reviews<div className='tooltiptext'>under construction</div></li>
          <li className='tooltip'><i className="fas fa-camera"></i>Business Photos<div className='tooltiptext'>under construction</div></li>
          <li className='tooltip'><i className="fas fa-bookmark"></i>Bookmarks<div className='tooltiptext'>under construction</div></li>
        </ul>
      </div>
    );
  }
}

export default UserProfileNav;
