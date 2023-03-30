
// Webpack links
import { fetchApiData } from '../src/apiCalls';
import './css/styles.css';
import User from '../src/User'
// import Sleep from '../src/Sleep';
// import Hydration from '../src/Hydration';
// import userTestData from '../src/data/user-test-data';
// import Activity from '../src/Activity';
// import activityTestData from '../src/data/activity-test-data'
// import hydrationTestData  from '../src/data/hydration-test-data';
// import sleepTestData from '../src/data/sleep-test-data';
// import './images/turing-logo.png';

// real data
import usersData from '../src/data/users'
// import sleep from '../src/data/sleep'
// import hydrationData from '../src/data/hydration'



// filter out all the sleep datat = > make an instance of sleep with that number +> set it to a prooperty in user
// do the same for hydration and activity
// change all the global calls of sleep and hydration to calling with in the user



// Queury selectors
const firstName = document.querySelector('#userName');
const userInfo = document.querySelector('#userInfo');
// const sleepDay = document.querySelector('#sleepBox');
// const sleepWeek = document.querySelector('#sleepBoxWeek');
// const sleepAvg = document.querySelector('#sleepBoxAvg');
// const hydrationDay = document.querySelector('#hydrationBoxDaily');
// const hydrationWeek = document.querySelector('#hydrationBoxWeek');
// const hydrationAvg = document.querySelector('#hydrationBoxAvg');
// // const activityDay = document.querySelector('#activityBoxDaily');
// const activityAvg = document.querySelector('#activityBoxAvg')
// const activityWeek = document.querySelector('#activityBoxWeek');

// Global Variables

let user;
// let sleep;
// let hydration;

// let setHydrationData = () => {
//   return hydrationData.hydrationData.filter(water => water.userID === user.id)
// }
// let getRandomUser = () => {
//   return usersData.users[Math.floor(Math.random() * usersData.users.length)]
// }
// let setSleepData = () => {
//   console.log(sleepTestData)
//   return sleepTestData.sleepTestData.filter(sleep => sleep.userID === user.id)
// }
// let user = new User(getRandomUser());
// let hydration = new Hydration(setHydrationData());
// let sleep = new Sleep(setSleepData());
// let activity = new Activity(setActivityData, user.strideLength)
user = new User(usersData.users[Math.floor(Math.random() * usersData.users.length)]);
// Event listeners
window.addEventListener('load', () => {
  fetchApiData('https://fitlit-api.herokuapp.com/api/v1/users')
  .then((userData) => {
    
  });
});
    

// DOM Methods
const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<h4>Address: ${user.address}</h4>
  <h4>Email: ${user.email}</h4> 
  <h4>Stride Length: ${user.strideLength}</h4>
  <h4>Daily Step Goal: ${user.dailyStepGoal}</h4>
  // <h4>Friends: ${user.getFriends(user)}</h4>
  <h4>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(user)}</h4>`
}

// const displaySleepInfo = (sleep) => {
//   const latestSleep = sleep.data[sleep.data.length - 1];
//   const pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept');
//   const avgQuality = sleep.getAverage('sleepQuality');
//   const avgHours = sleep.getAverage('hoursSlept');
//   sleepDay.innerHTML = `<h4>Latest Hours Slept:</h4> ${latestSleep.hoursSlept} Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
//   sleepWeek.innerHTML = `<h4>Last 7 Days: ${pastWeekSleep.join(', ')}</h4>`;
//   sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)} Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
// }

// const displayHydrationAvg = (userId) => {
//   hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydration.findAvgDailyHydration(userId)}oz</h4>`;
// }

// const displayHydrationStats = (userId) => {
//   hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydration.findAvgDailyHydration(userId)}oz</h4>`;

// }

// const displayHydrationWeek = () => {
//   let weekData = hydration.findWeeklyHydration()
//   let splitData = weekData.map(num => num + 'oz')
//   hydrationWeek.innerHTML = `<h4>Last 7 days: ${splitData.join(', ')}</h4>`
// }

// const displayActivity = (date) => {
//   activityDay.innerHTML = `<h4>Latest # of Steps: ${activity.getStepCount()}</h4>`
//   activityAvg.innerHTML = `<h4>Latest # of Minutes Active: ${activity.getMinutesActive()}</h4>`
//   activityAvg.innerHTML = `<h4>Latest Distance Walked: ${activity.calculateMiles()}</h4>`
//   activityWeek.innerHTML = `<h4>Weekly Step Goal: ${activity.getLatestWeek()}</h4>`
// }

// function invocation
displayCurrentUser(user);
// displaySleepInfo(sleep);
// displayHydrationStats(user.id);
// displayHydrationWeek('2023/03/02');
// displayHydrationAvg(user.id);
// displayActivity(user.id);


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