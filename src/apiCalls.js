// Your fetch requests will live here!
import { initiateSleepFunctions } from "./sleepData"
console.log('I will be a fetch request!')

function getAllData() {
fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(resp => resp.json())
    .then(userData => console.log('users!!!', userData))
fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then(resp => resp.json())
    .then(hydrationData => console.log('hydration!!!', hydrationData))
fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
    .then(resp => resp.json())
    .then(sleepData => initiateSleepFunctions(sleepData))
}

getAllData()

export {
    getAllData,
}