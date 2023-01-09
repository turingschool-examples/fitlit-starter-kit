const fetchUserData = (url, object) => {
  return fetch(url, object).then((response) => {
    if (!response.ok) {
      throw new Error("Unable To Post Your Data. Try Later.");
    }
    return response.json();
  });
};

const fetchAll = () => {
  return Promise.all([
    fetchUserData("http://localhost:3001/api/v1/users"),
    fetchUserData("http://localhost:3001/api/v1/sleep"),
    fetchUserData("http://localhost:3001/api/v1/hydration"),
    fetchUserData("http://localhost:3001/api/v1/activity"),
  ]);
};

const postData = function (
  sleep,
  hydration,
  activity,
  updateData,
  rerenderPage,
  user
) {
  const postObject = {
    method: "POST",
    body: {},
    headers: {
      "Content-Type": "application/json",
    },
  };
  return Promise.all([
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
  ]).then((response) => {
    if (response.status >= 300) {
      console.log("throwing error");
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    fetchAll().then((data) => {
      updateData(data, user);
      rerenderPage();
    });
    return response;
  });
};

export { fetchAll, postData };
