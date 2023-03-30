// Your fetch requests will live here!

let apiCalls;

const userAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.log(error))

const sleepAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.log(error))

  const hydrationAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.log(error))

  const activityAPI = fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })
  .catch(error => console.log(error))

apiCalls = [userAPI, sleepAPI, hydrationAPI, activityAPI]

export default {apiCalls}