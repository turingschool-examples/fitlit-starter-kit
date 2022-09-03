// imports //
import './css/styles.css';
import './images/turing-logo.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'
import UserRepository from './UserRepository';
import { fetchAll } from './apiCalls';

// global variables //
let userAPIData
let sleepAPIData
let hydrationAPIData
console.log("hi")

// promises //
const getFetch = () => {
  fetchAll()
  .then(data => {
    console.log(data);
    userAPIData = data[0].userData
    sleepAPIData = data[1].sleepData
    hydrationAPIData = data[2].hydrationData
  })
}

// DOM Manipulation //

// header selectors //
const userNameDisplay = document.querySelector('.header-welcome-username')
const userIconDisplay = document.querySelector('.header-userlogo') 
const welcomeDisplay = document.querySelector('.header-welcome') 

// steps selectors//
const stepsGoalDisplay = document.querySelector('.steps-content-goal') 
const stepsCurrentDisplay = document.querySelector('.steps-content-current')
const stepsFriendsList = document.querySelectorAll('.step-friend')
const stepsFriendsDisplay = document.querySelector('.steps-content-friends')
const friend1 = document.getElementById('friend1')
const friend2 = document.getElementById('friend2')
const friend3 = document.getElementById('friend3')
const friend4 = document.getElementById('friend4')
const friend5 = document.getElementById('friend5')

// hydration selectors//
const hydrationContentDisplay = document.querySelector('.hydration-content') 
const dailyHydrationListDisplay = document.querySelectorAll('.daily-hydration')
const hydroDay7Display = document.getElementById('hydro-7')
const hydroDay6Display = document.getElementById('hydro-6')
const hydroDay5Display = document.getElementById('hydro-5')
const hydroDay4Display = document.getElementById('hydro-4')
const hydroDay3Display = document.getElementById('hydro-3')
const hydroDay2Display = document.getElementById('hydro-2')
const hydroDay1Display = document.getElementById('hydro-1')

// sleep selectors //
const sleepContentDisplay = document.querySelector('.sleep-content') 
const sleepArticleDisplay = document.getElementById('avg-sleep')
const avgHoursSleptDisplay = document.getElementById('hours-slept')
const avgSleepQualityDisplay = document.getElementById('sleep-quality')

// event listeners //
userIconDisplay.addEventListener('click', showUserInfo)


// function calls
showStepsContent()

// functions //
function applyUserName() {
  userNameDisplay.innerText = `USER!`; 
}
applyUserName()

function showUserInfo() {
  if (welcomeDisplay.innerText === "WELCOME,") {
    welcomeDisplay.innerText = `USER ADRESS GOES HERE`;
    userNameDisplay.innerText = ""
  } else {
    welcomeDisplay.innerHTML = "WELCOME,";
    userNameDisplay.innerText = `USER!`
  }
}

function showStepsContent(stepsGoal, stepsCurrent) {
  stepsGoalDisplay.innerText += '10,000'
  stepsCurrentDisplay.innerText = `So far you have taken: 9,999`
}

function showStepsFriends() {
    // stepsFriendsList = can probly write a forEach loop here
    stepsFriendsDisplay.innerText = 'Your friends have taken:'
    friend1.innerText = `Friend 1 - DAILY STEP GOAL`
    friend2.innerText = `Friend 2 - DAILY STEP GOAL`
    friend3.innerText = `Friend 3 - DAILY STEP GOAL`
    friend4.innerText = `Friend 4 - DAILY STEP GOAL`
    friend5.innerText = `Friend 5 - DAILY STEP GOAL`
  }
  showStepsFriends()
  
  window.addEventListener('load', getFetch)


  /* experimental */


  let stepsGoalData = 10000
  let stepsTakenData = 9000
  let stepsData = [(stepsGoalData), (stepsGoalData - stepsTakenData)]

  new Chart("steps-pie-chart", {
    type: "pie",
    data: {
      labels: ["Steps Goal", "Steps Remaining"],
      datasets: [{
        label: 'Graph Label', // steps / sleep / hydro
        backgroundColor: ["rgba(4, 104, 255, 0.6)", "rgba(255, 255, 255, 0)"],
        data: stepsData // [steps goal, ]
      }]
    },
    // options: {...}
  });
  

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

new Chart("steps-friends-chart", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Steps By Day', // steps / sleep / hydro
      backgroundColor: barColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

new Chart("hydro-homies", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Oz Drank By Day', // steps / sleep / hydro
      backgroundColor: barColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

new Chart("sleephours", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Sleep Quality By Day', // steps / sleep / hydro
      backgroundColor: barColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});


new Chart("sleepquality", {
  type: "bar",
  data: {
    labels: xValues, // bar titles - add friends' names here
    datasets: [{
      label: 'Sleep Quality By Day', // steps / sleep / hydro
      backgroundColor: barColors,
      data: yValues // add friends' data here
    }]
  },
  // options: {...}
});

