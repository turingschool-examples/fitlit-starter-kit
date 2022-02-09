// Your fetch requests will live here!
const getData = (fetchAPI) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${fetchAPI}`)
    .then(response => response.json())
}

const usersData = getData('users');
const sleepData = getData('sleep');
const activityData = getData('activity');
const hydrationData = getData('hydration');

export {
  usersData,
  sleepData,
  activityData,
  hydrationData
}
