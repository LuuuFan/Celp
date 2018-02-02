export const createImg = (bizId, img) => (
  $.ajax({
    url: `api/biz/${bizId}/imgs`,
    method: 'POST',
    data: {img}
  })
);

export const requestAllImg = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}/imgs`,
    method: 'GET'
  })
)

export const requestImg = (imgId) => (
  $.ajax({
    url: `api/img/${imgId}`,
    method: 'GET'
  })
)

export const deleteImg = (imgId) => (
  $.ajax({
    url: `api/imgs/${imgId}`,
    method: 'DELETE'
  })
);
