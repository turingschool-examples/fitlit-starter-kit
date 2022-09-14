// Import styles:
import dayjs from 'dayjs';  
import './css/styles.css';
import './images/plus.png';
import './images/quick-mode.png';
import './images/water.png';
import './images/zzz.png';
import './images/fitlit-logo.png';

// Import local files:
import { fetchData, postData} from './apiCalls.js';
import charts from './charts.js';
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
let lastHydrateEntry;


// API data
function fetchAllData() {
  Promise.all([fetchData('users', 'userData'), fetchData('sleep', 'sleepData'), fetchData('hydration', 'hydrationData'), fetchData('activity', 'activityData')])
  .then(data => {
    userData = data[0],
    sleepData = data[1],
    hydrationData = data[2],
    activityData = data[3]

    currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    allUsers = new UserRepository(userData);

    //grab last date this user made an entry
    lastSleepEntry = sleep.sleepDataPerUser[sleep.sleepDataPerUser.length - 1].date
    lastHydrateEntry = hydration.ounces[hydration.ounces.length - 1].date
  
    
    loadUserInfo();
  });
};

// Event Listeners
window.addEventListener('load', fetchAllData);

// Helper Functions

// dayjs
const now = dayjs().format().slice(0, 10).split('-').join('/');
console.log(now)


// DOM Functions
function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
  renderSleepAverages();
  charts.renderOuncesPerDay(hydration, lastHydrateEntry);
  charts.renderOuncesByWeek(hydration, 194, 201);
  charts.renderSleepChartByDay(sleep, lastSleepEntry);
  charts.renderSleepChartByWeek(sleep, '2019/06/15', '2019/06/22');
};

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}! <span class="face-icon material-icons">face</span>`;
};

function renderFriendsList() {
  const friendNames = userData.filter(user => {
    if (currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });

  return friendNames.forEach(friend => {
    friendsList.innerHTML += 
    `<button class="friend">${friend.name}</button>`;
  }); 
};

function renderProfile() {
  fullName.innerText = `${currentUser.name}`;
  userAddress.innerText = `${currentUser.email}`;
  userEmail.innerText = `${currentUser.address}`;
  stepGoal.innerText += ` ${currentUser.dailyStepGoal}
  Average Step Goal: ${allUsers.returnAverageStepGoal()}`;
};

function renderSleepAverages() {
  sleepAverages.innerText = `Your Average Hours of Sleep: ${sleep.getAvgSleepData('hoursSlept', true)}
  Average Sleep Quality for all users: ${sleep.getAvgSleepData('sleepQuality', false)}`;
};

// function renderLastEntryDate() {
//   lastEntryDate.innerText = `Last Sleep Entry: ${lastSleepEntry}
//   Last Hydration Entry: ${lastHydrateEntry}`
// }