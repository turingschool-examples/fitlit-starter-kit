import User from '../src/User'

export let userClass;



function fetchApiData(url) {
  const fetchedUserData = fetch(url)
  // .then(res => res.json())
  // .then(data => {
  // userObj = data.users[Math.floor(Math.random() * data.users.length)];
  // console.log(userObj);
  
  
 
    
  
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