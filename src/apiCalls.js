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

function postHydrationData(userID, date, numOunces) {

  const formattedDate = date.replace(/-/g, '/');

  console.log('Posting hydration data:', { userID, date, numOunces });


  return fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userID,
      date: formattedDate,
      numOunces,
    }),
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to post hydration data, response code:', response.status);
      throw new Error('Failed to post hydration data');
    }
    return response.json();
  })
  .catch(error => console.error('Error posting hydration data:', error));
}


export { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData, postHydrationData};