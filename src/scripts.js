// Import styles:
import './css/styles.css';
import './images/quick-mode.webp';
import './images/water.webp';
import './images/zzz.webp';
import './images/down-button.webp';
import './images/fitlit-logo.webp';

// Import local files:
import { fetchData, postData } from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';

// Import third party libraries
import { charts, destroyCharts } from './charts.js';
import dayjs from 'dayjs';

// Query Selectors
const greeting = document.querySelector('.greeting');
let friendsList = document.querySelector('.friends-list');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');
const sleepAverages = document.querySelector('.sleep-averages');
const userInfoButton = document.querySelector('.down-button');
const dropDownBox = document.querySelector('.drop-down');
const addWaterButton = document.querySelector('#waterButton');
const addSleepButton = document.querySelector('#sleepButton');
const addActivityButton = document.querySelector('#activityButton');
const hydrationFormPopup = document.querySelector('#hydrationForm');
const sleepFormPopup = document.querySelector('#sleepForm');
const activityFormPopup = document.querySelector('#activityForm');
const calenderForWeek = document.querySelector('#calendarStart');
const closeHydrate = document.querySelector('#closeHydrationForm');
const closeSleep = document.querySelector('#closeSleepForm');
const closeActivity = document.querySelector('#closeActivityForm');
const updateAllCharts = document.querySelector('#updateCharts');

// Global variables
let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let activity;
let allUsers;
let activityData;
let lastHydrationEntry;
let lastSleepEntry;
let lastActivityEntry;
let lastWeekHydration;
let lastWeekSleep;
let lastWeekActivity;
let chosenDate;
let todayDate;
let isLessThanCurrentDate;

// API data
function fetchAllData() {
  Promise.all([
    fetchData('users', 'userData'),
    fetchData('sleep', 'sleepData'),
    fetchData('hydration', 'hydrationData'),
    fetchData('activity', 'activityData'),
  ]).then((data) => {
      userData = data[0],
      sleepData = data[1],
      hydrationData = data[2],
      activityData = data[3];

    currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    activity = new Activity(currentUser, activityData)
    allUsers = new UserRepository(userData);

    //grab last date this user made an entry
    lastHydrationEntry = hydration.ounces[hydration.ounces.length - 1].date;
    lastSleepEntry = sleep.sleepDataPerUser[sleep.sleepDataPerUser.length - 1].date;
    lastActivityEntry = activity.usersActivity[activity.usersActivity.length - 1].date;

    lastWeekHydration = hydration.ounces[hydration.ounces.length - 7].date;
    lastWeekSleep =  sleep.sleepDataPerUser[sleep.sleepDataPerUser.length - 7].date;
    lastWeekActivity =activity.usersActivity[activity.usersActivity.length - 7].date;
    
    loadUserInfo()
  });
}

// Event Listeners

window.addEventListener('load', fetchAllData);
userInfoButton.addEventListener('click', showUserDetails);
addWaterButton.addEventListener('click', userInputHydrationForm);
addSleepButton.addEventListener('click', userInputSleepForm);
addActivityButton.addEventListener('click', userInputActivityForm);
calenderForWeek.addEventListener('change', changeWeeklyData);
closeHydrate.addEventListener('click', closeHydrationForm);
closeSleep.addEventListener('click', closeSleepForm);
closeActivity.addEventListener('click', closeActivityForm);
updateAllCharts.addEventListener('click', renderUpdatedCharts);
friendsList.addEventListener('click', loadFriendData);
// Helper Functions

// DOM Functions
function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
  renderSleepAverages();

  charts.renderOuncesByWeek(hydration, lastWeekHydration);
  charts.renderOuncesPerDay(hydration, lastHydrationEntry);
  charts.renderSleepChartByDay(sleep, lastSleepEntry);
  charts.renderSleepChartByWeek(sleep, lastWeekSleep);
  charts.renderNumStepsByWeek(activity, lastWeekActivity);
  charts.renderMinutesActiveByWeek(activity, lastWeekActivity);
  charts.renderFlightsClimbedByWeek(activity, lastWeekActivity);
  charts.renderMilesPerDay(activity, lastActivityEntry)
  charts.renderNumStepsPerDay(activity, lastActivityEntry);
  charts.renderMinutesActivePerDay(activity, lastActivityEntry);
  charts.renderFlightsClimbedPerDay(activity, lastActivityEntry);
};

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
};

function renderFriendsList() {
  friendsList.innerHTML = `Click on ${currentUser.name.split(' ')[0]}'s friends to view their profile`;
  const friendNames = userData.filter((user) => {
    if (currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });

  return friendNames.forEach((friend) => {
    
    friendsList.innerHTML += `<button class="friend">${friend.name}</button>`;
  });
};

function renderProfile() {
  fullName.innerHTML = `${currentUser.name}`;

  stepGoal.innerHTML += ` <div>Daily Step Goal: ${currentUser.dailyStepGoal}</div>
  Average Step Goal: ${allUsers.getAverageStepGoal()}`;
};

function renderSleepAverages() {
  sleepAverages.innerText = `Your Average Hours of Sleep: ${sleep.getAvgSleepData(
    'hoursSlept',
    true
  )}
  Average Sleep Quality for all users: ${sleep.getAvgSleepData(
    'sleepQuality',
    false
  )}`;
};

function showUserDetails() {
  dropDownBox.classList.toggle('hidden');
  userAddress.innerText = `Address:  ${currentUser.address}`;
  userEmail.innerText = `Email:  ${currentUser.email}`;
};


function userInputHydrationForm() {
  hydrationFormPopup.classList.remove('hidden');
};

function userInputSleepForm() {
  sleepFormPopup.classList.remove('hidden');
};

function userInputActivityForm() {
  activityFormPopup.classList.remove('hidden');
};

hydrationFormPopup.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newHydrationData = {
    userID: currentUser.id,
    date: formData.get('date'),
    numOunces: parseInt(formData.get('ounces')),
  };
  isLessThanCurrentDate = setTodayDate(newHydrationData.date);

  if (!newHydrationData.date.includes('/') || !isLessThanCurrentDate) {
    alert(checkFormDate(newHydrationData.date, todayDate));
  } else {
    postData('http://localhost:3001/api/v1/activity', newHydrationData);
    event.target.reset();
  }
});

sleepFormPopup.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newSleepData = {  
    userID: currentUser.id,
    date: formData.get('date'),
    hoursSlept: parseInt(formData.get('hours')),
    sleepQuality: parseInt(formData.get('quality'))
  };

  isLessThanCurrentDate = setTodayDate(newSleepData.date);

  if (!newSleepData.date.includes('/') || !isLessThanCurrentDate) {
    alert(checkFormDate(newSleepData.date, todayDate));
  } else {
    postData('http://localhost:3001/api/v1/activity', newSleepData);
    event.target.reset();
  }
});

activityFormPopup.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newActivityData = {  
    userID: currentUser.id,
    date: formData.get('date'),
    numSteps: formData.get('steps'),
    minutesActive: formData.get('minutes'),
    flightsOfStairs: formData.get('flights')
  };
  isLessThanCurrentDate = setTodayDate(newActivityData.date);

  if (!newActivityData.date.includes('/') || !isLessThanCurrentDate) {
    alert(checkFormDate(newActivityData.date, todayDate));
  } else {
    postData('http://localhost:3001/api/v1/activity', newActivityData);
    event.target.reset();
  }
});

function closeHydrationForm() {
  hydrationFormPopup.classList.add('hidden');
}
function closeSleepForm() {
  sleepFormPopup.classList.add('hidden');
}
function closeActivityForm() {
  activityFormPopup.classList.add('hidden');
}

function changeWeeklyData(event) {
  return (chosenDate = dayjs(event.target.value)
    .format()
    .slice(0, 10)
    .split('-')
    .join('/'));
};

function renderUpdatedCharts() {
  destroyCharts();
  Promise.all([
    fetchData('users', 'userData'),
    fetchData('sleep', 'sleepData'),
    fetchData('hydration', 'hydrationData'),
    fetchData('activity', 'activityData'),
  ])
    .then((data) => {
      loadConditions(data)
    });
};

function loadConditions(data) {
  userData = data[0],
  sleepData = data[1],
  hydrationData = data[2],
  activityData = data[3];
  hydration = new Hydration(currentUser.id, hydrationData);
  sleep = new Sleep(currentUser.id, sleepData);
  activity = new Activity(currentUser, activityData);
  allUsers = new UserRepository(userData);

  if (!hydration.ounces.find((data) => data.date == chosenDate) 
  && !sleep.sleepDataPerUser.find((entry) => entry.date === chosenDate) 
  && !activity.usersActivity.find((input) => input.date === chosenDate)) {
    alert ('no data at all!!')
    return 'no data at all!!'
  }
  charts.renderOuncesByWeek(hydration, chosenDate);
  charts.renderOuncesPerDay(hydration, chosenDate);
  charts.renderSleepChartByDay(sleep, chosenDate);
  charts.renderSleepChartByWeek(sleep, chosenDate);
  charts.renderNumStepsByWeek(activity, chosenDate);
  charts.renderMinutesActiveByWeek(activity, chosenDate);
  charts.renderFlightsClimbedByWeek(activity, chosenDate);
  charts.renderMilesPerDay(activity, chosenDate)
  charts.renderNumStepsPerDay(activity, chosenDate);
  charts.renderMinutesActivePerDay(activity, chosenDate);
  charts.renderFlightsClimbedPerDay(activity, chosenDate);
};

function loadFriendData(event) {
  currentUser = new User(allUsers.users.find((user) => user.name === event.target.innerText));
  destroyCharts();
  friendsList.innerHTML = `Click on one of ${currentUser.name.split(' ')[0]}'s friends to view their profile`;
  stepGoal.innerText = '';
  loadUserInfo();
}

function checkFormDate(date, todayDate) {
  if (!date.includes('/')) {
    return 'The date needs to be separated by /. Please try again.';
  } else if (date >= todayDate) {
    return 'You cannot add to a future date. Please try again';
  }
}

function setTodayDate(formDate) {
  const getTodayDate = new Date();
  todayDate = [getTodayDate.getFullYear(), getTodayDate.getMonth() + 1, getTodayDate.getDate()];
  const getFormDate = formDate.split('/').map(str => parseInt(str));

  if (
    todayDate[0] === getFormDate[0] &&
    todayDate[1] === getFormDate[1] &&
    todayDate[2] >= getFormDate[2] 
  ) {
    return true;
  } else {
    return false;
  }
}
