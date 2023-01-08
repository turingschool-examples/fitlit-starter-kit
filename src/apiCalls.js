const fetchUserData = (url, object) => {
  return fetch(url, object).then((response) => response.json());
};

const fetchAll = () => {
  return Promise.all([
    fetchUserData("http://localhost:3001/api/v1/users"),
    fetchUserData("http://localhost:3001/api/v1/sleep"),
    fetchUserData("http://localhost:3001/api/v1/hydration"),
    fetchUserData("http://localhost:3001/api/v1/activity"),
  ]);
};

const testPost = async function (sleep, hydration, activity) {
  const postObject = {
    method: "POST",
    body: {},
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promises = await Promise.all([
    fetchUserData("http://localhost:3001/api/v1/sleep", {
      ...postObject,
      body: JSON.stringify(sleep),
    }),
    fetchUserData("http://localhost:3001/api/v1/hydration", {
      ...postObject,
      body: JSON.stringify(hydration),
    }),
    fetchUserData("http://localhost:3001/api/v1/activity", {
      ...postObject,
      body: JSON.stringify(activity),
    }),
  ]);
  return promises;
};

export { fetchAll, testPost };
