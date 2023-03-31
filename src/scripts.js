
// Webpack links
import { fetchApiData } from '../src/apiCalls';
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
  fetchApiData('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(res => res.json())
    .then(data => {
    userList = data.users;
    userObj = new User(data.users[Math.floor(Math.random() * data.users.length)]);
    displayCurrentUser(userObj);
    
    fetchApiData('https://fitlit-api.herokuapp.com/api/v1/sleep')
    .then(res => res.json())
    .then(data => {
      sleepObj = new Sleep(data.sleepData.filter(sleep => sleep.userID === userObj.id))
      displaySleepInfo(sleepObj);
    });
    
    fetchApiData('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then(res => res.json())
    .then(data => {
      hydrationObj = new Hydration(data.hydrationData.filter(hydration => hydration.userID === userObj.id))
      displayHydration(userObj.id);
    });
    
    fetchApiData('https://fitlit-api.herokuapp.com/api/v1/activity')
    .then(res => res.json())
    .then(data => {
      activityObj = new Activity(data.activityData.filter(activity => activity.userID === userObj.id), userObj.strideLength);
      displayActivity(userObj.id);
    });
    });
});
    

// DOM Methods
const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<h4>Address: ${user.address}</h4>
  <h4>Email: ${user.email}</h4> 
  <h4>Stride Length: ${user.strideLength}</h4>
  <h4>Daily Step Goal: ${user.dailyStepGoal}</h4>
  <h4>Friends: ${user.getFriends(userList)}</h4>
  <h4>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(userList)}</h4>`
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
  hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
}

const displayHydrationStats = (userId) => {
  hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
}

const displayHydrationWeek = () => {
  let weekData = hydrationObj.findWeeklyHydration()
  let splitData = weekData.map(num => num + 'oz')
  hydrationWeek.innerHTML = `<h4>Last 7 days: ${splitData.join(', ')}</h4>`
}

const displayHydration = (userId) => {
  displayHydrationAvg(userId);
  displayHydrationStats(userId);
  displayHydrationWeek();
}

const displayActivity = (date) => {
  activityDay.innerHTML = `<h4>Latest # of Steps: ${activityObj.getStepCount()}</h4>`
  activityAvg.innerHTML = `<h4>Latest # of Minutes Active: ${activityObj.getMinutesActive()}</h4>`
  activityAvg.innerHTML = `<h4>Latest Distance Walked: ${activityObj.calculateMiles()}</h4>`
  activityWeek.innerHTML = `<h4>Weekly Step Goal: ${activityObj.getLatestWeek()}</h4>`
}

