import User from '../src/User'
import Hydration from '../src/Hydration'
import Sleep from '../src/Sleep'
import Activity from '../src/Activity'
import apiCalls from '../src/apiCalls'

// global variables
let user, hydration, activity, sleep, toggle

// query selectors
const userAddress = document.querySelector('.user-address')
const userEmail = document.querySelector('.user-email')
const userStride = document.querySelector('.user-stride')
const userSteps = document.querySelector('.user-steps')
const welcomeMessage = document.querySelector('.welcome-message')
const comparisonSteps = document.querySelector('.comparison-steps')
const hydrationToday = document.querySelector('.hydration-today')
const dateMessage = document.querySelector('.date-message')
const stepsToday = document.querySelector('.activity-steps-today')
const distanceWalkedToday = document.querySelector('.activity-distance-today')
const activeMinutesToday = document.querySelector('.activity-total-today')
const numStepsWeekly = document.querySelector('.activity-steps-weekly')
const goalReached = document.querySelector('.activity-goal')
const sleepToday = document.querySelector('.sleep-today')
const sleepQualityToday = document.querySelector('.sleep-quality-today')
const sleepAverage = document.querySelector('.sleep-average-allTime')
const sleepQualityAll = document.querySelector('.sleep-quality-allTime')
const profileImage = document.querySelector('.profile-image')
const expandedContainer = document.querySelector('.expanded-container')
const userGreeting = document.querySelector('.user-greeting')

// event listeners
profileImage.addEventListener("click", toggleExpanded)
welcomeMessage.addEventListener("click", toggleExpanded)
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
    displayCalendar()
  })
  .catch(error => console.log(error))
})

function getRandomIndex(usersData) {
  return Math.floor(Math.random() * usersData.length)
}

function displayDate() {
  let date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  dateMessage.innerText = `${date}`
}

function htmlDateHelper() {
  var date = new Date()
  var month = ('0' + (date.getMonth() + 1)).slice(-2)
  var day   = ('0' + date.getDate()).slice(-2)
  var year  = date.getFullYear()
  var htmlDate = year + '/' + month + '/' + day
  return htmlDate;
}

function displayRandomUser(usersData) {
  user = new User(usersData[getRandomIndex(usersData)])
  userSteps.innerText = `Your goal is to take ${user.dailyStepGoal} steps today.`
  welcomeMessage.innerText = `${user.name}`
  comparisonSteps.innerText = `The average FitLit user is taking ${user.usersAvgDailyStep(usersData)} steps today.`
}

function displayActivity(activityData) {
  activity = new Activity(activityData)
  var htmlDate = htmlDateHelper()
  stepsToday.innerText = `Steps Taken: ${activity.todaysStepCount(user, htmlDate )}`
  distanceWalkedToday.innerText = `Distance Walked: ${activity.milesWalkedByDay(user, htmlDate)} miles`
  activeMinutesToday.innerText = `Minutes Active: ${activity.minutesActiveByDay(user, htmlDate)} minutes`
  goalReached.innerText = `Goal Reached?: ${activity.reachStepGoal(user, htmlDate)}`
}

function displayHydration(hydrationData) {
  hydration = new Hydration(hydrationData)
  hydrationToday.innerText = `You'ved logged ${hydration.findDailyFluidIntake(user.id, hydration.findUserData(user.id)[0].date)} oz of water today.`
}

function displaySleepActivity(sleepData) {
  sleep = new Sleep(sleepData)
  var htmlDate = htmlDateHelper()
  sleepToday.innerText = `Last Rest: ${sleep.findDailyHours(user, htmlDate)} hours`
  sleepAverage.innerText = `Average Rest: ${sleep.findAvgHours(user)} hours `
  sleepQualityToday.innerText = `Last Rest Quality: ${sleep.findDailyQuality(user, htmlDate)}`
  sleepQualityAll.innerText = `Average Rest Quality: ${sleep.findAvgQuality(user)}`
}

function displayActivityTracker() {
  const ctx = document.querySelector('.activity-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = activity.weeklyStepCount(user, htmlDate)
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return shortenedKeys
  })

Chart.defaults.color = "#EDEDED",

  new Chart(ctx, {
    type: "line",
    data: {
      labels: shortenedKeys,
      datasets:[{
          color: "#fefefe",
          label: 'Goal met?',
          data: activity.reachStepGoal(user, htmlDate),
          backgroundColor: "#28B0EB",
          borderWidth: 0,
        },{
        label: "Steps taken",
        data: activity.chartWeeklySteps(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 1,
        stack: 'combined',
        type: 'bar',
      }]
    },
    options: {
      plugins: {
          legend: {
              display: false
          },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
          }
        },
        y: {
          ticks: {
          }
        }
      }
  }
  });
}

function displaySleepTracker() {
  const ctx = document.querySelector('.sleep-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = sleep.findWeeklyHours(user, htmlDate)
  var dateKeys = Object.keys(weekHoursArray).reverse()
  var shortenedKeys = []
  dateKeys.forEach((key)  =>  {
    shortenedKeys.push(key.slice(5))
    return  shortenedKeys
  })

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: shortenedKeys,
      color: "#fefefe",
      datasets: [{
        color: "#fefefe",
        label: 'Quality of sleep',
        data: sleep.chartWeeklyQuality(user, htmlDate),
        backgroundColor: "#28B0EB",
        borderWidth: 0,
      },
      {
        color: "white",
        label: "Hours slept",
        data: sleep.chartWeeklyHours(user, htmlDate),
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        stack: 'combined',
        type: 'bar',
      },],
    },
    options: {
      plugins: {
          legend: {
              display: false,
              labels:  {
                color: "white",
              },
          },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
    scales: {
      x: {
        ticks: {
          color: "white"
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: "white"
        }
      }
    }
});
}

function displayHydrationTracker() {
  const ctx = document.querySelector('.hydration-chart')
  var htmlDate = htmlDateHelper()
  var weekHoursArray = hydration.calculateFluidWeekly(user, htmlDate)
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
        label: "Ounces drank",
        data: hydration.chartWeeklyFluids(user, htmlDate),
        color: "#EDEDED",
        backgroundColor: ["#CAFCFF", "#89EBF1", "#65CAF6", "#28B0EB", "#2882EB", "#095AB8", "#023572"],
        borderWidth: 0,
      }]
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

function toggleExpanded() {
  if (toggle === true)  {
    toggle = false
    console.log(toggle)
    userGreeting.innerText =  `Welcome back, ${user.name.split(" ")[0]}!`
    userAddress.innerText = `${user.address}`
    userEmail.innerText = `${user.email}`
    userStride.innerText = `Stride Length: ${user.strideLength} ft`
    expandedContainer.style.display = "inline"
  } else {
    toggle = true;
    console.log(toggle)
    expandedContainer.style.display = "none"
  }
  return toggle
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
import './images/friend5-image.png';






