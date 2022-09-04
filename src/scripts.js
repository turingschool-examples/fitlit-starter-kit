// imports //
import './css/styles.css';
import './images/icons8-avatar-67.png'
import './images/icons8-fire-90.png'
import './images/icons8-sleep-52.png'
import './images/icons8-water-52.png'
import './images/icons8-walking-100.png'
import './images/IMG_4293.png'
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
 
// header selectors //
const userNameDisplay = document.querySelector('.header-welcome-username')
const userIconDisplay = document.querySelector('.header-userlogo') 
const welcomeDisplay = document.querySelector('.header-welcome') 

// steps selectors//
const stepsGoalDisplay = document.querySelector('.steps-content-goal') 
// const stepsCurrentDisplay = document.querySelector('.steps-content-current')
// const stepsFriendsList = document.querySelectorAll('.step-friend')
const stepsFriendsDisplay = document.querySelector('.steps-content-header')
// const friend1 = document.getElementById('friend1')
// const friend2 = document.getElementById('friend2')
// const friend3 = document.getElementById('friend3')
// const friend4 = document.getElementById('friend4')
// const friend5 = document.getElementById('friend5')

// hydration selectors//
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
userIconDisplay.addEventListener('click', showUserInfo)
window.addEventListener('load', getAllData())


//helper function //
function populateDashboard() {
  applyUserName()
  showStepsContent()
  // showUserInfo()
  // renderFriends()
  // renderStepGoal()
  showStepsFriends() 
  
}


// function calls

// functions //
function applyUserName() {
  userNameDisplay.innerText = `${currentUser.returnUserFirstName()}!`; 
}


function showUserInfo() {
  if (welcomeDisplay.innerText === "WELCOME,") {
    welcomeDisplay.innerText = `${currentUser.address}`;
    userNameDisplay.innerText = ""
  } else {
    welcomeDisplay.innerHTML = "WELCOME,";
    userNameDisplay.innerText = `${currentUser.returnUserFirstName()}!`
  }
}

function showStepsContent() {
  stepsGoalDisplay.innerText += `${currentUser.dailyStepGoal}`
  // stepsCurrentDisplay.innerText = `So far you have taken: 9,999`
}

function showStepsFriends() {
    // stepsFriendsList = can probly write a forEach loop here
    friendList.innerHTML= `${createFriendList()}`
  }

function createFriendList() {
  let userFriends = currentUser.friends

  const findFriendsNames = userFriends.reduce((acc, friend) => {
      acc.push(userRepo.findUserData(friend))
    return acc
  }, []).map((friend) => friend.name)
  return findFriendsNames
}

// friends are a list of user IDs
// 