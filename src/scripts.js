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
  return [currentUser.userData.dailyStepGoal, (users.stepGoalAverage() - currentUser.userData.dailyStepGoal)];
}

// Functions
function getUser(sleep, hydration) {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser, sleep, hydration);
}

function getUserFriends() {
  return currentUser.userData.friends
    .map(friend => users.getData(friend).name)
    .join(', ')
}

function displayWater() {
  let dailyWaterIntake = currentUser.getWaterPerDay('2019/06/15');
  return [dailyWaterIntake, 96 - dailyWaterIntake];
}

function displaySleep() {
  let dailySleep = currentUser.sleepOnSpecificDate('2019/06/15');
  return [dailySleep, 12 - dailySleep];
}

function displaySleepQuality() {
  let dailyQuality = currentUser.sleepQualityOnSpecificDate('2019/06/15');
  return [dailyQuality, 5 - dailyQuality];
}

function displayLast7DaysSleep() {
  return currentUser
    .givenWeekSleepDataByDay()
    .map(current => Object.values(current)[0])
}

function displayLast7DaysQuality() {
  return currentUser
    .givenWeeksSleepQualityByDay()
    .map(current => Object.values(current)[0])
}

function displayLast7DaysHydration() {
  return currentUser
    .getWeeklyConsumption()
    .map(current => Object.values(current)[0])
}

function displayAllTimeSleepData() {
  return [currentUser.getOverallQualityAvg(), currentUser.getAverageDailySleep()];
}

function loadPage() {
  getUser(sleep, hydration);
  displayUserInfo();
  displayWelcomeName();
  loadCharts(displayStepGoal(),
    displayWater(),
    displaySleep(),
    displaySleepQuality(),
    displayLast7DaysSleep(),
    displayLast7DaysQuality(),
    displayLast7DaysHydration(),
    displayAllTimeSleepData());
}