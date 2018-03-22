import React from 'react';
import Loading from '../loading';
import ReviewsIndexItem from './reviews_index_item';
import {withRouter} from 'react-router-dom';
import BizShowMoreInfo from '../biz/biz_show_more_info';


class ReviewsIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      filter: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.setState({reviews: this.props.reviews});
  }

  componentWillReceiveProps(newProps){
    this.setState({reviews: newProps.reviews});
  }

  handleInput(e){
    if (e.target.value === "") {
      this.setState({
        filter: e.target.value,
        reviews: this.props.reviews
      })
    }
    this.setState({filter: e.target.value});
  }

  filterReview(e){
    e.preventDefault();
    if (this.state.filter.length == 0) {
      this.setState({reviews: this.props.reviews})
    } else {
      this.setState({reviews: this.props.reviews.filter(review=>review.body.includes(this.state.filter))})
    }
  }

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
    const {reviews, biz, currentUser, users, deleteReview, history, deleteReviewTag, createReviewTag} = this.props;
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
              <form onSubmit={(e)=>this.filterReview(e)}>
                <input onChange={(e)=>this.handleInput(e)} type='text' placeholder='Search within the reviews'/>
                <button onClick={(e)=>this.filterReview(e)} >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <hr/>
          { biz.review_ids && biz.review_ids.length > 0 ?
            <div>
              {this.state.reviews.length > 0 ?
                <div>
                  {this.state.reviews.map(review =>
                    <div key={review.id}>
                      {review ?
                        <ReviewsIndexItem
                          review={review}
                          users={users}
                          bizId={biz.id}
                          currentUser={currentUser}
                          createReviewTag={createReviewTag}
                          deleteReviewTag={deleteReviewTag}
                          deleteReview={deleteReview} />
                      : ""}
                    </div>
                  )}
                </div>
                :
                <div className='reviews-filter'>
                  0 reviews mentioning {this.state.filter}.
                </div>
              }
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
