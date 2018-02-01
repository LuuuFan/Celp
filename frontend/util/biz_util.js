export const fetchBizes = () => (
  $.ajax({
    url: 'api/biz',
    method: 'GET'
  })
);

export const fetchBiz = (bizId) => (
  $.ajax({
    url: `api/biz/${bizId}`,
    method: 'GET'
  })
);
