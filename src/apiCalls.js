const fetchData = (url) => {
  return fetch(url)
  .then(data => data.json())
}
const fetchAll = () => {
  return Promise.all([fetchData('http://localhost:3001/api/v1/users'), fetchData('http://localhost:3001/api/v1/sleep'), fetchData('http://localhost:3001/api/v1/hydration'), fetchData('http://localhost:3001/api/v1/activity')])
}
//POST
const postSleep = (id,userInputSleepData) => {
  fetch('http://localhost:3001/api/v1/sleep', {
  method: 'POST',
  body: JSON.stringify({
    userID: id,
    date: Date.now(),
    hoursSlept: userInputSleepData.hoursSlept,
    sleepQuality: userInputSleepData.sleepQuality
  }),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

const postHydration = (id,userInputHydration) => {
  fetch('http://localhost:3001/api/v1/hydration', {
  method: 'POST',
  body: JSON.stringify ({
    userID: id,
    date: Date.now(),
    numOunces: userInputHydration.numOunces
  }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
//GET

const fetchSleep = () => {
  Promise.all([fetchData('http://localhost:3001/api/v1/sleep')])
 .then(data => console.log('ya think this will work?',data))
}
const fetchHydration = () => {
  Promise.all([fetchData('http://localhost:3001/api/v1/hydration')])
  .then(data => console.log('ya think this will work? water addition', data))}

  
export { fetchAll }
export { postSleep }
export { postHydration }
export { postActivity }





const postActivity = (id, userInputActivityData) => {
  fetch('http://localhost:3001/api/v1/activity', {
      method: 'POST',
      body: JSON.stringify ({
        userID: id,
        date: Date.now(),
        numSteps: userInputActivityData.numSteps,
        minutesActive: userInputActivityData.minutesActive,
        flightsOfStairs: userInputActivityData.flightsOfStairs
      }),
      headers: { 'Content-Type': 'application/json' }
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))


}

const fetchActivity = () => {
  Promise.all([fetchData('http://localhost:3001/api/v1/activity')])
 .then(data => console.log('ya think this will work? Activity addition',data))
}
fetchActivity();

