import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { displayWelcomeMessage, displayAverageDailyOunces, displaySpecificDayOunces, displayWeeklyHydration, setupEventListeners } from './domUpdates';
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
    console.log('Random user data:', appState.randomUser);

    // Assuming domUpdates.js is prepared to handle the updated state
    displayWelcomeMessage(appState.randomUser);
    displayAverageDailyOunces(appState.randomUser.id);
    displaySpecificDayOunces(appState.randomUser.id);
    displayWeeklyHydration(appState.randomUser.id);
    
    // It's essential to call any setup functions that rely on the fetched data
    setupEventListeners(appState);
  })
  .catch(error => console.error("Error loading data:", error));
}

function generateRandomUser(accountData) {
  const randomIndex = Math.floor(Math.random() * accountData.users.length);
  return accountData.users[randomIndex];
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

document.addEventListener('DOMContentLoaded', fetchData);

export { generateRandomUser, getAverageStepGoal, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces };
