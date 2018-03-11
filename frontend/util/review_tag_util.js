export const createReviewTag = (reviewId, tag) => (
  $.ajax({
    url: `api/reviews/${reviewId}/review_tags`,
    method: 'POST',
    data: tag
  })
)

export const deleteReviewTag = (reviewId, tag) => (
  $.ajax({
    url: `api/reviews/${reviewId}/review_tags`,
    method: 'DELETE',
    data: tag
  })
);
