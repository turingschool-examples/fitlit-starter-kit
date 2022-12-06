// Your fetch requests will live here!
// const fetchData = (url) => {
//     return fetch(url).then((json) => (json))

// }



const fetchAll = () => {
    return Promise.all([fetch('https://fitlit-api.herokuapp.com/api/v1/users'), fetch('https://fitlit-api.herokuapp.com/api/v1/sleep'), fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')])

}
// const fetchData = fetch('https://fitlit-api.herokuapp.com/api/v1/users')
// .then((response) => response.json())
// .then((value) => {
// return value.userData
// })


export { fetchAll }

console.log('I will be a fetch request!')