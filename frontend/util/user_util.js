export const requestUser = (username) => (
  $.ajax({
    url: `api/users/${username}`,
    method: 'GET'
  })
);
