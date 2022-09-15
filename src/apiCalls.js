function fetchData(details) {
  return fetch(`http://localhost:3001/api/v1/${details}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

const promiseAll = () => {
  const result = Promise.all([
    fetchData("users"),
    fetchData("hydration"),
    fetchData("sleep"),
    fetchData("activity"),
  ]).then((response) => {
    return response;
  });
  return result;
};

export { promiseAll };
