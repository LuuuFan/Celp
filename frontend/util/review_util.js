export const createReview = (bizId, review) => (
  $.ajax({
    url: `api/biz/${bizId}/reviews`,
    method: 'POST',
    data: {review}
  })
);

export const requestAllReviews = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}/reviews`,
    method: 'GET'
  })
)

export const requestReview  = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'GET'
  })
)

export const updateReview = (review) => (
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: 'PATCH',
    data: {review}
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'DETELE'
  })
)
