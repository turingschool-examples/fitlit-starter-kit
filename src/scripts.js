

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
// Webpack links
import './css/styles.css';
import User from '../src/User'
import userTestData from '../src/data/user-test-data';
// import Activity from '../src/Activity';
// import activityTestData from '../src/data/activity-test-data'
import Hydration from '../src/Hydration';
import hydrationTestData  from '../src/data/hydration-test-data';
import Sleep from '../src/Sleep';
import sleepTestData from '../src/data/sleep-test-data';
import './images/turing-logo.png';

// real data
import usersData from '../src/data/users'
// import sleep from '../src/data/sleep'
import hydrationData from '../src/data/hydration'



// filter out all the sleep datat = > make an instance of sleep with that number +> set it to a prooperty in user
// do the same for hydration and activity
// change all the global calls of sleep and hydration to calling with in the user

let getRandomUser = () => {
  return usersData.users[Math.floor(Math.random() * usersData.users.length)]
}

// Queury selectors
const firstName = document.querySelector('#userName');
const userInfo = document.querySelector('#userInfo');
const sleepDay = document.querySelector('#sleepBox');
const sleepWeek = document.querySelector('#sleepBoxWeek');
const sleepAvg = document.querySelector('#sleepBoxAvg');
const hydrationDay = document.querySelector('#hydrationBoxDaily');
const hydrationWeek = document.querySelector('#hydrationBoxWeek');
const hydrationAvg = document.querySelector('#hydrationBoxAvg');
// const activityDay = document.querySelector('#activityBoxdaily');
// const activityDistance = document.querySelector('#activityBoxAvg')
// const activityMinutes = document.querySelector('#activityBoxAvg');
// const activityWeek = document.querySelector('#activityBoxWeek');

// Global Variables
let user = new User(getRandomUser());

let setHydrationData = () => {
  return hydrationData.hydrationData.filter(water => water.userID === user.id)
}
let setSleepData = () => {
  console.log(sleepTestData)
  return sleepTestData.sleepTestData.filter(sleep => sleep.userID === user.id)
}
// let setActivityData = () => {
//   console.log(activityTestData)
//   return activityTestData.activityTestData.filter(activity => activity.userID === user.id)
// }
let sleep = new Sleep(setSleepData());
let hydration = new Hydration(setHydrationData());
// let activity = new Activity(setActivityData());

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

const displaySleepInfo = (sleep) => {
  const latestSleep = sleep.data[sleep.data.length - 1];
  const pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept');
  const avgQuality = sleep.getAverage('sleepQuality');
  const avgHours = sleep.getAverage('hoursSlept');
  sleepDay.innerHTML = `<h4>Latest Hours Slept:</h4> ${latestSleep.hoursSlept} Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
  sleepWeek.innerHTML = `<h4>Last 7 Days: ${pastWeekSleep.join(', ')}</h4>`;
  sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)} Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
}

const displayHydrationAvg = (userId) => {
  hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydration.findAvgDailyHydration(userId)}oz</h4>`;
}

const displayHydrationStats = (userId) => {
  hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydration.findAvgDailyHydration(userId)}oz</h4>`;

}

const displayHydrationWeek = () => {
  let weekData = hydration.findWeeklyHydration()
  let splitData = weekData.map(num => num + 'oz')
  hydrationWeek.innerHTML = `<h4>Last 7 days: ${splitData.join(', ')}</h4>`
}

// const displayActivity = (userId) => {
//   const latestActivity = activity.data[activity.data.length -1]
//   activityDay.innerHTML = `<h4><h4>Latest # of Steps:</h4> ${latestActivity.numSteps}</h4>`
//   activityMinutes.innerHTML = `<h4><h4>Latest # of Minutes Active:</h4> ${latestActivity.minutesActive}</h4>`
//   activityDistance.innerHTML = `<h4><h4>Latest Distance Walked:</h4> ${activity.nameFunction()}</h4>`
//   activityWeek.innerHTML = '`<h4><h4>Weekly Step Goal:</h4> ${activity.nameFunction()}</h4>`'
// }

// function invocation
displayCurrentUser(user)
displaySleepInfo(sleep)
displayHydrationStats(user.id)
displayHydrationWeek('2023/03/02')
displayHydrationAvg(user.id)
// displayActivity(user.id)


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