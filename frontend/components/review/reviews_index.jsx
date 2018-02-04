import React from 'react';
import Loading from '../loading';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  // componentDidMount(){
  //   this.props.requestAllReviews(this.props.match.params.bizId);
  // }
  //
  // componentWillReceiveProps(newProps){
  //   if (this.props.match.params.bizId !== newProps.match.params.bizId) {
  //     debugger
  //     this.props.requestAllReviews(newProps.match.params.bizId);
  //   }
  // }

  render(){
    const {reviews, biz, currentUser, users, deleteReview} = this.props;
    return (
      <div className='review-main group'>
        <div className='review-index'>
          <div className='ask-community'>
            <h1>Ask the Community</h1>
            <hr />
            {biz ? <p>Celp users haven't asked any questions yet about <strong>{biz.name}</strong></p> : ""}
            <button className='ask-question'>Ask a Question</button>
          </div>
          <div className='review-index-title'>
            <div>
              <h1>Recommended Reviews</h1>
              {biz ? <h2>for {biz.name}</h2> : ''}
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
            <ReviewsIndexItem
              key={review.id}
              review={review}
              users={users}
              currentUser={currentUser}
              deleteReview={deleteReview}/>
          )}
        </div>
      </div>
    );
  }
}

export default ReviewsIndex;
