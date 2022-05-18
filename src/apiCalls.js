// Your fetch requests will live here!
export let userDataList = () => {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
        .then(response => response.json())
}



