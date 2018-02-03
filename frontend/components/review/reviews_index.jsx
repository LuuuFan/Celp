import React from 'react';
import Loading from '../loading';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllReviews(this.props.match.params.bizId);
  }

  render(){
    const {reviews, currentUser} = this.props;
    return (
      <div className='review-main group'>
        { reviews.length > 0 ?
        <div className='review-index'>
          <div className='ask-community'>
            <h1>Ask the Community</h1>
            <hr />
            <p>Celp users haven't asked any questions yet about <strong>{reviews[0].biz}</strong></p>
            <button className='ask-question'>Ask a Question</button>
          </div>
          <div className='review-index-title'>
            <div>
              <h1>Recommended Reviews</h1>
              <h2>for {reviews[0].biz}</h2>
            </div>
            <div className='searchReview'>
              <input placeholder='Search within the reviews'/>
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <hr/>
          {reviews.map(review =>
            <ReviewsIndexItem key={review.id} review={review} />
          )}
        </div>
        : <Loading />}
      </div>
    );
  }
}

export default ReviewsIndex;
