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

export { fetchAllData }