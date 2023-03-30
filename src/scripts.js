// CSS File Import
import './css/styles.css';

// Image Imports
import './images/turing-logo.png';

// import './apiCalls'

// JS File Imports

import UserRepository from './classes/UserRepository';
import User from './classes/User';
import Hydration from './classes/Hydration';

//Global variables
let hydration;
let user;
let userID = 1;
let date = "2023/03/24";

//Query Selectors
const hydrationCard = document.querySelector(".hydration-holder");

// Fetch APIs
fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(userData => {
    const userBase = new UserRepository(userData.users);
    user = new User(userBase.getUser(userID));
    displayUserCard(user);
    displayStepUserVsAllUsers(user, userBase);
    displayUserGreeting(user);
  });

fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then((response) => response.json())
  .then((data) => {
    hydration = new Hydration(data.hydrationData);
    displayhydrationCard(hydration, userID, date);
  });

fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then((response) => response.json())
  .then((data) => {
    sleepData = new Sleep(data.sleepData);
    displayLatestSleepData(sleepData, userID, date);
    displayAllTimeSleepData(sleepData, userID);
    // sleep DOM manipulation functions go here
  });



// Functions
function displayUserCard(user) {
  const userCard = document.querySelector('.user-profile-info-js');
  userCard.innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Address:</b> ${user.address}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Stride Length:</b> ${user.strideLength}</p>
    <p><b>Daily Step Goal</b> ${user.dailyStepGoal}</p>
    <p><b>Friends:</b> ${user.friends}</p>
  `;
}

function displayStepUserVsAllUsers(user, userBase) {
  const stepUserVsAllUsers = document.querySelector('.user-steps-vs-all-js');
  stepUserVsAllUsers.innerHTML = `
    <p><b>Your Step Goal:</b> ${user.dailyStepGoal}</p>
    <p><b>Average Step Goal:</b> ${userBase.calculateAverageStepGoal()}</p>
  `;
}

function displayUserGreeting(user) {
  const userGreeting = document.querySelector('.welcome-header');
  userGreeting.innerHTML = `
<h2>Hi, ${user.getFirstName()}</h2>
`;
}

function displayhydrationCard(hydration, userID, date) {
  hydrationCard.innerHTML = `<p><b>Average Daily Water Consumption:</b> ${hydration.calculateAverageFluidPerUser(
    userID
  )} ounces </p>
   <p><b>Water consumed today:</b> ${hydration.dailyOuncesConsumed(
     userID,
     date
   )} ounces </p> 
  <p><b>Water consumed this week: </b> <br>${hydration.weeklyOuncesConsumed(userID, date).map(day => {
    return `${day.date}: ${day.numOunces} ounces<br>`;
  })} </p>
  `;
}

function displayLatestSleepData(sleepData, userID, date) {
  const latestSleepData = document.querySelector('.latest-sleep-data-js');
  latestSleepData.innerHTML = `
    <p><b>Hours Slept:</b> ${sleepData.calculateDailySleep(userID, date)}</p>
    <p><b>Sleep Quality:</b> ${sleepData.calculateDailySleepQuality(userID, date)}</p>
  `;
};

function displayAllTimeSleepData(sleepData, userID) {
  const allTimeSleepData = document.querySelector('.all-time-sleep-data-js');
  allTimeSleepData.innerHTML = `
    <p><b>Average Hours Slept:</b> ${sleepData.calculateAverageSleep(userID)}</p>
    <p><b>Average Sleep Quality:</b> ${sleepData.calculateAverageSleepQuality(userID)}</p>
  `;
};

// export { displayUserCard, displayStepUserVsAllUsers, displayUserGreeting, displayhydrationCard, displayLatestSleepData, displayAllTimeSleepData}
