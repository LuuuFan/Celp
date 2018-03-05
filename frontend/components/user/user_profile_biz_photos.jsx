import React from 'react';
import {Link} from 'react-router-dom';

class UserProfileBizPhotos extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    const {user, imgs, reviews, biz} = this.props;
    return(
      <div className='user-profile-biz-photos'>
        <h1>Business Photos</h1>
        <div className='user-profile-biz-photos-index group'>
          { imgs.order.length > 0 ?
            <div>
              {imgs.order.map(idx =>
                <div className='user-profile-biz-photos-item-container' key={idx}>
                  <Link to={`/biz/${imgs[idx].biz_id}`}>
                    <img src={imgs[idx].url} />
                  </Link>
                </div>)
              }
            </div>
             :
            <div>
              You don't have photo uploaded yet. Go upload photo for business.
            </div>
          }
        </div>
      </div>
    );
  }
}

export default UserProfileBizPhotos;
