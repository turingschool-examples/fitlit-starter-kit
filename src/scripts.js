// Webpack Links
import { fetchAllData } from '../src/apiCalls';
import { postActivityData } from '../src/apiCalls';
import { displayChart } from '../src/charts'
import { displayChallengeChart } from '../src/charts';
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
      userInputForm = document.querySelector('form'),
      userInputButton = document.getElementById('userInputBtn'),
      userInputDate = document.getElementById('date'),
      userInputStairs = document.getElementById('flightsOfStairs'),
      userInputMins = document.getElementById('activeMinutes'),
      userInputSteps = document.getElementById('numSteps'),
      modal = document.getElementById('activityModal'),
      openModalBtn = document.getElementById('openModalBtn'),
      span = document.getElementsByClassName("close")[0],
      stepChallengeBox = document.getElementById('stepChallengeBox');

// Global Variables
let userList,
    userObj,
    sleepObj,
    hydrationObj,
    activityObj,
    userChallengeData,
    friendsChallengeData = [];

userInputButton.disabled = true;
// DOM Methods
let changeButton = () => {
  if (userInputDate.value && userInputStairs.value && userInputMins.value && userInputSteps.value) {
    userInputButton.disabled = false;
  }
}

const getUserData = (infoType, array) => {
  return array[infoType].filter(data => data.userID === userObj.id).reverse();
};

const displayCurrentUser = (user) => {
  firstName.innerText = `${user.getName()}`;
  userInfo.innerHTML = `<li>Address: ${user.address}</li>
  <li><b>Email:</b> ${user.email}</li> 
  <li>Stride Length: ${user.strideLength}</li>
  <li>Daily Step Goal: ${user.dailyStepGoal}</li>
  <li>Friends: ${user.getFriends(userList)}</li>
  <li>Your Step Goal Compared to All Users: ${user.dailyStepGoal}/${user.getAverage(userList)}</li>`
};

const displaySleepInfo = (sleep) => {
  let latestSleep = sleep.data[sleep.data.length - 1],
    pastWeekSleep = sleep.getInfoForPastWeek('hoursSlept'),
    avgQuality = sleep.getAverage('sleepQuality'),
    avgHours = sleep.getAverage('hoursSlept');
  sleepInfo.innerHTML = `<li>Latest Hours Slept: ${latestSleep.hoursSlept}</li>
  <li>Latest Quality of Sleep: ${latestSleep.sleepQuality}</li><li> Average Sleep Quality: ${avgQuality.toFixed(1)}</li>
  <li>Average Hours Slept: ${avgHours.toFixed(1)}</li>`
  displayChart(pastWeekSleep, sleepWeek);
};

const displayHydration = (userId) => {
  let currentDate = hydrationObj.data[0].date;
  let weekData = hydrationObj.findWeeklyHydration();
  hydrationInfo.innerHTML = `<li>Average daily water intake: ${hydrationObj.findAvgDailyHydration(userId)}oz</li>
  <li>Fluid ounces drank today: ${hydrationObj.getHydrationSpecificDay(currentDate)}oz</li>`;
  displayChart(weekData, hydrationWeek);
};

const displayActivity = () => {
  let currentDate = activityObj.data[0].date;
  let weekData = activityObj.getLatestWeek();
  activityInfo.innerHTML = `<li>Latest # of Steps: ${activityObj.getDailyActivityInfo(currentDate, 'numSteps')}</li>
  <li>Latest # of Minutes Active: ${activityObj.getDailyActivityInfo(currentDate, 'minutesActive')}</li>
    <li>Latest Distance Walked: ${activityObj.calculateMiles(currentDate)}</li>`;
  displayChart(weekData, activityWeek);
  };

  const getStepChallengeStats = (challenger) => {
    const averageStepGoal = challenger.dailyStepGoal;
    const stepsForTheWeek = challenger.activity.getLatestWeek();
    const dailyGoalAchieved = stepsForTheWeek.filter((steps) => steps >= averageStepGoal)

    return { name: challenger.name, daysReached: dailyGoalAchieved.length }
  }

  const createFriends = (info) => {
    userObj.friends = userObj.friends.map(friend => {
      return new User(userList.find(anom => anom.id === friend))
    });
    userObj.friends.forEach(friend => {
      friend.activity = new Activity(info[3].activityData.filter(activ => activ.userID === friend.id).reverse());
    });
  }  

  const postChallengeStats = () => {
    userChallengeData = getStepChallengeStats(userObj)
    userObj.friends.forEach(friend => {
      friendsChallengeData.push(getStepChallengeStats(friend))
    })
  
  }

// Event Listeners
openModalBtn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
      
      createFriends(data);
      postChallengeStats();
      displayChallengeChart(stepChallengeBox, userChallengeData, friendsChallengeData);
    });
});

userInputDate.addEventListener('input', changeButton);

userInputStairs.addEventListener('input', changeButton);

userInputMins.addEventListener('input', changeButton);

userInputSteps.addEventListener('input', changeButton);

userInputForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const userInputData = {
    userID: userObj.id,
    date: userInputDate,
    flightsOfStairs: parseInt(userInputStairs.value),
    minutesActive: parseInt(userInputMins.value),
    numSteps: parseInt(userInputSteps.value)
  };
  
  postActivityData(userInputData);
  
  userInputForm.reset();
  userInputButton.disabled = true;
  modal.style.display = "none";
});