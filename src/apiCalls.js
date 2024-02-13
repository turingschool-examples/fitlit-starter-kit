function fetchData(endpoint) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
      }
      return response.json();
    })
    .catch((error) => console.log(`Error fetching ${endpoint}:`, error));
}

function fetchUserData() {
  return fetchData('users');
}

function fetchHydrationData() {
  return fetchData('hydration');
}

function fetchSleepData() {
  return fetchData('sleep');
}

function fetchActivityData() {
  return fetchData('activity');
}

export { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData, }; 
