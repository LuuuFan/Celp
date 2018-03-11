export const createReviewTag = (reviewId, tag) => (
  $.ajax({
    url: `api/reviews/${reviewId}/review_tags`,
    method: 'POST',
    data: {tag: tag}
  })
)

export const deleteReviewTag = (reviewId, tag) => (
  $.ajax({
    url: `api/reviews/${reviewId}/review_tags`,
    method: 'DELETE',
    data: {tag: tag}
  })
);
