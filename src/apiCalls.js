function fetchData(details) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${details}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

const promiseAll = () => {
  const result = Promise.all([
    fetchData("users"),
    fetchData("hydration"),
    fetchData("sleep"),
  ]).then((response) => {
    return response;
  });
  return result;
};

export { promiseAll };
