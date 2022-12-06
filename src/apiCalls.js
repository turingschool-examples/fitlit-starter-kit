// Your fetch requests will live here!
// const userInfo = {}

// const fetchInfo = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
// .then(data => data.json()).then(data => userInfo.users = data)

const fetchData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
.then((response) => response.json())
.then((value) => {
return value.userData
})


export { fetchData }

console.log('I will be a fetch request!')