// Your fetch requests will live here!
const fetchUserData = (usersData) => {
  fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const fetchSleepData = (sleepData) => {
  fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const fetchHydrationData = (hydrationData) => {
  fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

console.log('fetchData', fetchUserData);
