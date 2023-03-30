function fetchApiData(url) {
  const fetchedUserData = fetch(url)
  .then(res => res.json())
  .catch((error) => console.log(error));

  return fetchedUserData;
}

export { fetchApiData }

//     displayCurrentUser(user);


//     fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
//     .then(res => res.json())
//     .then(data => {

//     })
//     fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
//     .then(res => res.json())
//     .then(data => {

//     })

//     fetch('https://fitlit-api.herokuapp.com/api/v1/activity')
//     .then(res => res.json())
//     .then (data => {

//     })

//   })
// }