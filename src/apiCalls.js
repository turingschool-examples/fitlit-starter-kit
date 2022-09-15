const fetchData = (url) => {
  return fetch(url)
  .then(data => data.json())
}
const fetchAll = () => {
  return Promise.all([fetchData('http://localhost:3001/api/v1/users'), fetchData('http://localhost:3001/api/v1/sleep'), fetchData('http://localhost:3001/api/v1/hydration'), fetchData('http://localhost:3001/api/v1/activity')])
}

const postSleep = (id,userInputSleepData) => {
  fetch('http://localhost:3001/api/v1/sleep', {
  // userID: 1,
  // date: "2019/06/15",
  // hoursSlept: 6.1,
  // sleepQuality: 2.2
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
const fetchSleep = () => { 
  Promise.all([fetchData('http://localhost:3001/api/v1/sleep')])
 .then(data => console.log('ya think this will work?',data))
}
fetchSleep();
export { fetchAll }
export { postSleep }
