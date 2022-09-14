// Import styles:
import './css/styles.css';
// import './images/icons8-plus-67.png';
import './images/quick-mode.png';
import './images/water.png';
import './images/zzz.png';
import './images/fitlit-logo.png';

// Import local files:
import fetchData from './apiCalls.js';
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

// Global variables
let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;
let activityData;
let lastHydrationEntry;
let firstDayOfLastWeek;

// API data
function fetchAllData() {
  Promise.all([fetchData('users', 'userData'), fetchData('sleep', 'sleepData'), fetchData('hydration', 'hydrationData'), fetchData('activity', 'activityData')])
  .then(data => {
    userData = data[0],
    sleepData = data[1],
    hydrationData = data[2],
    activityData = data[3]
    
    currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
    console.log(currentUser)
    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    allUsers = new UserRepository(userData);

    lastHydrationEntry = hydration.ounces[hydration.ounces.length - 1].date;
    firstDayOfLastWeek = hydration.ounces[hydration.ounces.length - 8].date;
    
    loadUserInfo();
  });
};

// Event Listeners
window.addEventListener('load', fetchAllData);

// Helper Functions

// DOM Functions
function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
  renderSleepAverages();
  charts.renderOuncesByWeek(hydration, firstDayOfLastWeek, lastHydrationEntry);
  charts.renderOuncesPerDay(hydration, lastHydrationEntry);
  
  charts.renderSleepChartByDay(sleep);
  charts.renderSleepChartByWeek(sleep);

};

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
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
  sleepAverages.innerText = `Average Hours of Sleep: ${sleep.getAvgSleepData('hoursSlept', sleepData)}
  Average Sleep Quality: ${sleep.getAvgSleepData('sleepQuality', sleepData)}`;
};