export const requestSearch = (key, loc) => (
  $.ajax({
    url: `api/searches?key=${key}&loc=${loc}`,
    method: 'GET'
  })
);


export const requestCategory = (cat) => (
  $.ajax({
    url: `api/searches?cat=${cat}`,
    method: 'GET'
  })
);
