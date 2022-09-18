// Import styles:
import dayjs from 'dayjs';
import './css/styles.css';
import './images/quick-mode.png';
import './images/water.png';
import './images/zzz.png';
import './images/down-button.png';
import './images/fitlit-logo.png';

// Import local files:
import { fetchData, postData } from './apiCalls.js';
import { charts, destroyCharts } from './charts.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

// Query Selectors
const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('.friends-list');
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
const hydrationFormPopup = document.querySelector('.hydration-form-popup');
const sleepFormPopup = document.querySelector('.sleep-form-popup');
const activityFormPopup = document.querySelector('.activity-form-popup');
const calenderForWeek = document.querySelector('#calender-start');
const closeHydrate = document.querySelector('#close-hydration-form');
const closeSleep = document.querySelector('#close-sleep-form');
const closeActivity = document.querySelector('#close-activity-form');
const updateAllCharts = document.querySelector('#updateCharts');

// const lastEntryDate = document.querySelector('#lastEntry');

// Global variables
let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;
let activityData;
let lastSleepEntry;
let lastHydrationEntry;
let firstDayOfLastWeek;
let chosenDate;

// API data
function fetchAllData() {
  Promise.all([
    fetchData('users', 'userData'),
    fetchData('sleep', 'sleepData'),
    fetchData('hydration', 'hydrationData'),
    fetchData('activity', 'activityData'),
  ]).then((data) => {
    (userData = data[0]),
      (sleepData = data[1]),
      (hydrationData = data[2]),
      (activityData = data[3]);

    currentUser = new User(
      userData[Math.floor(Math.random() * userData.length)]
    );

    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    allUsers = new UserRepository(userData);

    //grab last date this user made an entry
    lastSleepEntry = sleep.sleepDataPerUser[sleep.sleepDataPerUser.length - 1].date;
    lastHydrationEntry = hydration.ounces[hydration.ounces.length - 1].date;
    firstDayOfLastWeek = hydration.ounces[hydration.ounces.length - 7].date;

    
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
// Helper Functions

// DOM Functions
function loadUserInfo() {
  
  renderGreeting();
  renderFriendsList();
  renderProfile();
  renderSleepAverages();
  charts.renderOuncesByWeek(hydration, firstDayOfLastWeek);
  charts.renderOuncesPerDay(hydration, lastHydrationEntry);
  charts.renderSleepChartByDay(sleep, lastSleepEntry);
  charts.renderSleepChartByWeek(sleep, firstDayOfLastWeek);
};


function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
};

function renderFriendsList() {
  const friendNames = userData.filter((user) => {
    if (currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });

  return friendNames.forEach((friend) => {
    friendsList.innerHTML += `<button class="friend">${friend.name}</button>`;
  });
}

function renderProfile() {
  fullName.innerHTML = `${currentUser.name}`;

  stepGoal.innerText += ` ${currentUser.dailyStepGoal}
  Average Step Goal: ${allUsers.returnAverageStepGoal()}`;
}

function renderSleepAverages() {
  sleepAverages.innerText = `Your Average Hours of Sleep: ${sleep.getAvgSleepData(
    'hoursSlept',
    true
  )}
  Average Sleep Quality for all users: ${sleep.getAvgSleepData(
    'sleepQuality',
    false
  )}`;
}

function showUserDetails() {
  dropDownBox.classList.toggle('hidden');
  userAddress.innerText = `${currentUser.email}`;
  userEmail.innerText = `${currentUser.address}`;
}

// function renderLastEntryDate() {
//   lastEntryDate.innerText = `Last Sleep Entry: ${lastSleepEntry}
//   Last Hydration Entry: ${lastHydrationEntry}`
// }

function userInputHydrationForm() {
  hydrationFormPopup.classList.remove('hidden');
}

function userInputSleepForm() {
  sleepFormPopup.classList.remove('hidden');
}

function userInputActivityForm() {
  activityFormPopup.classList.remove('hidden');
}

hydrationFormPopup.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newHydrationData = {
    userID: currentUser.id,
    date: formData.get('date'),
    numOunces: parseInt(formData.get('ounces')),
  };

  if (
    newHydrationData.userID &&
    newHydrationData.date &&
    newHydrationData.numOunces
  ) {
    postData('http://localhost:3001/api/v1/hydration', newHydrationData);
  } else {
    return 'Invalid data';
  }
  event.target.reset();
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
  
  if (
    newSleepData.userID &&
    newSleepData.date &&
    newSleepData.hoursSlept &&
    newSleepData.sleepQuality
  ) {
    postData('http://localhost:3001/api/v1/sleep', newSleepData);
  } else {
    return 'Invalid data';
  }
  event.target.reset();
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
  chosenDate = dayjs(event.target.value)
    .format()
    .slice(0, 10)
    .split('-')
    .join('/');
}

function renderUpdatedCharts() {
  destroyCharts();
  Promise.all([
    fetchData('users', 'userData'),
    fetchData('sleep', 'sleepData'),
    fetchData('hydration', 'hydrationData'),
    fetchData('activity', 'activityData'),
  ])
    .then((data) => {
      userData = data[0],
      sleepData = data[1],
      hydrationData = data[2],
      activityData = data[3];
      hydration = new Hydration(currentUser.id, hydrationData);
      sleep = new Sleep(currentUser.id, sleepData);
      allUsers = new UserRepository(userData);
      if (!hydration.ounces.find((data) => data.date == chosenDate)) {
        alert ('no hydration data!!!')
        charts.renderSleepChartByDay(sleep, chosenDate);
        charts.renderSleepChartByWeek(sleep, chosenDate);
      } else if (!sleep.sleepDataPerUser.find((entry) => entry.date === chosenDate)) {
        alert ('no sleep Data!!!')
        charts.renderOuncesByWeek(hydration, chosenDate);
        charts.renderOuncesPerDay(hydration, chosenDate);
      }
    });
};

