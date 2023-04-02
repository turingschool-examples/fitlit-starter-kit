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
// const hydrationWeekly = document.querySelector('.hydration-weekly')
const dateMessage = document.querySelector('.date-message')
const stepsToday = document.querySelector('.activity-steps-today')
const distanceWalkedToday = document.querySelector('.activity-distance-today')
const activeMinutesToday = document.querySelector('.activity-total-today')
const numStepsWeekly = document.querySelector('.activity-steps-weekly')
const goalReached = document.querySelector('.activity-goal')
const sleepToday = document.querySelector('.sleep-today')
const sleepQualityToday = document.querySelector('.sleep-quality-today')
// const sleepWeekly = document.querySelector('.sleep-weekly')
// const sleepQualityWeekly = document.querySelector('.sleep-quality-weekly')
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
      displayActivityTracker()
      displayHydrationTracker()
      displaySleepTracker()
    })
    .catch(error => console.log(error))
})

function htmlDateHelper() {
  var date = new Date();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day   = ('0' + date.getDate()).slice(-2);
  var year  = date.getFullYear();
  var htmlDate = year + '/' + month + '/' + day;
  return htmlDate;
}

function displaySleepActivity(sleepData) {
  sleep = new Sleep(sleepData)
  var htmlDate = htmlDateHelper()
  sleepToday.innerText = `Last Rest: ${sleep.findDailyHours(user, htmlDate)} hours`
  sleepAverage.innerText = `Average Rest: ${sleep.findAvgHours(user)} hours `
  sleepQualityToday.innerText = `Last Rest Quality: ${sleep.findDailyQuality(user, htmlDate)}`
  sleepQualityAll.innerText = `Average Rest Quality: ${sleep.findAvgQuality(user)}`
}

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
  welcomeMessage.innerText = `${user.name}`
  comparisonSteps.innerText = `The average user is taking ${user.usersAvgDailyStep(usersData)} steps today.`
}

function displayHydration(hydrationData) {
  hydration = new Hydration(hydrationData)
  hydrationToday.innerText = `You'ved logged ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz of water today.`
}

function displayActivity(activityData) {
  activity = new Activity(activityData)
  var htmlDate = htmlDateHelper()
  stepsToday.innerText = `Steps Taken: ${activity.todaysStepCount(user, htmlDate )}`
  distanceWalkedToday.innerText = `Distance Walked: ${activity.milesWalkedByDay(user, htmlDate)} miles`
  activeMinutesToday.innerText = `Minutes Active: ${activity.minutesActiveByDay(user, htmlDate)} minutes`
  // console.log(activity.weeklyStepCount(user, htmlDate))
  // numStepsWeekly.innerText = `Steps this week: ${activity.weeklyStepCount(user, htmlDate)}`
  goalReached.innerText = `Goal Reached?: ${activity.reachStepGoal(user, htmlDate)}`
}

function displayActivityTracker() {
  const ctx = document.querySelector('.activity-chart');
  var htmlDate = htmlDateHelper()
  var weekHoursArray = activity.weeklyStepCount(user, htmlDate);
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: shortenedKeys,
      datasets: [{
        label: "Steps taken",
        data: activity.chartWeeklySteps(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          ticks: {
            color: "#EDEDED"
          }
        },
        y: {
          ticks: {
            color: "#EDEDED"
          }
        }
      }
  }
  });
}


function displaySleepTracker() {
  const ctx = document.querySelector('.sleep-chart');
  var htmlDate = htmlDateHelper()
  var weekHoursArray = sleep.findWeeklyHours(user, htmlDate);
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: shortenedKeys,
      datasets: [{
        label: "Hours slept",
        data: sleep.chartWeeklyHours(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 0
      }],
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: false,
  }
  });
}

function displayHydrationTracker() {
  const ctx = document.querySelector('.hydration-chart');
  var htmlDate = htmlDateHelper()
  var weekHoursArray = hydration.calculateFluidWeekly(user, htmlDate);
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: shortenedKeys,
      datasets: [{
        label: "Ounces drank",
        data: hydration.chartWeeklyFluids(user, htmlDate),
        color: "#EDEDED",
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          ticks: {
            color: "#EDEDED"
          }
        },
        y: {
          ticks: {
            color: "#EDEDED"
          }
        }
      }
  }
  });
}

// imports
import './css/styles.css';
import './images/logo-image.png';
import './images/profile-image.png';
import './images/background.png';
import './images/background-flip.png';
import './images/spacer-gif.gif';
import './images/friend1-image.png';
import './images/friend2-image.png';
import './images/friend3-image.png';
import './images/friend4-image.png';






