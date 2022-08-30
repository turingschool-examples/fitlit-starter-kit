const fetchData = (endPoint) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${endPoint}`)
  .then(response => response.json());
  .then(data => data);
  .catch(error => console.log(`${endPoint} API Error!`))
};

const fetchApiData = () => {
  return Promise.all([
    fetchData("users"),
    fetchData("hydration"),
    fetchData("sleep"),
  ]);
};


export default fetchData;
