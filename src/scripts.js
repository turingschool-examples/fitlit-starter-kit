import './css/styles.css';
import './images/icons8-plus-67.png';
import './images/icons8-sustainable-energy-96.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';

import fetchData from './apiCalls.js'
import UserRepository from './UserRepository';
import User from './User';
// import Hydration from './Hydration'
// import Sleep from './Sleep'

let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;

const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('#friendsList');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');

window.addEventListener('load', loadUserInfo);

function fetchAllData() {
  Promise.all([
    fetchData('users', 'userData'),
    fetchData('sleep', 'sleepData'),
    fetchData('hydration', 'hydrationData'),
  ])
    .then(data => {
      userData = data[0],
      sleepData = data[1],
      hydrationData = data[2]
      currentUser = new User(userData[Math.floor(Math.random() * userData.length)])
      // hydration = new Hydration(hydrationData)
      // sleep = new Sleep(sleepData)
      renderGreeting(currentUser);
      renderFriendsList(currentUser, userData);
      renderProfile(currentUser)
    }
  );
}

function loadUserInfo() {
  fetchAllData()
}

function renderGreeting(user) {
  const userFirstName = user.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
}

function renderFriendsList(singleUser, userList) {
  const friendNames = userList
    .filter(user => {
      if(singleUser.userFriends.includes(user.id)) {
        return user.name
      }
    })
  return friendNames.forEach(friend => {
    friendsList.innerHTML += 
    `<button class="friend">${friend.name}</button>`
  }); 
}

function renderProfile(user) {
  fullName.innerText = `${user.name}`;
  userAddress.innerText = `${user.email}`;
  userEmail.innerText = `${user.address}`;
  stepGoal.innerText = `${user.dailyStepGoal}`;
}
