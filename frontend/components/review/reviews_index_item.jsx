import React from 'react';

const ReviewsIndexItem = ({review}) => {
  return (
    <div className='reviews-index-item'>
      
      <p>{review.body}</p>
    </div>
  );
};

export default ReviewsIndexItem;
