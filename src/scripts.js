// imports //
import './css/styles.css';
import './images/turing-logo.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'
// import userData from './data/users';
import UserRepository from './UserRepository.js';
import userData from 'fitlit/src/apiCalls.js';

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
const dailyHydrationList = document.querySelectorAll('.daily-hydration')
const sleepContentDisplay = document.querySelector('.sleep-content') 

// // sleep //

// // event listeners //
// userIconDisplay.addEventListener('click', showUserInfo)

// // global variables//
// let userNameData = userData[0].name

// // function calls
// showStepsContent()

// // functions //
// function applyUserName(userNameData) {
//   userNameDisplay.innerText = `${userNameData}!`; 
// }
// applyUserName(userNameData)

// function showUserInfo(userNameData) {
//   if (welcomeDisplay.innerText === "WELCOME,") {
//     welcomeDisplay.innerText = `${userData[0].address}`;
//     userNameDisplay.innerText = ""
//   } else {
//     welcomeDisplay.innerHTML = "WELCOME,";
//     userNameDisplay.innerText = `${userData[0].name}!`
//   }
// }

// function showStepsContent(stepsGoal, stepsCurrent) {
//   stepsGoalDisplay.innerText += userData[0].dailyStepGoal
//   stepsCurrentDisplay.innerText = `So far you have taken: 9999`
// }
// function graphStepsContent(params) {

// }

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