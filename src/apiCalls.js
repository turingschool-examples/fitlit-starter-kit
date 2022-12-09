// Your fetch requests will live here!
// console.log('I will be a fetch request!')

const fetchUserData = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
            .then(response => response.json());
};

const fetchSleepData = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
            .then(response => response.json());
};

const fetchHydrationData = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
            .then(response => response.json());
};

export {fetchUserData} 
export {fetchSleepData}
export {fetchHydrationData}