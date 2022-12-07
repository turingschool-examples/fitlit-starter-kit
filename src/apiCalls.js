let userData
let sleepData
let hydroData

// Accessing array within array with dot notation
function loadUserData() {
    const userURL = 'https://fitlit-api.herokuapp.com/api/v1/users'
    return fetch(userURL)
        .then((response) => response.json())
        .then((data) => {
            userData = data.userData
            return userData
        })
}
function loadSleepData() {
    const sleepURL = 'https://fitlit-api.herokuapp.com/api/v1/sleep'
    return fetch(sleepURL)
        .then((response) => response.json())
        .then((data) => {
            sleepData = data.sleepData
            return sleepData
        })
}
function loadHydrationData() {
    const hydrationURL = 'https://fitlit-api.herokuapp.com/api/v1/hydration'
    return fetch(hydrationURL)
        .then((response) => response.json())
        .then((data) => {
            hydroData = data.hydrationData
            return hydroData
        })
}
export default { loadUserData, loadSleepData, loadHydrationData };