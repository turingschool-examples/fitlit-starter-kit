import './css/styles.css';
import './images/fitlit-logo.png';
import './images/white-texture.png';
import { displayWelcomeMessage, displayAverageDailyOunces, displaySpecificDayOunces, displayWeeklyHydration } from './domUpdates';
import { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData } from './apiCalls';


  
  // fetchData().then(() => {
  //   //functions that need t
  // })
  
  //const currentUser = generateRandomUser();
  // console.log(`Testing for randomly selected user ID: ${currentUser.id}`);
  //const averageOunces = getAverageDailyFluidOunces(currentUser.id, hydration);
  // console.log(`Average daily fluid ounces for user ${currentUser.id}:`, averageOunces);
  
  //const userId = currentUser.id; // ID of the current, randomly selected user
  //const date = '2023/03/24'; // specific date we're interested in
  //const ouncesForDay = getSpecificDay(userId,hydration);
  // console.log(`Fluid ounces consumed by user ${userId} on ${date}:`, ouncesForDay);
  
  //const endDate = '2023/03/31'; // the last date of the 7-day period you want to run back
  //const weeklyHydrationData = getWeeklyFluidOunces(userId, endDate, hydration.hydrationData);


//store the fetched data in veriables
let account, hydration, sleep, activity;


window.onload = (event) => {
 
};

// Function to fetch all necessary data
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

  window.onload = (event) => {
 
    console.log('scripts Promise.all randomUser', generateRandomUser());
    let randomUser = generateRandomUser()
    getAverageStepGoal()
    getAverageDailyFluidOunces(randomUser)
    getSpecificDay(userId)
    getWeeklyFluidOunces(userId)
  };

})
.catch(error => console.error("Error loading data:", error));
console.log(account)
// Adjusted to use global 'account' data
function generateRandomUser() {
  const randomIndex = Math.floor(Math.random() * account.users.length);
  return account.users[randomIndex];
}

// Adjusted to use global 'account' data
function getAverageStepGoal() {
  const totalStepsGoal = account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / account.users.length;
}

// Ensure to adjust the functions to use 'hydration' data once it's fetched
function getAverageDailyFluidOunces(randomUser) {
  const userHydrationData = hydration.hydrationData.filter(userRecord => userRecord.userID === randomUser);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
  return totalOunces / userHydrationData.length
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

export { generateRandomUser, getAverageStepGoal, getAverageDailyFluidOunces, getSpecificDay, getWeeklyFluidOunces };

