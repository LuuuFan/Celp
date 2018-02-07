export const requestSearch = (key, loc) => (
  $.ajax({
    url: `api/searches?key=${key}&loc=${loc}`,
    method: 'GET'
  })
);


export const requestCategory = (cat, num) => (
  $.ajax({
    url: `api/searches?cat=${cat}&num=${num}`,
    method: 'GET'
  })
);
