import React from 'react';
import UserProfileCenter from './user_profile_center';
import UserProfileReviews from './user_profile_reviews';
import UserProfileBizPhotos from './user_profile_biz_photos';
import UserProfileBookmarks from './user_profile_bookmarks';


class UserProfileNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {listName: 'UserProfileCenter'};
  }

  handleClick(listName){
    this.setState({listName: listName});
  }

  render(){
    const {user, imgs, reviews, biz} = this.props;
    return(
      <div className='user-show-detail'>
        <div className='user-show-detail-nav'>
          {user.username ?
          <div>
            <h2>{`${user.username}'s Profile`}</h2>
            <ul>
              <li className={this.state.listName == 'UserProfileCenter' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('UserProfileCenter')}><i className="fas fa-user"></i>Profile Overview</li>
              <li className={this.state.listName == 'UserProfileReviews' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('UserProfileReviews')}><i className="fas fa-star"></i>Reviews</li>
              <li className={this.state.listName == 'UserProfileBizPhotos' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('UserProfileBizPhotos')}><i className="fas fa-camera"></i>Business Photos</li>
              <li className={this.state.listName == 'UserProfileBookmarks' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('UserProfileBookmarks')}><i className="fas fa-bookmark"></i>Bookmarks</li>
            </ul>
          </div>: ""}
        </div>
        <div className='user-show-detail-center-summary'>
          { this.state.listName == 'UserProfileCenter' ? <UserProfileCenter user={user} imgs={imgs} reviews={reviews} biz={biz}/> : "" }
          { this.state.listName == 'UserProfileReviews' ? <UserProfileReviews user={user} imgs={imgs} reviews={reviews} biz={biz}/> : "" }
          { this.state.listName == 'UserProfileBizPhotos' ? <UserProfileBizPhotos user={user} imgs={imgs} reviews={reviews} biz={biz}/> : "" }
          { this.state.listName == 'UserProfileBookmarks' ? <UserProfileBookmarks user={user} imgs={imgs} reviews={reviews} biz={biz}/> : "" }
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
    );
  }
}

export default UserProfileNav;
