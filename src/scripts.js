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

// function showStepsFriends() {
  //   // stepsFriendsList = can probly write a forEach loop here
  //   stepsFriendsDisplay.innerText = 'Your friends have taken:'
  //   friend1.innerText = `${userData[2].name}: ${userData[2].dailyStepGoal}`
  //   friend2.innerText = `${userData[3].name}: ${userData[3].dailyStepGoal}`
  //   friend3.innerText = `${userData[4].name}: ${userData[4].dailyStepGoal}`
  //   friend4.innerText = `${userData[5].name}: ${userData[5].dailyStepGoal}`
  //   friend5.innerText = `${userData[6].name}: ${userData[6].dailyStepGoal}`
  // }
  // showStepsFriends()
  
  window.addEventListener('load', getFetch)
