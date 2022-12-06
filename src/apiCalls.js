// Your fetch requests will live here!

const fetchApiData = (path) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${path}`)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(`${path} API Error!`))
};

const fetchData = () => {
  return Promise.all([
    fetchApiData("users"),
    fetchApiData("sleep"),
    fetchApiData("hydration"),
  ])
};

  

console.log('I will be a fetch request!')
export default { fetchData };
