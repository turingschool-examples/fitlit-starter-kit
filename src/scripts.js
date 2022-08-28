// This is the JavaScript entry file - your code begins here
// Query Selectors
let greeting = document.querySelector('.greeting');
let userInfo = document.querySelector('.user-info-container');
let friendsInfo = document.querySelector('.user-friends-container');
let stepGoalInfo = document.querySelector('.step-goal-container');
let hydrationInfo = document.querySelector('.hydration');
let sleepInfo = document.querySelector('.sleep');


// Object instances



// Event listeners
window.addEventListener('load', getRandomUser);
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import User from './User';
import UserRepository from './UserRepository';
import { sampleUsers } from './sample-data';
import { fetchAllData } from './apiCalls';

let allUsers


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

function getRandomUser(userInfo) {
  if (userInfo[0]) {
  allUsers = new UserRepository(userInfo[0].userData)
  let randomUser = allUsers.userData[Math.floor(Math.random() * allUsers.userData.length)]
  let newUser = new User(randomUser)
  renderUserInfo(newUser)
  }
}

function initializeData() {
  Promise.all([fetchAllData('users'), fetchAllData('sleep'), fetchAllData('hydration')]).then(
    (data) =>  {
      getRandomUser(data);
      // console.log("users", data[0].userData);
      // console.log("sleep", data[1]);
      // console.log("hydration", data[2]);
    }
  )
}
initializeData()


function renderUserInfo(newUser) {
  // allUsers = new UserRepository(sampleUsers);

  greeting.innerHTML = `Welcome ${newUser.getUserFirstName()}`
  userInfo.innerHTML = '';

  userInfo.innerHTML +=  `<h3 class="user-info">User Information</h3>
  <h4 class="user-id">User ID: ${newUser.id}</h4>
  <h4 class="user-name">Name: ${newUser.name}</h4>
  <h4 class="user-address">Address: ${newUser.address}</h4>
  <h4 class="user-email">E-Mail: ${newUser.email}</h4>
  <h4 class="user-stride-length">Stride Length: ${newUser.strideLength}</h4>`;

  stepGoalInfo.innerHTML = '';

  // let stepDifference = (allUsers.getUsersAverageStepGoals() - newUser.dailyStepGoal)
  stepGoalInfo.innerHTML +=  `<h3 class="step-goal">Step Goals</h3>
  <h4 class="your-step-goal">Your Goal: ${newUser.dailyStepGoal}</h4>
  <h4 class="all-users-goals">All Users Goals: ${allUsers.getUsersAverageStepGoals()}</h4>`

  // if (newUser.dailyStepGoal < allUsers.getUsersAverageStepGoals()) {
  // `<h4 class="goal-average">Your Goal is below average by ${stepDifference}</h4>`
  // }

  // else if (newUser.dailyStepGoal > allUsers.getUsersAverageStepGoals()) {
  //   let userMoreSteps = (newUser.dailyStepGoal - allUsers.getUsersAverageStepGoals())
  //   `<h4 class="goal-average">Your Goal is above average by ${userMoreSteps}</h4>`
  // } else { 
  //   `<h4 class="goal-average">Your Goal is on track!</h4>`;
  // }

}



