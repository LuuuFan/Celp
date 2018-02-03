import React from 'react';

const ReviewsIndexItem = ({review}) => {
  return (
    <div>
      <p>{review.body}</p>
    </div>
  );
};

export default ReviewsIndexItem;
