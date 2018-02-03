import React from 'react';
import Loading from '../loading';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllReviews(this.props.match.params.bizId);
  }

  render(){
    const {reviews, currentUser} = this.props;
    debugger
    return (
      <div>
        { reviews.length > 0 ?
        <div className='review-index'>
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
