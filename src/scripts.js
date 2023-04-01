// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import User from '../src/User'
import Hydration from '../src/Hydration'
import Sleep from '../src/Sleep'
import Activity from '../src/Activity'
import apiCalls from '../src/apiCalls'

// console.log("user data:", User)

let user, hydration, activity, sleep, date

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
const activeMinutesToday = document.querySelector('.activity-total-today')
const numStepsWeekly = document.querySelector('.activity-steps-weekly')
const goalReached = document.querySelector('.activity-goal')
const sleepToday = document.querySelector('.sleep-today')
const sleepQualityToday = document.querySelector('.sleep-quality-today')
const sleepWeekly = document.querySelector('.sleep-weekly')
const sleepQualityWeekly = document.querySelector('.sleep-quality-weekly')
const sleepAverage = document.querySelector('.sleep-average-allTime')
const sleepQualityAll = document.querySelector('.sleep-quality-allTime')

// event listeners
window.addEventListener('load', () => {

  // functions 
  Promise.all(apiCalls)
    .then((apiCallsArray) => {
      const usersData = apiCallsArray[0].users
      const sleepData = apiCallsArray[1].sleepData
      const hydrationData = apiCallsArray[2].hydrationData
      const activityData = apiCallsArray[3].activityData
      displayRandomUser(usersData)
      displayHydration(hydrationData, usersData)
      displayActivity(activityData, usersData)
      displayDate()
      displaySleepActivity(sleepData)
    })
    .catch(error => console.log(error))
})

function displaySleepActivity(sleepData) {
  sleep = new Sleep(sleepData)
  var date = new Date();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day   = ('0' + date.getDate()).slice(-2);
  var year  = date.getFullYear();
  var htmlDate = year + '/' + month + '/' + day;
  console.log('sleep', sleep.sleepID)
  sleepToday.innerText = `Sleep Today: ${sleep.findDailyHours(user, htmlDate)} hours`
  sleepWeekly.innerText = `Sleep Weekly: ${sleep.findWeeklyHours(user, htmlDate)} hours`
  sleepAverage.innerText = `Sleep Average All Time: ${sleep.findAvgHours(user)} hours `
  sleepQualityToday.innerText = `Sleep Quality Today: ${sleep.findDailyQuality(user, htmlDate)}`
  sleepQualityWeekly.innerText = `Sleep Quality Weekly: ${sleep.findWeeklyQuality(user, htmlDate)}`
  sleepQualityAll.innerText = `Sleep Quality All Time: ${sleep.findAvgQuality(user)}`

}


function displayDate() {
  let date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  // console.log('display date', date)
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
  hydration = new Hydration(hydrationData)
  hydrationToday.innerText = `Daily Intake: ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz`
  hydrationWeekly.innerText = `Weekly Intake: ${hydration.calculateFluidWeekly(user.id)} oz`
}

function displayActivity(activityData) {
  activity = new Activity(activityData)
  var date = new Date();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day   = ('0' + date.getDate()).slice(-2);
  var year  = date.getFullYear();
  var htmlDate = year + '/' + month + '/' + day;
  stepsToday.innerText = `Steps Today: ${activity.todaysStepCount(user, htmlDate )}`
  distanceWalkedToday.innerText = `Distance Walked Today: ${activity.milesWalkedByDay(user, htmlDate)} miles`
  activeMinutesToday.innerText = `Active Minutes Today: ${activity.minutesActiveByDay(user, htmlDate)} minutes`
  numStepsWeekly.innerText = `Steps this week: ${activity.weeklyStepCount(user, htmlDate)}`
  goalReached.innerText = `Goal Reached: ${activity.reachStepGoal(user, htmlDate)}`
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






