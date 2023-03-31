const fetchAPI = (url) => {
  return fetch(url)
  .then(data => data.json())
}

const fetchAllData = () => {
  return Promise.all([
    fetchAPI('https://fitlit-api.herokuapp.com/api/v1/users'),
    fetchAPI('https://fitlit-api.herokuapp.com/api/v1/hydration'),
    fetchAPI('https://fitlit-api.herokuapp.com/api/v1/sleep'),
    fetchAPI('https://fitlit-api.herokuapp.com/api/v1/activity')
  ])
}

export { fetchAllData }