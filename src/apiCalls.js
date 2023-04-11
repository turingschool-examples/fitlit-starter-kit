// Your fetch requests will live here!

let apiCalls;

const userAPI = fetch("http://localhost:3001/api/v1/users	")
  .then(response => response.json())
  .catch(error => console.log(error))

const sleepAPI = fetch("http://localhost:3001/api/v1/sleep")
  .then(response => response.json())
  .catch(error => console.log(error))

  const hydrationAPI = fetch("http://localhost:3001/api/v1/hydration")
  .then(response => response.json())
  .catch(error => console.log(error))

  const activityAPI = fetch("http://localhost:3001/api/v1/activity")
  .then(response => response.json())
  .catch(error => console.log(error))

apiCalls = [userAPI, sleepAPI, hydrationAPI, activityAPI]

export default apiCalls;