// Your fetch requests will live here!

const fetchUserData = () => {
    return fetch("https:fitlit-api.herokuapp.com/api/v1/users").then(response => response.json())
}

const fetchUserActivity = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/activity").then(response => response.json())
}

const fetchUserSleep = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep").then(response => response.json())
}

const fetchUserHydration = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration").then(response => response.json())
}
//response is encrypted
//promise grabs the data out of the air and pins it down
//second then creates copy reassigns it to global variable
//.then gives access but doesn't return similar to forEach()

export {fetchUserData, fetchUserActivity, fetchUserSleep, fetchUserHydration}
