import React from 'react';

class ReviewsIndexItem extends React.Component {

  componentDidMount(){
    const {review} = this.props;
    const rate = document.getElementById(`review-item-rate-${review.id}`);
    const position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
    rate.style.backgroundPosition = `0 -${position}px`;
  }

  render(){
    const {review} = this.props;
    return (
      <div className='reviews-index-item'>
        <div id={`review-item-rate-${review.id}`} className='biz-review-rating'>
        </div>
        <p>{review.created_at.slice(0, 10)}</p>
        <p>{review.body}</p>
      </div>
    );
  }
};

export default ReviewsIndexItem;
