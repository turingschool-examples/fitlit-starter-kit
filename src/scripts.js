import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { displayWelcomeMessage, displaySpecificDayOunces, displayWeeklyHydration, setupEventListeners } from './domUpdates';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData } from './apiCalls';

let appState = {
  account: null,
  hydration: null,
  sleep: null,
  activity: null,
  randomUser: null,
};

function fetchData() {
  Promise.all([
    fetchUserData(),
    fetchHydrationData(),
    fetchSleepData(),
    fetchActivityData(),
  ])
  .then(([userData, hydrationData, sleepData, activityData]) => {
    appState.account = userData;
    appState.hydration = hydrationData;
    appState.sleep = sleepData;
    appState.activity = activityData;

    appState.randomUser = generateRandomUser(appState.account);
    console.log('Random user data:', appState);

    // Assuming domUpdates.js is prepared to handle the updated state
    displayWelcomeMessage(appState.randomUser);
    displaySpecificDayOunces(appState.randomUser.id);
    displayWeeklyHydration(appState.randomUser.id);
    
    // It's essential to call any setup functions that rely on the fetched data
    setupEventListeners(appState.randomUser, appState.account.user);
  })
  .catch(error => console.error("Error loading data:", error));
}

function generateRandomUser(accountData) {
  const randomIndex = Math.floor(Math.random() * accountData.users.length);
  return accountData.users[randomIndex];
}

function getAccountFriends(user) {
  var friendArr = user.friends
  var friendNames = appState.account.users.reduce((acc, account) => {
    if (friendArr.includes(account.id)) {
      acc.push(account.name)
    }
    return acc
  }, [])
  return friendNames.join(" - ")
}

// Adjust this function as needed to use the appState data
function getAverageStepGoal() {
  const totalStepsGoal = appState.account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / appState.account.users.length;
}

// Ensure these functions are correctly accessing hydration data from appState
function getAverageDailyFluidOunces(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(userRecord => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc + userRecord.numOunces, 0);
  return totalOunces / userHydrationData.length;
}

function getSpecificDay(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(record => record.userID === userId);
  const mostRecentRecord = userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  return mostRecentRecord ? mostRecentRecord.numOunces : 0;
}

function getWeeklyFluidOunces(userId) {
  const userHydrationData = appState.hydration.hydrationData.filter(record => record.userID === userId);
  userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastWeekData = userHydrationData.slice(0, 7);
  return lastWeekData.map(record => ({
    date: record.date,
    numOunces: record.numOunces
  }));
}

// Return the user’s average number of hours slept per day
function getAverageSleepHours(randomUser) {
  let sameUserSleepData = appState.sleep.sleepData.filter(user => user.userID === randomUser.id)
  let averageSleepHours = 0
  let totalSleepHours = 0
  sameUserSleepData.forEach(obj => {
    totalSleepHours += obj.hoursSlept
  })
  averageSleepHours = totalSleepHours / sameUserSleepData.length
  return averageSleepHours.toFixed(2)
}

// Return the user’s average sleep quality per day over all time
function getAverageSleepQuality(randomUser) {
  let sameUserSleepData = appState.sleep.sleepData.filter(user => user.userID === randomUser.id)
  let averageSleepQuality = 0
  let totalSleepQuality = 0
  sameUserSleepData.forEach(obj => {
    totalSleepQuality += obj.sleepQuality
  })
  averageSleepQuality = totalSleepQuality / sameUserSleepData.length
  return averageSleepQuality.toFixed(2)
}

// Return a user’s sleep quality for a specific day
function getMostRecentSleepQuality(randomUser) {
  let sameUserSleepData = appState.sleep.sleepData.filter(user => user.userID === randomUser.id)
  let latestSleepData = sameUserSleepData.length - 1
  console.log("latestSleepData", latestSleepData)
  return latestSleepData
}

document.addEventListener('DOMContentLoaded', fetchData);
export { appState, getAccountFriends, getAverageStepGoal, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces, getAverageSleepHours, getAverageSleepQuality, getMostRecentSleepQuality };
