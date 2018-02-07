export const requestSearch = (key, loc) => (
  $.ajax({
    url: `api/searches?key=${key}&loc=${loc}`,
    method: 'GET'
  })
);
