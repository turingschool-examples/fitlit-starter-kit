import './css/styles.css';
import { getAPIData } from './apiCalls';
import User from '../src/User';
import UserRepository from './UserRepository';
import loadCharts from './charts';

// Global Variables
let users;
let sleep;
let hydration;
let currentUser;

//Query Selectors
let activityTrackerTitle = document.querySelector('h1');
let userInfoList = document.querySelector("#userInfoList");

// Event Listeners
window.addEventListener('load', getAllData);

//Event Handlers
function getAllData() {
  Promise.all([getAPIData('users'), getAPIData('sleep'), getAPIData('hydration')])
    .then((data) => {
      users = new UserRepository(data[0]);
      sleep = data[1];
      hydration = data[2];
      loadPage();
    })
    .catch(err => console.log('To err is human', err))
}

function displayUserInfo() {
  userInfoList.innerHTML += `<li>${currentUser.userData.name}</li>
  <li>${currentUser.userData.address}</li> 
  <li>${currentUser.userData.email}</li>
  <li>Stride Length: ${currentUser.userData.strideLength}</li>
  <li>Daily Step Goal: ${currentUser.userData.dailyStepGoal}</li>
  <li>Friends: ${getUserFriends()}</li>`
}

function displayWelcomeName() {
  activityTrackerTitle.innerText += ` ${currentUser.getFirstName()}`;
}

function displayStepGoal() {
  let currentUserStepGoal = currentUser.userData.dailyStepGoal;
  let allUsersStepGoal = users.stepGoalAverage() - currentUserStepGoal;
  let result = [currentUserStepGoal, allUsersStepGoal];
  return result;
}

// Functions
function getUser(sleep, hydration) {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser, sleep, hydration);
}

function getUserFriends() {
  let friendsArray = currentUser.userData.friends.map(friend => {
    return users.getData(friend).name;
  })
  return friendsArray.join(', ');
}

function displayWater() {
  let dailyWaterIntake = currentUser.getWaterPerDay('2019/06/15');
  let dailyWaterGoal = 96 - dailyWaterIntake;
  let result = [dailyWaterIntake, dailyWaterGoal];
  return result;
}

function displaySleep() {
  let dailySleep = currentUser.sleepOnSpecificDate('2019/06/15');
  let maxSleep = 12 - dailySleep;
  let result = [dailySleep, maxSleep];
  return result;
}

function displaySleepQuality() {
  let dailyQuality = currentUser.sleepQualityOnSpecificDate('2019/06/15');
  let maxQuality = 5 - dailyQuality;
  let result = [dailyQuality, maxQuality];
  return result;
}

function displayLast7DaysSleep() {
  let weeklySleepAndDate = currentUser.givenWeekSleepDataByDay();
  let weeklySleep = weeklySleepAndDate.map(current => Object.values(current)[0]);
  return weeklySleep;
}

function displayLast7DaysQuality() {
  let weeklyQualityAndDate = currentUser.givenWeeksSleepQualityByDay();
  let weeklyQuality = weeklyQualityAndDate.map(current => Object.values(current)[0]);
  return weeklyQuality;
}

function displayLast7DaysHydration() {
  let weeklyHydration = currentUser.getWeeklyConsumption();
  let weeklyWater = weeklyHydration.map(current => Object.values(current)[0]);
  return weeklyWater;
}

function displayAllTimeSleepData() {
  let allTimeSleepQualityAvg = currentUser.getOverallQualityAvg();
  let allTimeSleepDurationAvg = currentUser.getAverageDailySleep();
  let result = [allTimeSleepQualityAvg, allTimeSleepDurationAvg];
  return result;
}

function loadPage() {
  getUser(sleep, hydration);
  displayUserInfo();
  displayWelcomeName();
  loadCharts(displayStepGoal(), displayWater(), displaySleep(), displaySleepQuality(), displayLast7DaysSleep(), displayLast7DaysQuality(), displayLast7DaysHydration(), displayAllTimeSleepData());
}