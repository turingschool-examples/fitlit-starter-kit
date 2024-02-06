import userData from './data/users.js';
import hydrationData from './data/hydration.js';
// import { 
//   generateUser, 
//   getAverageStepGoal 
// } from '../scripts';

// const { generateUser, getAverageStepGoal } = require('./scripts.js');
//import { generateUser, getAverageStepGoal } from './scripts'; // Adjust the path as necessary
//import { users } from '../src/data/users'
// ------------- * Event Listeners *
document.addEventListener("DOMContentLoaded", () => {
  displayWelcomeMessage(userObject)
  
  // displayUserInfo(userObject)
  // compareStepGoal(userObject)
})

// function userInfoToDom() {
//  const randomUsers = users.users[Math.floor(Math.random() * users.users.length) + 1];
//  console.log(randomUsers)
// }

// var randomUserId = () => {
//  users.users[Math.floor(Math.random() * users.users.length) + 1];
// }

/* var randomUserId = () => {
  // Note: Assuming `users.users` is an array of user objects with `id` properties.
  // Generate a random index from 0 to users.users.length - 1
  const randomIndex = Math.floor(Math.random() * users.users.length);
  // Return the id of the randomly selected user
  console.log('randomUserId:', users.users[randomIndex].id)
  return users.users[randomIndex].id;
}


var userObject = generateUser(randomUserId()); // Note the parentheses to invoke the function


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