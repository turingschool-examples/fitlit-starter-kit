// Set up function to accept an endpoint path as an argument
const fetchApiUrl = (path) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${path}`)
  .then(response => response.json());
  .then(data => data);
  .catch(error => console.log(`${path} API Error!`))
};


const fetchData = () => {
  // Represent the eventual completion or failure of our fetch call
  // Promise.all() accepts an iterable (such as an array) as an argument
  return Promise.all([
    // Invoke the fetchApiUrl function
    // Dynamically pass in each URL path as an argument
    fetchApiUrl("users"),
    fetchApiUrl("hydration"),
    fetchApiUrl("sleep"),
  ]);
};

// Export the data that returns from the response of the promise object
export default { fetchData };
