// Your fetch requests will live here!
const fetchUserData = () => {
        fetch("https://fitlit-api.herokuapp.com/api/v1/users")
        .then((response) => response.json())
        .then(users => {
            console.log(users)
        })
    }
    
    const promiseAll = () => {
        const result = Promise.all([
          fetchUserData("users"),
          // fetchData("hydration"),
          // fetchData("sleep"),
        ]).then((response) => {
          console.log('response',response)
          return response;
        });
        console.log('result',result)
        return result
      }

console.log('I will be a fetch request!',promiseAll())

export default fetchUserData()
export {promiseAll}