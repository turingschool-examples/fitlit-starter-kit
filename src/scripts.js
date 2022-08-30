// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/icons8-plus-67.png';
import './images/icons8-sustainable-energy-96.png';
import './images/icons8-water-96.png';
import './images/icons8-zzz-96.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
import User from './User';

// randomly generate a user by Id
// render user info inside the userInfo box
// render user's first name
// compare step goal to average step goal of all users

const currentUser = userData[getRandomIndex()];
console.log(currentUser)

const greeting = document.querySelector('.greeting');
const friendsList = document.querySelector('#friendsList');
const fullName = document.querySelector('.full-name');
const userAddress = document.querySelector('.user-address');
const userEmail = document.querySelector('.user-email');
const stepGoal = document.querySelector('.step-goal');


window.addEventListener('load', loadUserInfo);


function getRandomIndex() {
  const min = Math.ceil(1);
  const max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loadUserInfo() {
  renderGreeting();
  renderFriendsList();
  renderProfile()
}

function renderGreeting() {
  const userFirstName = currentUser.name.split(' ')[0];
  greeting.innerHTML = `Hello, ${userFirstName}!`;
}


function renderFriendsList() {
  const friendNames = userData
  .filter(user => {
    if (currentUser.friends.includes(user.id)) {
      return user.name;
    }
  })
  return friendNames.forEach(friend => friendsList.innerHTML += `<button class="friend">${friend.name}</button>`); 
}

const renderProfile = () => {
  fullName.innerText = ` ${currentUser.name}`
  userAddress.innerText = ` ${currentUser.email}`
  userEmail.innerText = ` ${currentUser.address}`
  stepGoal.innerText = ` ${currentUser.dailyStepGoal}`
}
