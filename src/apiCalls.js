// Your fetch requests will live here!

let userData = [];

// fetch calls //
function retrieveAPIData(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => userData = data)
}

retrieveAPIData('https://fitlit-api.herokuapp.com/api/v1/users')

export default userData