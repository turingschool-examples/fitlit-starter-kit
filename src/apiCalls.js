function getUserDataFromAPI() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(promise => promise.json())
        .catch(error => console.log(error))
};

function getSleepDataFromAPI() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
        .then(promise => promise.json())
        .catch(error => console.log(error))
};

function getHydrationDataFromAPI() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
        .then(promise => promise.json())
        .catch(error => console.log(error))
};

export { getUserDataFromAPI, getSleepDataFromAPI, getHydrationDataFromAPI };