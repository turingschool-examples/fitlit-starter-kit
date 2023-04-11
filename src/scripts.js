// Webpack Links
import { fetchAllData } from '../src/apiCalls';
import { postActivityData } from '../src/apiCalls';
import './css/styles.css';
import './images/fitlit-logo.png';
import './images/hydration-logo.png'
import './images/activity-logo.png'
import './images/sleep-logo.png'
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
import Chart from 'chart.js/auto';

// Queury Selectors
const firstName = document.getElementById('userName'),
      userInfo = document.getElementById('userInfo'),
      sleepDay = document.getElementById('sleepBox'),
      sleepWeek = document.getElementById('sleepBoxWeek'),
      sleepAvg = document.getElementById('sleepBoxAvg'),
      hydrationDay = document.getElementById('hydrationBoxDaily'),
      hydrationWeek = document.getElementById('hydrationBoxWeek'),
      hydrationAvg = document.getElementById('hydrationBoxAvg'),
      activityDay = document.getElementById('activityBoxDaily'),
      activityAvg = document.getElementById('activityBoxAvg'),
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

userInputForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const userInputId = document.getElementById('userId').value,
        userInputDate = document.getElementById('date').value,
        userInputStairs = document.getElementById('flightsOfStairs').value,
        userInputMins = document.getElementById('activeMinutes').value,
        userInputSteps = document.getElementById('numSteps').value;

  const userInputData = {
    userID: parseInt(userInputId),
    date: userInputDate,
    flightsOfStairs: parseInt(userInputStairs),
    minutesActive: parseInt(userInputMins),
    numSteps: parseInt(userInputSteps)
  };
  
  postActivityData(userInputData);

  userInputForm.reset();
});
    
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
  sleepDay.innerHTML = `<h4>Latest Hours Slept: ${latestSleep.hoursSlept}</h4>
  <h4>Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
  sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)}</h4>
  <h4>Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
  displaySleepChart(pastWeekSleep);
};

const displayHydration = (userId) => {
  let currentDate = hydrationObj.data[0].date;
  let weekData = hydrationObj.findWeeklyHydration();
  hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
  hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydrationObj.getHydrationSpecificDay(currentDate)}oz</h4>`;
  displayHydrationChart(weekData);
};

const displayActivity = () => {
  let currentDate = activityObj.data[0].date;
  let weekData = activityObj.getLatestWeek();
  activityDay.innerHTML = `<h4>Latest # of Steps: ${activityObj.getDailyActivityInfo(currentDate, 'numSteps')}</h4>`;
  activityAvg.innerHTML = `<h4>Latest # of Minutes Active: ${activityObj.getDailyActivityInfo(currentDate, 'minutesActive')}</h4>
    <h4>Latest Distance Walked: ${activityObj.calculateMiles(currentDate)}</h4>`;
  displayActivityChart(weekData);
  };

//Charts
let displaySleepChart = (sleepWeekData) => {
  const data = [
    { day: "", sleep: 2 },
    { day: "", sleep: 4 },
    { day: "", sleep: 6 },
    { day: "", sleep: 8 },
    { day: "", sleep: 10 },
    { day: "", sleep: 12 },
    { day: "", sleep: 14 },
  ];

  new Chart(
    sleepWeek,
    {
      type: 'line',
      color:'#000000',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: "Sleep",
            data: sleepWeekData,
            pointRadius: 0,
            borderColor: "#FFFFFF"
          }
        ]
      }
    }
  );
};

let displayHydrationChart = (hydrationWeekData) => {
  const data = [
    { day: "", sleep: 15 },
    { day: "", sleep: 30 },
    { day: "", sleep: 45 },
    { day: "", sleep: 60 },
    { day: "", sleep: 75 },
    { day: "", sleep: 90 },
    { day: "", sleep: 105 },
  ];

  new Chart(
    hydrationWeek,
    {
      type: 'line',
      color:'#000000',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: "Hydration",
            data: hydrationWeekData,
            pointRadius: 0,
            borderColor: "#FFFFFF"
          }
        ]
      }
    }
  );
};

let displayActivityChart = (activityWeekData) => {
  const data = [
    { day: "", activity: 2000},
    { day: "", activity: 4000 },
    { day: "", activity: 6000 },
    { day: "", activity: 8000 },
    { day: "", activity: 10000 },
    { day: "", activity: 12000 },
    { day: "", activity: 14000 },
  ];

  new Chart(
    activityWeek,
    {
      type: 'line',
      color:'#000000',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: "Activity",
            data: activityWeekData,
            pointRadius: 0,
            borderColor: "#FFFFFF"
          }
        ]
      }
    }
  );
};