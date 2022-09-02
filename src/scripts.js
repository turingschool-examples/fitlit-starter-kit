// Import styles:
import './css/styles.css';
import './images/icons8-plus-67.png';
import './images/icons8-sustainable-energy-96.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';

// Import local files:
import fetchData from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

// Import third party libraries:

// Query Selectors
const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('#friendsList');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');

// Global variables
let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;

// API data
function fetchAllData() {
  Promise.all([fetchData('users', 'userData'), fetchData('sleep', 'sleepData'), fetchData('hydration', 'hydrationData'),])
  .then(data => {
    userData = data[0],
    sleepData = data[1],
    hydrationData = data[2],
    currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
    hydration = new Hydration(currentUser.id, hydrationData);
    sleep = new Sleep(currentUser.id, sleepData);
    allUsers = new UserRepository(userData);
    
    loadUserInfo();
  });
}

// Event Listeners
window.addEventListener('load', fetchAllData);

// Helper Functions


// DOM Functions
function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
};

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
      greeting.innerHTML = `Hello, ${userFirstName}!`;
};

function renderFriendsList() {
  const friendNames = userData
  .filter(user => {
    if(currentUser.userFriends.includes(user.id)) {
      return user.name;
    }
  });
  return friendNames.forEach(friend => {
    friendsList.innerHTML += 
    `<button class="friend">${friend.name}</button>`
  }); 
};

function renderProfile() {
  fullName.innerText = `${currentUser.name}`;
  userAddress.innerText = `${currentUser.email}`;
  userEmail.innerText = `${currentUser.address}`;
  stepGoal.innerText = `${currentUser.dailyStepGoal}`;
};
