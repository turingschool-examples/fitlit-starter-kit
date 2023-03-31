
// Webpack links
import { fetchAllData } from '../src/apiCalls';
import './css/styles.css';
import User from '../src/User'
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
// import './images/turing-logo.png';
import userClass from '../src/apiCalls.js';

// Queury selectors
const firstName = document.querySelector('#userName');
const userInfo = document.querySelector('#userInfo');
const sleepDay = document.querySelector('#sleepBox');
const sleepWeek = document.querySelector('#sleepBoxWeek');
const sleepAvg = document.querySelector('#sleepBoxAvg');
const hydrationDay = document.querySelector('#hydrationBoxDaily');
const hydrationWeek = document.querySelector('#hydrationBoxWeek');
const hydrationAvg = document.querySelector('#hydrationBoxAvg');
const activityDay = document.querySelector('#activityBoxDaily');
const activityAvg = document.querySelector('#activityBoxAvg');
const activityWeek = document.querySelector('#activityBoxWeek');

// Global Variables
let userList;
let userObj;
let sleepObj;
let hydrationObj;
let activityObj;

// Event listeners
window.addEventListener('load', () => {
  fetchAllData()
  .then(data => {
      userList = data[0].users;
      userObj = new User(data[0].users[Math.floor(Math.random() * 50)]);
      displayCurrentUser(userObj);

      hydrationObj = new Hydration(getUserData('hydrationData', data[1]));
      displayHydration(userObj.id);

      sleepObj = new Sleep(getUserData('sleepData', data[2]));
      displaySleepInfo(sleepObj);

      activityObj = new Activity(getUserData('activityData', data[3]), userObj.strideLength);
      displayActivity(userObj.id);
    });
});
    
// DOM Methods
const getUserData = (infoType, array) => {
  return array[infoType].filter(data => data.userID === userObj.id).reverse();
};

const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<h4>Address: ${user.address}</h4>
  <h4>Email: ${user.email}</h4> 
  <h4>Stride Length: ${user.strideLength}</h4>
  <h4>Daily Step Goal: ${user.dailyStepGoal}</h4>
  <h4>Friends: ${user.getFriends(userList)}</h4>
  <h4>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(userList)}</h4>`
};

const displaySleepInfo = (sleep) => {
  const latestSleep = sleep.data[sleep.data.length - 1];
  const pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept');
  const avgQuality = sleep.getAverage('sleepQuality');
  const avgHours = sleep.getAverage('hoursSlept');
  sleepDay.innerHTML = `<h4>Latest Hours Slept:</h4> ${latestSleep.hoursSlept} Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
  sleepWeek.innerHTML = `<h4>Last 7 Days: ${pastWeekSleep.join(', ')}</h4>`;
  sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)} Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
};

const displayHydration = (userId) => {
  let weekData = hydrationObj.findWeeklyHydration();
  let splitData = weekData.map(num => num + 'oz');
  hydrationWeek.innerHTML = `<h4>Last 7 days: ${splitData.join(', ')}</h4>`;
  hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
  hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
};

const displayActivity = (date) => {
  let currentDate = activityObj.data[0].date;
  activityDay.innerHTML = `<h4>Latest # of Steps: ${activityObj.getStepCount(currentDate)}</h4>`;
  activityAvg.innerHTML = `<h4>Latest # of Minutes Active: ${activityObj.getMinutesActive(currentDate)}</h4>`;
  activityAvg.innerHTML = `<h4>Latest Distance Walked: ${activityObj.calculateMiles(currentDate)}</h4>`;
  activityWeek.innerHTML = `<h4>Weekly Steps: ${activityObj.getLatestWeek()}</h4>`;
};

