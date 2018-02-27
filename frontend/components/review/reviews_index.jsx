import React from 'react';
import Loading from '../loading';
import ReviewsIndexItem from './reviews_index_item';
import {withRouter} from 'react-router-dom';
import BizShowMoreInfo from '../biz/biz_show_more_info';


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
    const {reviews, biz, currentUser, users, deleteReview, history} = this.props;
    return (
      <div className='review-main group'>
        <div className='review-index'>
          <div className='ask-community'>
            <h1>Ask the Community</h1>
            <hr />
            {biz ? <p>Celp users haven't asked any questions yet about <strong>{biz.name}</strong></p> : ""}
            <button className='ask-question tooltip'>Ask a Question<div className='tooltiptext'>under construction</div></button>
          </div>
          <div className='review-index-title'>
            <div>
              <h1>Recommended Reviews</h1>
              {biz ? <h2>for {biz.name}</h2> : ''}
            </div>
            <div className='searchReview '>
              <input placeholder='Search within the reviews'/>
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <hr/>
          { biz.review_ids && biz.review_ids.length > 0 ?
            <div>
              {reviews.map(review =>
                <div key={review.id}>
                  {review ?
                    <ReviewsIndexItem
                      review={review}
                      users={users}
                      bizId={biz.id}
                      currentUser={currentUser}
                      deleteReview={deleteReview} />
                  :""}
                </div>
              )}
            </div>
            :
            <div className='no-review'>
              <h1>There is no review for this business, be the first one to review it!</h1>
            </div>
          }
        </div>
        <BizShowMoreInfo biz={biz}/>
      </div>
    );
  }
}

export default ReviewsIndex;
