// export const fetchAPIData = () => {
//   fetch("http://localhost:3001/api/v1/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('error: ', error))
// }
export const fetchUsersData = () => {
    return fetch("http://localhost:3001/api/v1/users")
        .then(response => response.json())
        .catch(err => console.log("User Data ERROR"))
}
export const fetchHydrationData = () => {
    return fetch("http://localhost:3001/api/v1/hydration")
        .then(response => response.json())
        .catch(err => console.log("Hydration Data ERROR"))
}
export const fetchSleepData = () => {
    return fetch("http://localhost:3001/api/v1/sleep")
        .then(response => response.json())
        .catch(err => console.log("Sleep Data ERROR"))
}
