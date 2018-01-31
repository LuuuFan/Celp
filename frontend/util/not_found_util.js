export const getGif = () => (
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=e9H4ByZs95vlGYE7rg0nYbiF8eNgX4Dr',
    method: 'GET',
    async: false
  })
);
