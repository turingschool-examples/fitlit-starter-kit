// Webpack links
import { fetchAllData } from '../src/apiCalls';
import './css/styles.css';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
import Chart from 'chart.js/auto';

// Queury selectors
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
      activityWeek = document.getElementById('activityBoxWeek');

// Global Variables
let userList,
    userObj,
    sleepObj,
    hydrationObj,
    activityObj;

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
  sleepDay.innerHTML = `<h4>Latest Hours Slept: ${latestSleep.hoursSlept}</h4>
  <h4>Latest Quality of Sleep: ${latestSleep.sleepQuality}</h4>`;
  sleepAvg.innerHTML = `<h4> Average Sleep Quality: ${avgQuality.toFixed(1)}</h4>
  <h4>Average Hours Slept: ${avgHours.toFixed(1)}</h4>`;
  displaySleepChart(pastWeekSleep);
};

const displayHydration = (userId) => {
  let currentDate = hydrationObj.data[0].date
  let weekData = hydrationObj.findWeeklyHydration();
  let splitData = weekData.map(num => num + 'oz');
  hydrationWeek.innerHTML = `<h4>Last 7 days: ${splitData.join(', ')}</h4>`;
  hydrationAvg.innerHTML = `<h4>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</h4>`;
  hydrationDay.innerHTML = `<h4>Fluid ounces drank today: ${hydrationObj.getHydrationSpecificDay(currentDate)}oz</h4>`;
};

const displayActivity = () => {
  let currentDate = activityObj.data[0].date;
  activityDay.innerHTML = `<h4>Latest # of Steps: ${activityObj.getStepCount(currentDate)}</h4>`;
  activityAvg.innerHTML = `<h4>Latest # of Minutes Active: ${activityObj.getMinutesActive(currentDate)}</h4>
    <h4>Latest Distance Walked: ${activityObj.calculateMiles(currentDate)}</h4>`;
  activityWeek.innerHTML = `<h4>Weekly Steps: ${activityObj.getLatestWeek()}</h4>`;
};


//Chart Stuff
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
}