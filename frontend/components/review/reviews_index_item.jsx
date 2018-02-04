import React from 'react';
class ReviewsIndexItem extends React.Component {

  componentDidMount(){
    const {review} = this.props;
    const rate = document.getElementById(`review-item-rate-${review.id}`);
    const position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
    rate.style.backgroundPosition = `0 -${position}px`;
  }

  handleClick(e, id){
    e.preventDefault();
    this.props.deleteReview(id);
  }

  render(){
    const {review, currentUser, deleteReview, users} = this.props;
    return (
      <div>
      {review && users ?
        <div className='reviews-index-item'>
          <div className='review-user'>
            <div className='review-user-avatar'>
              <img src={users[review.user_id].avatar_url}/>
            </div>
            <div className='review-user-info'>
              <ul>
                <li><a>{users[review.user_id].username}</a></li>
                <li>San Francisco, CA</li>
                {users[review.user_id].user_review_num > 1 ?
                  <li><strong>{users[review.user_id].user_review_num}</strong> reviews</li>
                : <li><strong>1</strong> review</li>
                }
              </ul>
            </div>
          </div>
          <div className='review-info'>
            <div className='review-info-rate-time'>
              <div id={`review-item-rate-${review.id}`} className='biz-review-rating'>
              </div>
              <p>{review.updated_at.slice(0, 10)}</p>
            </div>
            <div className='review-info-body group'>
              <p>{review.body}</p>
              { currentUser && review.user_id === currentUser.id ?
                <div onClick={(e)=>this.handleClick(e, review.id)}className='deleteReview'><i className="fas fa-trash-alt"></i></div>
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
        : ""}
      </div>
    );
  }
};

export default ReviewsIndexItem;
