// imports //
import './css/styles.css';
import './images/turing-logo.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'

import { fetchAll } from './apiCalls';
import datepicker from 'js-datepicker'

// import userData from './data/users'
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import User from './User';
import  { getUsersApiData, getSleepApiData, getHydrationApiData } from './apiCalls';
import Sleep from './Sleep';
import userData from './data/users';

// global variables //
let currentUser;
let usersData;
let userRepo;
let sleepData;
let hydrationData;

// promises //
function getAllData() {
  Promise.all([getUsersApiData, getSleepApiData, getHydrationApiData]).then((data) => {
    usersData = data[0].userData;
    sleepData = data[1].sleepData;
    hydrationData = data[2].hydrationData;

    console.log('USERS', usersData)
    console.log('SLEEP', sleepData)
    console.log('HYDRATION', hydrationData)

    userRepo = new UserRepository(usersData)
    currentUser = new User(usersData[Math.floor(Math.random() * usersData.length)]);
    hydrationData = new Hydration(hydrationData)
    sleepData = new Sleep(sleepData)
    populateDashboard()
  });
}
// DOM Manipulation //

// header selectors //
const userNameDisplay = document.querySelector('.header-welcome-username')
const userIconDisplay = document.querySelector('.header-userlogo') 
const welcomeDisplay = document.querySelector('.header-welcome') 

// steps selectors//
const stepsGoalDisplay = document.querySelector('.steps-content-goal') 
// const stepsCurrentDisplay = document.querySelector('.steps-content-current')
// const stepsFriendsList = document.querySelectorAll('.step-friend')
// const stepsFriendsDisplay = document.querySelector('.steps-content-header')
// const friend1 = document.getElementById('friend1')
// const friend2 = document.getElementById('friend2')
// const friend3 = document.getElementById('friend3')
// const friend4 = document.getElementById('friend4')
// const friend5 = document.getElementById('friend5')

// hydration selectors//
const waterDrankToday = document.getElementById('water-drank-today')
const averageWaterDrank = document.getElementById('avg-water-drank')
const averageWaterThisWeek = document.getElementById('avg-water-week') // used
const chosenWaterDrankByDate = document.getElementById('display-water-drank-on-date')





// const hydrationContentDisplay = document.querySelector('.hydration-content') 
// const dailyHydrationListDisplay = document.querySelectorAll('.daily-hydration')
// const hydroDay7Display = document.getElementById('hydro-7')
// const hydroDay6Display = document.getElementById('hydro-6')
// const hydroDay5Display = document.getElementById('hydro-5')
// const hydroDay4Display = document.getElementById('hydro-4')
// const hydroDay3Display = document.getElementById('hydro-3')
// const hydroDay2Display = document.getElementById('hydro-2')
// const hydroDay1Display = document.getElementById('hydro-1')


// sleep selectors //
// const sleepContentDisplay = document.querySelector('.sleep-content') 
// const sleepArticleDisplay = document.getElementById('avg-sleep')
// const avgHoursSleptDisplay = document.getElementById('hours-slept')
// const avgSleepQualityDisplay = document.getElementById('sleep-quality')


// event listeners //
window.addEventListener('load', getAllData())
userIconDisplay.addEventListener('click', showUserInfo)

//helper function //
function populateDashboard() {
  applyUserName()
  showStepsContent()
  displayTodaysHydration()
  displayAverageWaterDrank()
  displayWeeklyHydration()
  displayWaterFromChosenDay()
  // showStepsFriends()
  generateCharts()
}

// functions //
function applyUserName() {
  userNameDisplay.innerText = currentUser.returnUserFirstName(); 
}

function showUserInfo() {
  if (welcomeDisplay.innerText === "WELCOME,") {
    welcomeDisplay.innerHTML = `
    ${currentUser.address}, <br>
    Stride Length: ${currentUser.strideLength},<br>
    ${currentUser.email}`;
    userNameDisplay.innerText = ""
  } else {
    welcomeDisplay.innerHTML = "WELCOME,";
    userNameDisplay.innerText = `${currentUser.returnUserFirstName()}!`
  }
}

function showStepsContent() {
  stepsGoalDisplay.innerText += currentUser.dailyStepGoal
  // stepsCurrentDisplay.innerText = `So far you have taken: 9,999`
}

// function showStepsFriends() {
//     // stepsFriendsList = can probly write a forEach loop here
//     stepsFriendsDisplay.innerText = 'Your friends have taken:'
//     friend1.innerText = `Friend 1 - DAILY STEP GOAL`
//     friend2.innerText = `Friend 2 - DAILY STEP GOAL`
//     friend3.innerText = `Friend 3 - DAILY STEP GOAL`
//     friend4.innerText = `Friend 4 - DAILY STEP GOAL`
//     friend5.innerText = `Friend 5 - DAILY STEP GOAL`
//   }


function displayTodaysHydration() { // "today"
  waterDrankToday.innerText = ` ${hydrationData.findWaterConsumedByDate(currentUser.id, '2019/06/26')} fl. oz.`
}

function displayAverageWaterDrank() {
  averageWaterDrank.innerText = ` ${hydrationData.findAverageDailyHydration(currentUser.id)} fl. oz.`
}

function displayWeeklyHydration() { // current week
  // averageWaterThisWeek.innerText = `${hydrationData.findWeeklyHydration(currentUser.id, '2019/06/26')} fl. oz.` 
}

const waterDrankOnDatePicker = document.getElementById('choose-water-drank-on-date')

function displayWaterFromChosenDay() {
  chosenWaterDrankByDate.innertext = waterDrankOnDatePicker.input
}


/* ------ experimental -------- */


// let stepsTakenData = 9000
// let stepsData = [(currentUser.dailyStepGoal), (currentUser.dailyStepGoal - stepsTakenData)]

function generateCharts() {

var xValues = ["Friend 1", "Friend 2", "Friend 3", "Friend 4", "Friend 5", "friend 6", "friend 7"]; 
var yValues = [55, 49, 44, 24, 15, 100, 45];
var barColors = [
  "rgb(255, 0, 0, .6)", 
  "rgb(255, 125, 0, .6)",
  "rgb(255, 255, 0, .6)",
  "rgb(0, 255, 0, .6)",
  "rgb(0, 0, 255, .6)",
  "rgb(75, 0, 130, .6)",
  "rgb(150, 0, 210, .6)"];
  
  new Chart("compare-avg-goal", {
    type: "bar",
    data: {
      labels: ["Your goal", "Average FitLit Goal"], 
      datasets: [{
        label: 'Your Goal VS AVG', // steps / sleep / hydro
        backgroundColor: barColors,
        data: [currentUser.dailyStepGoal, userRepo.calculateAvgStepGoal()] // array containing user goal, average of all users goals
      }]
    },
    // options: {...}
  }); 
}


// new Chart("steps-friends-chart", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: "Friends' Step Goals",
//       backgroundColor: barColors,
//       data: yValues // add friends' step goal data here
//     }]
//   },
//   // options: {...}
// });

var hydroColors = [
  "rgba(4, 104, 255, 0.6)"];

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
});

// new Chart("chosen-week-in-water", {
//   type: "bar",
//   data: {
//     labels: xValues,  // bar titles - relevant dates here
//     datasets: [{
//       label: 'OZ Drank Per Day', // steps / sleep / hydro
//       backgroundColor: hydroColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });



// new Chart("hydro-homies", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hydro Homies', // steps / sleep / hydro
//       backgroundColor: hydroColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

var sleepColors = [
  "rgb(95, 0, 160, .6)"]

// new Chart("average-sleep-hours", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hours Slept By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });


// new Chart("average-sleep-quality", {
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Hours Slept By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

// new Chart("sleep-quality", { // missing from DOM
//   type: "bar",
//   data: {
//     labels: xValues, // bar titles - add friends' names here
//     datasets: [{
//       label: 'Sleep Quality By Day', // steps / sleep / hydro
//       backgroundColor: sleepColors,
//       data: yValues // add friends' data here
//     }]
//   },
//   // options: {...}
// });

