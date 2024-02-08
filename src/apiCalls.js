// Your fetch requests will live here!
import { initiateSleepFunctions } from "./sleepData"
console.log('I will be a fetch request!')

function getSleepData() {
fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
  .then(resp => resp.json())
  .then(data => initiateSleepFunctions(data))
}

getSleepData()

export {
    getSleepData,
}