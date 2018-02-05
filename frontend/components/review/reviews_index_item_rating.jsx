import React from 'react';

class ReviewsIndexItemRating extends React.Component {
  componentDidMount(){
    const {review} = this.props;
    const rate = document.getElementById(`review-item-rate-${review.id}`);
    const position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
    if (rate) {
      rate.style.backgroundPosition = `0 -${position}px`;
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.review.rate !== newProps.review.rate) {
      const {review} = newProps;
      const rate = document.getElementById(`review-item-rate-${review.id}`);
      const position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
      if (rate) {
        rate.style.backgroundPosition = `0 -${position}px`;
      }
    }
  }

  render(){
    const {review} = this.props;
    return(
      <div id={`review-item-rate-${review.id}`}
           className='biz-review-rating'>
      </div>
    );
  }
}

export default ReviewsIndexItemRating;
