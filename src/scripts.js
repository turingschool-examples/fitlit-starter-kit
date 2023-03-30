// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
// Webpack links
import './css/styles.css';
import userTestData from '../src/data/user-test-data';
import User from '../src/User'
import Sleep from '../src/Sleep';
// import Hydration from '../src/Hydration';
// import hydrationTestData  from '../src/data/hydration-test-data';
import sleepTestData from '../src/data/sleep-test-data';
import './images/turing-logo.png';
// import './images/turing-logo.png';


// Queury selectors
const firstName = document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const sleepCurrent = document.querySelector('#sleepBox')
const sleepWeek = document.querySelector('#sleepBoxWeek')
const sleepAvg = document.querySelector('#sleepBoxAvg')

// Global Variables
 let user = new User(userTestData.userTestData[0]);
 let sleep = new Sleep(sleepTestData.sleepTestData);
 //  let hydration = new Hydration();

// Event listeners

// DOM Methods
const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<h4>Address: ${user.address}</h4>
  <h4>Email: ${user.email}</h4> 
  <h4>Stride Length: ${user.strideLength}</h4>
  <h4>Daily Step Goal: ${user.dailyStepGoal}</h4>
  <h4>Friends: ${user.getFriends(userTestData.userTestData)}</h4>
  <h4>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(userTestData.userTestData)}</h4>
  `
}
displayCurrentUser(user)

const displaySleepInfo = (sleep) => {
  const latestSleep = sleep.data[sleep.data.length - 1];
  const pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept');
  const avgQuality = sleep.getAverage('sleepQuality');
  const avgHours = sleep.getAverage('hoursSlept');
  sleepCurrent.innerHTML = `<h4>Latest Hours Slept: ${latestSleep.hoursSlept} Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
  sleepWeek.innerHTML = `<h4>Last 7 Days: ${pastWeekSleep.join(', ')}</h4>`;
  sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)} Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
}
displaySleepInfo(sleep)



// get a radom number based on the amount of IDs we have
// fetch data based off the id ADN the end-point key
// funciotn test ( 1, urlhttpsAPI//a.com) {
  // first go to end point 
  // .then () resolve .as
  // .then () filter( userID === id argument)
  // let hydration = new Hydration(whole array of info)

  // hyration class construcot(id, whole array) {
  //   data: this is where the arguments goes
  // }
// }