// imports //
import './css/styles.css'
import './images/icons8-avatar-67.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'

import UserRepository from './UserRepository'
import Hydration from './Hydration'
import User from './User'
import Sleep from './Sleep'

import  { getUsersApiData, getSleepApiData, getHydrationApiData } from './apiCalls'

// global variables //
let currentUser
let usersData
let userRepo
let sleepData
let hydrationData
let todaysDate

// promises //
function getAllData() {
  Promise.all([getUsersApiData, getSleepApiData, getHydrationApiData]).then((data) => {
    usersData = data[0].userData
    sleepData = data[1].sleepData
    hydrationData = data[2].hydrationData

    userRepo = new UserRepository(usersData)
    currentUser = new User(usersData[Math.floor(Math.random() * usersData.length)])
    hydrationData = new Hydration(hydrationData)
    todaysDate = sleepData[sleepData.length - 1].date
    sleepData = new Sleep(sleepData)

    populateDashboard()
  })
}
 
// header selectors //
const userNameDisplay = document.querySelector('.header-welcome-username')
const userIconDisplay = document.querySelector('.header-userlogo') 
const welcomeDisplay = document.querySelector('.header-welcome') 

// steps selectors//
const stepsGoalDisplay = document.querySelector('.steps-content-goal') 

// hydration selectors//
const waterDrankToday = document.getElementById('water-drank-today')
const averageWaterDrank = document.getElementById('avg-water-drank')
const averageWaterThisWeek = document.getElementById('avg-water-week') // used

// sleep selectors //
const avgHoursSleptDisplay = document.getElementById('hours-slept')
const avgSleepQualityDisplay = document.getElementById('sleep-quality-today')
const weeklySleepHoursDisplay = document.getElementById('sleep-hours-weekly')
const allTimeSleepHoursDisplay = document.getElementById('all-time-sleep')
const allTimeSleepQualityDisplay = document.getElementById('all-time-quality')
const userGoalVsAverageGoalDisplay = document.getElementById('step-goal-vs-avg')

// event listeners //
window.addEventListener('load', getAllData())
userIconDisplay.addEventListener('click', showUserInfo)

//helper function //
function populateDashboard() {
  applyUserName()
  showStepsContent()
  createFriendList()
  displayTodaysHydration()
  displayAverageWaterDrank()
  displayWeeklyHydration()
  displayTodaysSleepData()
  displayThisWeeksSleepData()
  displayAllTimeSleepData()
  compareGoals()

  // generateCharts()
}

// functions //
function applyUserName() {
  userNameDisplay.innerText = currentUser.returnUserFirstName() 
}

function showUserInfo() {
  if (welcomeDisplay.innerText === "WELCOME,") {
    welcomeDisplay.innerHTML = `
    ${currentUser.address}, <br>
    Stride Length: ${currentUser.strideLength} ft,<br>
    ${currentUser.email}`
    userNameDisplay.innerText = ""
  } else {
    welcomeDisplay.innerHTML = "WELCOME,"
    userNameDisplay.innerText = `${currentUser.returnUserFirstName()}!`
  }
}

function showStepsContent() {
  stepsGoalDisplay.innerText += `${currentUser.dailyStepGoal}`
}

function compareGoals() {
  userGoalVsAverageGoalDisplay.innerText = `${userRepo.calculateAvgStepGoal()}`
}

function createFriendList() {
  const userFriends = currentUser.friends

  const findFriendsNames = userFriends.reduce((acc, friend) => {
    const friendInfo = userRepo.findUserData(friend)
    acc += `<p>${friendInfo.name}: ${friendInfo.dailyStepGoal}</p>`
    return acc
  }, "")
  friendList.innerHTML = findFriendsNames
}

function displayTodaysHydration() {
  waterDrankToday.innerText = ` ${hydrationData.findWaterConsumedByDate(currentUser.id, '2019/06/26')} fl. oz.`
}

function displayAverageWaterDrank() {
  averageWaterDrank.innerText = ` ${hydrationData.findAverageDailyHydration(currentUser.id)} fl. oz.`
}

function displayWeeklyHydration() { 
  const weeklyHydration = hydrationData.findWeeklyHydration(currentUser.id, todaysDate)
  weeklyHydration.forEach(element => {
    const date = element.date
    const oz = element.numOunces
    averageWaterThisWeek.innerHTML += `${date}: ${oz} fl. oz. <br>` 
  })
}

function displayTodaysSleepData() {
  avgHoursSleptDisplay.innerText = sleepData.findHoursSleptByDate(currentUser.id, todaysDate)
  avgSleepQualityDisplay.innerText = sleepData.findSleepQualityByDate(currentUser.id, todaysDate)
}

function displayThisWeeksSleepData() {
  const thisWeeksSleepData = sleepData.findWeeklySleepData(currentUser.id, todaysDate)
  thisWeeksSleepData.forEach(element => {
    const {date, hoursSlept, sleepQuality} = element
    weeklySleepHoursDisplay.innerHTML += `<p class="bold">${date} <br> Hours:${hoursSlept}, Quality: ${sleepQuality}</p>`
  })
}

function displayAllTimeSleepData() {
  allTimeSleepHoursDisplay.innerText = sleepData.findAverageDailySleep(currentUser.id)

  allTimeSleepQualityDisplay.innerText = sleepData.findAverageSleepQuality(currentUser.id)
}

/* ------ experimental -------- */

function generateCharts() {

// var xValues = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "friend 6", "friend 7"] 
// var yValues = [55, 49, 44, 24, 15, 100, 45]
  var barColors = [
    "rgb(255, 0, 0, .6)", 
    "rgb(255, 125, 0, .6)",
    "rgb(255, 255, 0, .6)",
    "rgb(0, 255, 0, .6)",
    "rgb(0, 0, 255, .6)",
    "rgb(75, 0, 130, .6)",
    "rgb(150, 0, 210, .6)"
  ]
  
  new Chart("compare-avg-goal", {
    type: "bar",
    data: {
      labels: ["Your goal", "Average FitLit Goal"], 
      datasets: [{
        label: 'Your Goal VS AVG',
        backgroundColor: barColors,
        data: [currentUser.dailyStepGoal, userRepo.calculateAvgStepGoal()]
      }]
    },
    // options: {...}
  }) 
}

/*
new Chart("steps-friends-chart", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: "Friends' Step Goals",
      backgroundColor: barColors,
      data: yValues // add friends' step goal data here
    }]
  },
  // options: {...}
})

var hydroColors = [
  "rgba(4, 104, 255, 0.6)"]

new Chart("week-in-water", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - relevant dates here
    datasets: [{
      label: 'OZ Drank Per Day', 
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})

new Chart("chosen-week-in-water", {
  type: "bar",
  data: {
    labels: xValues,  // bar titles - relevant dates here
    datasets: [{
      label: 'OZ Drank Per Day', // steps / sleep / hydro
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})



new Chart("hydro-homies", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hydro Homies', // steps / sleep / hydro
      backgroundColor: hydroColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})

var sleepColors = [
  "rgb(95, 0, 160, .6)"]

new Chart("average-sleep-hours", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hours Slept By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})


new Chart("average-sleep-quality", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Hours Slept By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})

new Chart("sleep-quality", { // missing from DOM
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Sleep Quality By Day', // steps / sleep / hydro
      backgroundColor: sleepColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
})
*/