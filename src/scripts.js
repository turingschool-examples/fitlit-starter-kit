import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { displayWelcomeMessage, displaySpecificDayOunces, displayWeeklyHydration, setupEventListeners, updateChart } from './domUpdates';
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

    // Assuming domUpdates.js is prepared to handle the updated state
    displayWelcomeMessage(appState.randomUser);
    displaySpecificDayOunces(appState.randomUser.id);
    
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

function getUserSleepData(randomUser) {
return appState.sleep.sleepData.filter(user => user.userID === randomUser.id)
}
// Return the user’s average number of hours slept per day
function getAverageSleepHours(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
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
  let sameUserSleepData = getUserSleepData(randomUser)
  let averageSleepQuality = 0
  let totalSleepQuality = 0
  sameUserSleepData.forEach(obj => {
    totalSleepQuality += obj.sleepQuality
  })
  averageSleepQuality = totalSleepQuality / sameUserSleepData.length
  return averageSleepQuality.toFixed(2)
}

// Return a user’s sleep quality for a specific day
function getMostRecentSleepHours(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let latestSleepDataIndex = sameUserSleepData.length - 1
  return sameUserSleepData[latestSleepDataIndex].hoursSlept
}

// Return a user’s sleep quality for a specific day
function getMostRecentSleepQuality(randomUser) {
  let sameUserSleepData = getUserSleepData(randomUser)
  let latestSleepDataIndex = sameUserSleepData.length - 1
  return sameUserSleepData[latestSleepDataIndex].sleepQuality
}

// This function should be able to calculate this for any week, not just the latest week
// NOTE: this function takes in this date format ---> "2023/06/27"
function getWeeklySleep(randomUser, selectedDay) {
  let selectedWeek = []
  let sameUserSleepData = getUserSleepData(randomUser)
  for (let i = 0; i < sameUserSleepData.length; i++) {
    if (sameUserSleepData[i].date === selectedDay) {
      selectedWeek.push(sameUserSleepData.slice(i - 6, i + 1))
    }
  }
  return {
    weeklySleepHours: getWeeklySleepHours(selectedWeek),
    weeklySleepQuality: getWeeklySleepQuality(selectedWeek)
  }
}

// Return how many *hours* a user slept each day over the course of a given week (7 days)
function getWeeklySleepHours(selectedWeek) {
  console.log(selectedWeek)
  return selectedWeek[0].map(day => day.hoursSlept)
}

// Return a user’s *sleep quality* for each day over the course of a given week (7 days)
function getWeeklySleepQuality(selectedWeek) {
  return selectedWeek[0].map(day => day.sleepQuality)
}



document.addEventListener('DOMContentLoaded', fetchData);
export {
  appState, 
  getAccountFriends, 
  getAverageStepGoal, 
  getAverageDailyFluidOunces, 
  getSpecificDay, 
  getWeeklyFluidOunces, 
  getAverageSleepHours, 
  getAverageSleepQuality, 
  getMostRecentSleepHours,
  getMostRecentSleepQuality,
  getWeeklySleep, 
  getWeeklySleepHours, 
  getWeeklySleepQuality
};


document.getElementById('date-input').addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const inputDate = this.value;
    if (isNaN(Date.parse(inputDate))) {
      alert("Invalid date format! Please try YYYY/MM/DD.");
      console.log('yoooo', inputDate)
      return;
    }

    const randomUser = appState.randomUser;
    const weeklySleepData = getWeeklySleep(randomUser, inputDate)
    console.log('Weekly sleep info:', weeklySleepData)
  }  
});

