// Your fetch requests will live here!


const fetchAll = () => {
    return Promise.all([fetchUserData('https://fitlit-api.herokuapp.com/api/v1/users'), fetchUserData('https://fitlit-api.herokuapp.com/api/v1/sleep'), fetchUserData('https://fitlit-api.herokuapp.com/api/v1/hydration')])
}

export { fetchAll }

console.log('I will be a fetch request!')