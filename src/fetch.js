var userDetails;
const userInfo = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/users') 
  .then(response => response.json())
  .then(data => {userDetails = data.userData})
  .catch(err => console.log(err));
}
  //
//
// // const sleepData = fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/sleep');
// //
// // const activityData = fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/activity');
// //
// // const hydrationData = fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/hydration');
//
export default {userInfo, userDetails};

