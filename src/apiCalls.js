// Your fetch requests will live here!

export default function returnDataPromises(){
    const fetchUsers = fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(response => response.json()).catch(error => console.log('Users: ', error))
    const fetchSleep = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep').then(response => response.json()).catch(error => console.log('Sleep: ', error))
    const fetchHydration = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(response => response.json()).catch(error => console.log('Hydration: ', error))

    return Promise.all([fetchUsers, fetchSleep, fetchHydration])
}
