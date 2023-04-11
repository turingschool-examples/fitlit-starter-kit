const fetchAPI = (url) => {
  return fetch(url)
  .then(data => data.json());
};

const fetchAllData = () => {
  return Promise.all([
    fetchAPI('http://localhost:3001/api/v1/users'),
    fetchAPI('http://localhost:3001/api/v1/hydration'),
    fetchAPI('http://localhost:3001/api/v1/sleep'),
    fetchAPI('http://localhost:3001/api/v1/activity')
  ]);
};

const postActivityData = (data) => {
  fetch('http://localhost:3001/api/v1/activity', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
  };

export { fetchAllData }
// export { postActivityData }