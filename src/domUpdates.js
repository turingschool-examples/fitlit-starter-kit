import userData from './data/users.js';
import hydrationData from './data/hydration.js';
import { generateRandomUser } from './scripts'

// ------------- * Event Listeners *
// document.addEventListener("DOMContentLoaded", () => {
//   displayWelcomeMessage(userObject)
  
  // displayUserInfo(userObject)
  // compareStepGoal(userObject)
// })



// DOM update functions
function displayWelcomeMessage(user) {
  const welcomeMessageElement = document.querySelector('.welcome-message');
  welcomeMessageElement.textContent = `Welcome back, ${user.name.split(' ')[0]}!`;
}

function displayStepGoal(user) {
  const averageStepsElement = document.querySelector('.user-step'); //add whatev we make the class
  averageStepsElement.textContent = `${user.dailyStepGoal}`;
}

function compareStepGoalToAverage(averageStepGoal) {
  const stepGoalComparisonElement = document.querySelector('.average-step');//add whatev we make the class
  stepGoalComparisonElement.textContent = `${averageStepGoal}`;
}

// function to get average step goal from userData
function getAverageStepGoal(users) {
  const totalStepGoal = users.reduce((sum, user) => sum += user.dailyStepGoal, 0);
  return totalStepGoal / users.length;
}


// Event listener setup function
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {

    const randomUser = generateRandomUser();
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser)

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