import React from 'react';
import {Link} from 'react-router-dom';
import ReviewsIndexItemRating from '../review/reviews_index_item_rating';


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
        {reviews.order.map(idx =>
          <div key={idx} className='user-profile-reviews-item'>
            <div className='user-profile-reviews-item-biz'>
              <div className='user-profile-reviews-item-biz-cover'>
                <img src={biz[reviews[idx].biz_id].img_url}/>
              </div>
              <div className='user-profile-reviews-item-biz-info'>
                <Link to={`/biz/${reviews[idx].biz_id}`}>{biz[reviews[idx].biz_id].name}</Link>
                <div className='user-profile-reviews-item-biz-info-address'>{biz[reviews[idx].biz_id].display_address}</div>
              </div>
            </div>
            <div className='user-profile-reviews-item-rating'>
              <ReviewsIndexItemRating review={reviews[idx]}/>
              <p> {reviews[idx].updated_at.slice(0, 10)}</p>
            </div>
            <div className='user-profile-reviews-item-body'>
              <p>{reviews[idx].body}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfileReviews;
