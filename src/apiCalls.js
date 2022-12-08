// Your fetch requests will live here!
// console.log('I will be a fetch request!')

let userData

fetch("https://fitlit-api.herokuapp.com/api/v1/users")
.then((response) => response.json())
.then(data => {
    console.log("data: ", data)
    userData = data
    console.log("inside of function: ", userData)
})

function fetchReqeuest () {
    return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
}

// export default userData;

// function getAPIData() {
//     return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
//     .then((response) => response.json())
// }

export{fetchReqeuest}