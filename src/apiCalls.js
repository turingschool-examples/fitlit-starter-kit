// Your fetch requests will live here!

// ----- * User Data * ----- //
// function fetchUser() {
//     fetch('https://fitlit-api.herokuapp.com/api/v1/users')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//           console.log('>>>>>DATA', data);
//             return data;
//             // Process the data here
//         })
//         .catch(error => {
//             //console.error('There has been a problem with your fetch operation:', error);
//         });
//         console.log('>>>>>USER', user);  
// }




// .then(data => {
// // Assuming `data` is an array of user objects
// const processedData = data.map(user => ({
//     id: user.id,
//     name: user.name,
//     address: user.address,
//     email: user.email,
//     strideLength: user.strideLength,
//     dailyStepGoal: user.dailyStepGoal,
//     friends: user.friends
// }));


console.log('I will be a fetch request!')

function fetchData(endpoint) {
    return fetch(`https://fitlit-api.herokuapp.com/api/v1/${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${endpoint}`);
        }
        return response.json();
      })
      .catch((error) => console.log(`Error fetching ${endpoint}:`, error));
  }
  
  function fetchUserData() {
    return fetchData('users');
  }
  
  function fetchSleepData() {
    return fetchData('sleep');
  }
  
  function fetchHydrationData() {
    return fetchData('hydration');
  }
  
  function fetchActivityData() {
    return fetchData('activity');
  }
  
  // Template for a POST request, adjust as necessary for your API's needs
  /*function postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error posting data');
      }
      return response.json();
    })
    .catch(error => console.error('Error:', error));
  }
  */
  export { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData, }; 
  //export { fetchUser }; 