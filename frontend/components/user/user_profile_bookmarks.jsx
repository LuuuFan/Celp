import React from 'react';
import {Link} from 'react-router-dom';
import BizIndexItemRating from '../biz/biz_index_item_rating';

class UserProfileBookmarks extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    const {user, imgs, reviews, biz} = this.props;
    return(
      <div className='user-profile-bookmarks'>
        <h1>Bookmarks</h1>
        {user.bookmark_num > 0 ?
        <div className='user-profile-bookmarks-index'>
          {user.bookmark_biz_ids.map(idx=>
            <div className='user-profile-bookmarks-item' key={idx}>
              <div className='user-profile-bookmarks-item-biz-cover'>
                <Link to={`/biz/${idx}`}>
                  <img src={biz[idx].img_url} />
                </Link>
              </div>
              <div className='user-profile-bookmarks-item-biz-info'>
                <Link to={`/biz/${idx}`}>{biz[idx].name}</Link>
                <div>
                  <BizIndexItemRating biz={biz[idx]}/>
                  {biz[idx].reviews_num > 1 ? <p>{biz[idx].reviews_num} reviews</p> : <p>{biz[idx].reviews_num} review</p>}
                </div>
                <div className='user-profile-reviews-item-biz-info-address'>
                  {biz[idx].display_address}
                </div>
              </div>
            </div>
          )}
        </div>
        :
        <div>
          You don't have bookmark yet. Go find a business.
        </div>
        }
      </div>
    );
  }
}

export default UserProfileBookmarks;
