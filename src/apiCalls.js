// Your fetch requests will live here!
const fetchUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))


console.log('I will be a fetch request!')