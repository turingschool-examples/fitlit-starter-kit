// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import User from '../src/User'
import Hydration from '../src/Hydration'
import apiCalls from '../src/apiCalls'

// console.log("user data:", User)

let user, hydration, activity

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
const dateMessage = document.querySelector('.date-message')
const stepsToday = document.querySelector('.activity-steps-today')
const distanceWalkedToday = document.querySelector('.activity-distance-today')

// event listeners
window.addEventListener('load', () => {

  // functions 
  Promise.all(apiCalls)
    .then((apiCallsArray) => {
      const usersData = apiCallsArray[0].users
      // const sleepData = apiCallsArray[1].sleep
      const hydrationData = apiCallsArray[2].hydrationData
      const activityData = apiCallsArray[3].activity
      displayRandomUser(usersData)
      displayHydration(hydrationData, usersData)
      displayActivity(activityData, usersData)
      displayDate()
    })
    .catch(error => console.log(error))
})

function displayDate() {
  let date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  dateMessage.innerText = `${date}`
}

function getRandomIndex(usersData) {
  return Math.floor(Math.random() * usersData.length);
}

function displayRandomUser(usersData) {
  user = new User(usersData[getRandomIndex(usersData)]);
  userName.innerText = `Name: ${user.name}`
  userAddress.innerText = `Address: ${user.address}`
  userEmail.innerText = `Email: ${user.email}`
  userStride.innerText = `Stride Length: ${user.strideLength}`
  userSteps.innerText = `Daily Step Goal: ${user.dailyStepGoal}`
  welcomeMessage.innerText = `Hello, ${user.getFirstName(user)}!`
  comparisonSteps.innerText = `The average user is taking ${user.usersAvgDailyStep(usersData)} steps today.`
}

function displayHydration(hydrationData) {
  hydration = new Hydration((hydrationData))
  hydrationToday.innerText = `Daily Intake: ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz`
  hydrationWeekly.innerText = `Weekly Intake: ${hydration.calculateFluidWeekly(user.id)} oz`
}

function displayActivity(activityData) {
  console.log(activityData)
  activity = new Activity(activityData)
  console.log(activity)
  // activity = new Activity(activityData)
  // console.log(activity)
  // stepsToday.innerText = `Steps Today: ${activity.todaysStepCount()}`
  // distanceWalkedToday = `Distance Walked Today: ${activity.milesWalkedByDay(user, '2023/03/24')}`


}

// imports
import SomeClassYouChangeTheName from './SomeClassYouChangeTheName';
import './css/styles.css';
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

const newClass = new SomeClassYouChangeTheName();






