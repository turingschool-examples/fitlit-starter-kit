// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import User from '../src/User'
import Hydration from '../src/Hydration'
import mock from '../src/data/mock' 
import apiCalls from '../src/apiCalls'

// console.log("user data:", User)

let user, hydration;

// query selectors
const userName = document.querySelector('.user-name')
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStride = document.querySelector('.user-stride')
const userSteps = document.querySelector('.user-steps')
const welcomeMessage = document.querySelector('.welcome-message')
const comparisonSteps = document.querySelector('.comparison-steps')
const hydrationToday = document.querySelector('.hydration-today')
const hydrationWeekly = document.querySelector('.hydration-weekly')

// event listeners
window.addEventListener('load', () => {
Promise.all(apiCalls)
  .then((apiCallsArray) => {
    const usersData = apiCallsArray[0].users
    // const sleepData = apiCallsArray[1].sleep
    // const hydrationData = apiCallsArray[2].hydration
    // const activityData = apiCallsArray[3].activity
  getRandomIndex(usersData)
  displayRandomUser(usersData)
  })
  .catch(error => console.log(error))
})


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomUser(userBeingPassedIn) {
  user = new User(userBeingPassedIn[getRandomIndex(userBeingPassedIn)])
  userName.innerText = `Name: ${user.name}`
  userAddress.innerText = `Address: ${user.address}`
  // userEmail.innerText = `Email: ${user.email}`
  // userStride.innerText = `Stride Length: ${user.strideLength}`
  // userSteps.innerText = `Daily Step Goal: ${user.dailyStepGoal}`
  // welcomeMessage.innerText = `Hello, ${user.getFirstName()}!`
  // comparisonSteps.innerText = `The average user is taking ${user.usersAvgDailyStep()} steps today.`
  // displayHydration()
}

function displayHydration() {
  hydration = new Hydration(mock.hydrationData)
  hydrationToday.innerText = `Daily Intake: ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz`
  hydrationWeekly.innerText = `Weekly Intake: ${hydration.calculateFluidWeekly(user.id)} oz`
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



// An example of how you tell webpack to use a JS file

import userData from './data/users';
// console.log("User Data:", userData);

import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';

const newClass = new SomeClassYouChangeTheName();






