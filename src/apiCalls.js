// Your fetch requests will live here!
// const usersURL =  'https://fitlit-api.herokuapp.com/api/v1/users'
// const sleepURL = 'https://fitlit-api.herokuapp.com/api/v1/sleep'
// const hydrationURL = 	'https://fitlit-api.herokuapp.com/api/v1/hydration'

function getAPIData(info) {
  const fetchedInfo = fetch(`https://fitlit-api.herokuapp.com/api/v1/${info}`)
    .then((res) => res.json())
  return fetchedInfo
} 


export {getAPIData}