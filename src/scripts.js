// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import {userInfo, userSleepData, userActivityData, userHydrationData} from './fetch.js';

//
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/user.png'

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

const header = document.querySelector('#header')
const activitySection = document.querySelector('#activity')

let userData, sleepData, activityData, hydrationData;

const fetchCall = () => {
  Promise.all([userInfo(), userSleepData(), userActivityData(), userHydrationData()])
    .then(data => parseData(data))
};

const parseData = (data) => {
  // console.log(data[0])
  userData = data[0].userData;
  sleepData = data[1].sleepData;
  activityData = data[2].activityData;
  hydrationData = data[3].hydrationData;
  // allData(userData, sleepData, activityData, hydrationData)
  console.log(userData)
} 

// const allData(userData, sleepData, activityData, hydrationData) => {
//   const userRepository = new UserRepository(userData);
//   const randomUser = Math.floor(Math.random() * userRepository.users.length);
//   const user = new User(userRepository.users[randomUser]);
// }

const loadUser = () => {
  fetchCall();
  const userRepository = new UserRepository(userData);
  const randomUser = Math.floor(Math.random() * userRepository.users.length);
  const user = new User(userRepository.users[randomUser]);
  displayUserInfo(user);
  displayStepGoalComparison(user, userRepository);
}

const displayUserInfo = (user) => {
  header.innerHTML = `
    <div class='welcome-box'>
      <img src="./images/user.png" alt='user-icon' class='header header-image'>
      <h1 class='header'>Welcome, ${user.displayFirstName()}</h1>
    </div>
    <div class='header user-info'>
    <p class='header'>Name: ${user.name}<br>
    Address: ${user.address}<br>
    Email: ${user.email}</p>
    </div>
  `
}

const displayStepGoalComparison = (currentUser, allUsers) => {
  activitySection.innerHTML = `
    <h2 class='activity'>Your daily step goal is ${currentUser.dailyStepGoal}, and the average for everyone is ${allUsers.calculateAvgStepGoal()}<h2>
  `
}

window.addEventListener('load', loadUser);
