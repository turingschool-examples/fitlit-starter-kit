// Your fetch requests will live here!
const fetchData = (url) => {
  return fetch(url)
  .then(data => data.json())
}
const fetchAll = () => {
  return Promise.all([fetchData('https://fitlit-api.herokuapp.com/api/v1/users'), fetchData('https://fitlit-api.herokuapp.com/api/v1/sleep'), fetchData('https://fitlit-api.herokuapp.com/api/v1/hydration')])
}

export { fetchAll }
