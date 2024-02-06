import userData from './data/users.js';
import hydrationData from './data/hydration.js';
// import { 
//   generateUser, 
//   getAverageStepGoal 
// } from '../scripts';

// const { generateUser, getAverageStepGoal } = require('./scripts.js');

import { generateUser, getAverageStepGoal } from './scripts'; // Adjust the path as necessary
import users from './data/users'
console.log('domUpdates:', users)

// ------------- * Event Listeners *
document.addEventListener("DOMContentLoaded", () => {
  console.log("userObject:", userObject)
  console.log("generateUser:", generateUser(30))
  displayWelcomeMessage(userObject)
  
  // displayUserInfo(userObject)
  // compareStepGoal(userObject)
})


var randomUserId = () => {
  const randomIndex = Math.floor(Math.random() * users.users.length);
  console.log(randomIndex)
  console.log('randomUserId:', users.users[randomIndex].id)
  // return users.users[randomIndex].id;
  return 30;
}


var userObject = generateUser(30); // Note the parentheses to invoke the function

//function displayUserInfo(user)

function displayWelcomeMessage(user) {
  console.log("name should be replaced, is this invoked?")
  const firstName = user.name.split(' ')[0];
  const welcomeMessageElement = document.getElementById('welcomeMessage')
  welcomeMessageElement.innerText = `Welcome Back, ${firstName}!`
}
*/

// Import userData from the data file assuming it has a default export
// Uncomment the following line if you have the users data exported as default from the users.js file
// import userData from './data/users.js';

// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}`;
}

function displayStepGoal(user) {
  const averageStepsElement = document.querySelector('.'); //add whatev we make the class
  averageStepsElement.textContent = `Your daily step goal: ${user.dailyStepGoal}`;
}

function compareStepGoalToAverage(averageStepGoal) {
  const stepGoalComparisonElement = document.querySelector('.');//add whatev we make the class
  stepGoalComparisonElement.textContent = `The average daily step goal: ${averageStepGoal}`;
}

// function to get average step goal from userData
function getAverageStepGoal(users) {
  const totalStepGoal = users.reduce((sum, user) => sum + user.dailyStepGoal, 0);
  return totalStepGoal / users.length;
}

// Event listener setup function
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {

    const randomUser = getRandomUser(userData.users);
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser);

    const averageStepGoal = getAverageStepGoal(userData.users);
    compareStepGoalToAverage(averageStepGoal);
  });


  // document.querySelector('.home-button').addEventListener('click', WhatEverWeWantLikehandleHomeButtonClick);
}

setupEventListeners();

// Export all the functions you need to expose
export {
  displayWelcomeMessage,
  displayStepGoal,
  compareStepGoalToAverage,
  // ... any other functions you wish to export
};