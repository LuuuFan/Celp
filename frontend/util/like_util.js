export const createImgLike = (imgId) => (
  $.ajax({
    url: `api/imgs/${imgId}/like`,
    method: 'POST'
  })
)

export const deleteImgLike = (imgId) => (
  $.ajax({
    url: `api/imgs/${imgId}/like`,
    method: 'DELETE'
  })
)
