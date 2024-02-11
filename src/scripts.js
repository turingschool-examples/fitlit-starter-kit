import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { displayWelcomeMessage, displayAverageDailyOunces, displaySpecificDayOunces, displayWeeklyHydration, setupEventListeners } from './domUpdates';
import { fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData } from './apiCalls';

let account, hydration, sleep, activity, randomUser;

function fetchData() {
  Promise.all([
    fetchUserData(),
    fetchHydrationData(),
    fetchSleepData(),
    fetchActivityData(),
  ])
  .then(([userData, hydrationData, sleepData, activityData]) => {
    account = userData;
    hydration = hydrationData;
    sleep = sleepData;
    activity = activityData;


    //call the handler in domUpdates
    //handleFetchedData(randomUser, account, hydration, sleep, activity);

    let randomUser = generateRandomUser();
    console.log('Random user data:', randomUser);

    displayWelcomeMessage(randomUser);
    const averageOunces = getAverageDailyFluidOunces(randomUser.id);
    displayAverageDailyOunces(averageOunces);

    const mostRecentOunces = getSpecificDay(randomUser.id);
    displaySpecificDayOunces(mostRecentOunces);

    const weeklyHydrationData = getWeeklyFluidOunces(randomUser.id);
    displayWeeklyHydration(weeklyHydrationData);

    // setupEventListeners()
  })
  .catch(error => console.error("Error loading data:", error));
}

function generateRandomUser() {
  const randomIndex = Math.floor(Math.random() * account.users.length);
  return account.users[randomIndex];
}

function getAverageStepGoal() {
  const totalStepsGoal = account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / account.users.length;
}

function getAverageDailyFluidOunces(userId) {
  const userHydrationData = hydration.hydrationData.filter(userRecord => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc + userRecord.numOunces, 0);
  return totalOunces / userHydrationData.length;
}

function getSpecificDay(userId) {
  const userHydrationData = hydration.hydrationData.filter(record => record.userID === userId);
  const mostRecentRecord = userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  return mostRecentRecord ? mostRecentRecord.numOunces : 0;
}

function getWeeklyFluidOunces(userId) {
  const userHydrationData = hydration.hydrationData.filter(record => record.userID === userId);
  userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastWeekData = userHydrationData.slice(0, 7);
  return lastWeekData.map(record => ({
    date: record.date,
    numOunces: record.numOunces
  }));

}

document.addEventListener('DOMContentLoaded', fetchData);

export { generateRandomUser, getAverageStepGoal, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces, randomUser, account, hydration, sleep, activity };
