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

export const requestReview  = (bizId) => (
  $.ajax({
    url: `api/biz/${biz_id}/review`,
    method: 'GET'
  })
)

export const updateReview = (bizId, review) => (
  $.ajax({
    url: `api/biz/${bizId}/review`,
    method: 'PATCH',
    data: {review}
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'DELETE'
  })
)
