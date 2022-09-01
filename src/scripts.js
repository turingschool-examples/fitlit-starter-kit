import './css/styles.css';
import './images/icons8-plus-67.png';
import './images/icons8-sustainable-energy-96.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';

import fetchData from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

let userData;
let sleepData;
let hydrationData;
let currentUser;
let hydration;
let sleep;
let allUsers;

const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('#friendsList');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');

window.addEventListener('load', loadUserInfo);

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

    console.log(currentUser)
    console.log(hydration)
    console.log(sleep)
    console.log(allUsers)
  }
);


function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile();
};

function renderGreeting() {
  // console.log('line 48', JSON.parse(JSON.stringify(currentUser)))
  const userFirstName = currentUser.name.split(' ')[0]; // error happening here
      greeting.innerHTML = `Hello, ${userFirstName}!`;
      console.log(userFirstName)
      // Is coming back correctly with the first name only of the random user
      console.log(currentUser)
      // Is coming back correctly with the whole random User instance object
      console.log(currentUser.name) 
      // Is comming back correctly with the first and last name of the random user 
      console.log(currentUser.name.split(' ')[0]) 
      // is coming back correctly with the first name only of the random user
};

// console.log('function', renderGreeting())

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
