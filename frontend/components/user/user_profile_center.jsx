import React from 'react';
import {Link} from 'react-router-dom';

class UserProfileCenter extends React.Component {
  constructor(props){
    super(props);
    this.state = {className: ''};
  }

  render(){
    const {user, imgs, reviews, biz} = this.props;
    return(
      <div className='user-show-detail-center'>
        {user && user.username ? <div>
          <h1>Recent Activity</h1>
          {user.img_num > 0 ?
            <div className='user-show-recent-activity-item group'>
              <div className='activity-item-avatar'>
                <img src={user.avatar_url}/>
              </div>
              <div className='activity-item-detail'>
                {biz[imgs[imgs.order[0]].biz_id].name ?
                  <p>You added a photo for <Link to={`/biz/${imgs[imgs.order[0]].biz_id}`}>{biz[imgs[imgs.order[0]].biz_id].name}</Link></p>
                : ""}
                <div className='activity-item-img-container'>
                  <img src={imgs[imgs.order[0]].url} />
                </div>
              </div>
              <div className='activity-item-update'>
                <p>days ago</p>
              </div>
            </div>
           : ""}
          {user.review_num > 0 ?
            <div className='user-show-recent-activity-item group'>
              <div className='activity-item-avatar'>
                <img src={user.avatar_url}/>
              </div>
              <div className='activity-item-detail'>
                <p>You added a review for <Link to={`/biz/${reviews[reviews.order[0]].biz_id}`}>{biz[reviews[reviews.order[0]].biz_id].name}</Link></p>
                <div className='activity-item-review-container'>
                  <p>{reviews[reviews.order[0]].body}</p>
                </div>
              </div>
              <div className='activity-item-update'>
                <p>days ago</p>
              </div>
            </div>
           : ""}
        </div>
         : ""}
      </div>
    );
  }
}

export default UserProfileCenter;
