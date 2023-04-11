// Webpack Links
import { fetchAllData } from '../src/apiCalls';
// import { postActivityData } from '../src/apiCalls';
import { displayChart } from '../src/charts'
import './css/styles.css';
import './images/fitlit-logo.png';
import './images/hydration-logo.png'
import './images/activity-logo.png'
import './images/sleep-logo.png'
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';


// Queury Selectors
const firstName = document.getElementById('userName'),
      userInfo = document.getElementById('userInfo'),
      sleepInfo = document.getElementById('sleepInfoBox'),
      sleepWeek = document.getElementById('sleepBoxWeek'),
      hydrationInfo = document.getElementById('hydrationInfoBox'),
      hydrationWeek = document.getElementById('hydrationBoxWeek'),
      activityInfo = document.getElementById('activityInfoBox'),
      activityWeek = document.getElementById('activityBoxWeek'),
      userInputForm = document.querySelector('form');


// Global Variables
let userList,
    userObj,
    sleepObj,
    hydrationObj,
    activityObj;

// Event Listeners
window.addEventListener('load', () => {
  fetchAllData()
  .then(data => {
      userList = data[0].users;

      userObj = new User(data[0].users[Math.floor(Math.random() * 50)]);
      displayCurrentUser(userObj);

      userObj.hydration = new Hydration(getUserData('hydrationData', data[1]));
      hydrationObj = userObj.hydration;
      displayHydration(userObj.id);

      userObj.sleep = new Sleep(getUserData('sleepData', data[2]));
      sleepObj = userObj.sleep;
      displaySleepInfo(sleepObj);

      userObj.activity = new Activity(getUserData('activityData', data[3]), userObj.strideLength);
      activityObj = userObj.activity
      displayActivity(userObj.id);
    });
});

// userInputForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const userInputId = document.getElementById('userId').value,
//         userInputDate = document.getElementById('date').value,
//         userInputStairs = document.getElementById('flightsOfStairs').value,
//         userInputMins = document.getElementById('activeMinutes').value,
//         userInputSteps = document.getElementById('numSteps').value;

//   const userInputData = {
//     userID: parseInt(userInputId),
//     date: userInputDate,
//     flightsOfStairs: parseInt(userInputStairs),
//     minutesActive: parseInt(userInputMins),
//     numSteps: parseInt(userInputSteps)
//   };
  
//   postActivityData(userInputData);

//   userInputForm.reset();
// });
    
// DOM Methods
const getUserData = (infoType, array) => {
  return array[infoType].filter(data => data.userID === userObj.id).reverse();
};

const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<h4>Address: ${user.address}</h4>
  <h4><b>Email:</b> ${user.email}</h4> 
  <h4>Stride Length: ${user.strideLength}</h4>
  <h4>Daily Step Goal: ${user.dailyStepGoal}</h4>
  <h4>Friends: ${user.getFriends(userList)}</h4>
  <h4>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(userList)}</h4>`
};

const displaySleepInfo = (sleep) => {
  let latestSleep = sleep.data[sleep.data.length - 1],
    pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept'),
    avgQuality = sleep.getAverage('sleepQuality'),
    avgHours = sleep.getAverage('hoursSlept');
  sleepInfo.innerHTML = `<h4>Latest Hours Slept: ${latestSleep.hoursSlept}</h4>
  <h4>Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4><h4> Average Sleep Quality: ${avgQuality.toFixed(1)}</h4>
  <h4>Average Hours Slept: ${avgHours.toFixed(1)}</h4>`
  displayChart(pastWeekSleep, sleepWeek);
};

const displayHydration = (userId) => {
  let currentDate = hydrationObj.data[0].date;
  let weekData = hydrationObj.findWeeklyHydration();
  hydrationInfo.innerHTML = `<h4>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>
  <h4>Fluid ounces drank today: ${hydrationObj.getHydrationSpecificDay(currentDate)}oz</h4>`;
  displayChart(weekData, hydrationWeek);
};

const displayActivity = () => {
  let currentDate = activityObj.data[0].date;
  let weekData = activityObj.getLatestWeek();
  activityInfo.innerHTML = `<h4>Latest # of Steps: ${activityObj.getDailyActivityInfo(currentDate, 'numSteps')}</h4>
  <h4>Latest # of Minutes Active: ${activityObj.getDailyActivityInfo(currentDate, 'minutesActive')}</h4>
    <h4>Latest Distance Walked: ${activityObj.calculateMiles(currentDate)}</h4>`;
  displayChart(weekData, activityWeek);
  };
