// Your fetch requests will live here!
  
const getUsersApiData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
.then(response => response.json())
.catch(err => console.log(err))

const getSleepApiData = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
.then(response => response.json())
.catch(err => console.log(err))

const getHydrationApiData = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
.then(response => response.json())
.catch(err => console.log(err))


export { getUsersApiData, getSleepApiData, getHydrationApiData }
