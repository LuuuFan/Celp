import React from 'react';

class ReviewsIndexItem extends React.Component {

  componentDidMount(){
    const {review} = this.props;
    const rate = document.getElementById(`review-item-rate-${review.id}`);
    const position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
    rate.style.backgroundPosition = `0 -${position}px`;
  }

  render(){
    const {review, currentUser} = this.props;
    return (
      <div className='reviews-index-item'>
        <div className='review-user'>
          <div className='review-user-avatar'>
            <img src={review.user_avatar}/>
          </div>
          <div className='review-user-info'>
            <ul>
              <li><a>{review.user}</a></li>
              <li>San Francisco, CA</li>
              {review.user_review_num > 1 ?
                <li><strong>{review.user_review_num}</strong> reviews</li>
              : <li><strong>1</strong> review</li>
              }
            </ul>
          </div>
        </div>
        <div className='review-info'>
          <div className='review-info-rate-time'>
            <div id={`review-item-rate-${review.id}`} className='biz-review-rating'>
            </div>
            <p>{review.created_at.slice(0, 10)}</p>
          </div>
          <div className='review-info-body group'>
            <p>{review.body}</p>
            {review.user_id === currentUser.id ?
              <div className='deleteReview'><i className="fas fa-trash-alt"></i></div>
            :
              <div className='review-status'>
                <p>Was this review ...?</p>
                <div>
                  <ul className='group'>
                    <li><i className="fas fa-lightbulb"></i>Userful</li>
                    <li><i className="far fa-smile"></i>Funny</li>
                    <li><i className="far fa-hand-peace"></i>Cool</li>
                  </ul>
                  <div className='report-review'><i className="fas fa-flag"></i></div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
};

export default ReviewsIndexItem;
