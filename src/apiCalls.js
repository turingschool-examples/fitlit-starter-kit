function fetchUsers() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => response.json());
};

function fetchHydration() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => response.json());
};

function fetchSleep() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => response.json());
};

function fetchActivity() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then((response) => response.json());
}

export {fetchUsers, fetchHydration, fetchSleep, fetchActivity}

// map fetch function

function fetchMap(user) {
  return fetch(`http://localhost:3001/api/v1/users/${user.id}/latestrun`)
  .then((response) => response.text())
  .then(str => new DOMParser().parseFromString(str, "text/xml"));
}

export {
  fetchMap
};