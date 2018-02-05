export const createBookmark = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}/bookmark`,
    method: 'POST'
  })
);

export const deleteBookmark = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}/bookmark`,
    method: 'DELETE'
  })
);
