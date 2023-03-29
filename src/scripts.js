// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import User from '../src/User'
import mock from '../src/data/mock' 
// console.log("user data:", User)

let user;

// query selectors
const userName = document.querySelector('.user-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStride = document.querySelector('.user-stride')
const userSteps = document.querySelector('.user-steps')

window.addEventListener('load', displayRandomUser() )

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomUser() {
  user = new User(mock.users[getRandomIndex(mock.users)])
  userName.innerText = user.name
  // userAddress.innerText = user.address
  // userEmail.innerText = user.email
  userStride.innerText = `Stride Length: ${user.strideLength}`
  userSteps.innerText = `Daily Step Goal: ${user.dailyStepGoal}`

}


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/activity-tracker-png.png';
import './images/sleep-tracker-png.png';
import './images/background-placeholder.png';
import './images/profile-placeholder.png';
import './images/logo-left.png';
import './images/logo-right.png';
import './images/calendar-placeholder.png';
import './images/friend-placeholder.png';
import './images/water-placeholder.png';
import './images/activity-placeholder.png';
import './images/sleep-placeholder.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
// console.log("User Data:", userData);

import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';

const newClass = new SomeClassYouChangeTheName();






