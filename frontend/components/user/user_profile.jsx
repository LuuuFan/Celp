import React from 'react';
import { Route } from 'react-router-dom';
import UserProfileNav from './user_profile_nav';
import UserProfileCenter from './user_profile_center';

class UserProfile extends React.Component{

  componentDidMount(){
    if (this.props.match.path == '/aboutme') {
      this.props.requestUser(this.props.currentUser.username);
    } else if (this.props.match.path == '/user/:username'){
      this.props.requestUser(this.props.match.params.username)
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.username && newProps.match.params.username !== this.props.match.params.username) {
      this.props.requestUser(newProps.match.params.username)
    } else if (this.props.match.params.username && newProps.match.path == '/aboutme') {
      this.props.requestUser(newProps.currentUser.username);
    }
  }

  render(){
    const {user, biz, reviews, imgs} = this.props;
    return(
      <div className='user-profile'>
        {user.username ?
          <div>
            <div className='user-show-header'>
              <div className='user-show'>
                <div className='user-show-avatar'>
                  <img src={user.avatar_url} />
                </div>
                <div className='user-summary-actions'>
                  <div className='user-summary'>
                    <h1>{user.username}</h1>
                    <p>San Francisco, CA</p>
                    <div>
                      <ul>
                        <li><i className="fas fa-star"></i>{user.review_num} Reviews</li>
                        <li><i className="fas fa-camera"></i>{user.img_num} Photos</li>
                      </ul>
                    </div>
                  </div>
                  <div className='user-actions'>
                  <ul>
                    <li className='tooltip'><i className="fas fa-camera-retro"></i><a>Add Profile Photos</a><div className='tooltiptext'>under construction</div></li>
                    <li className='tooltip'><i className="fas fa-id-card"></i><a>Update Your Profile</a><div className='tooltiptext'>under construction</div></li>
                    <li className='tooltip'><i className="fas fa-users"></i><a>Find Friends</a><div className='tooltiptext'>under construction</div></li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        : "" }
        {user ?
          <div className='user-show-detail'>
            <UserProfileNav user={user} />
            <div className='user-show-detail-center-summary'>
              <UserProfileCenter user={user} imgs={imgs} reviews={reviews} biz={biz}/>

              <div className='user-show-detail-summary'>
                <h2>About {user.username}</h2>
                <h3>Last 90 days</h3>
                <table>
                  <tbody>
                    <tr><th><i className="fas fa-star"></i></th><td><b>{user.review_num}</b> Reviews</td></tr>
                    <tr><th><i className="fas fa-camera-retro"></i></th><td><b>{user.img_num}</b> Photos</td></tr>
                    <tr><th><i className="fas fa-bookmark"></i></th><td><b>{user.bookmark_num}</b> Bookmarks</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        : ""}
      </div>
    );
  }
}

export default UserProfile;
