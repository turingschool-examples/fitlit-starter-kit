import userData from './data/users.js';
import hydrationData from './data/hydration.js';
import { generateRandomUser } from './scripts'

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

// account-name
function updateAccountName(user) {
  const accountName = document.querySelector('#account-name');
  accountName.textContent = `${user.name}`;
}

// account-address
function updateAccountAddress(user) {
  const accountAddress = document.querySelector('#account-address');
  accountAddress.textContent = `${user.address}`;
}

// account-email
function updateAccountEmail(user) {
  const accountEmail = document.querySelector('#account-email');
  accountEmail.textContent = `${user.email}`;
}

// account-stride
function updateAccountStride(user) {
  const accountStride = document.querySelector('#account-stride');
  accountStride.textContent = `${user.strideLength}ft`;
}

//account-step
function updateAccountStep(user) {
  const accountStep = document.querySelector('#account-step');
  accountStep.textContent = `${user.dailyStepGoal}`;
}

// account-friends
function updateAccountFriends(user) {
  const accountFriends = document.querySelector('#account-friends');
  accountFriends.textContent = `${friendIdsToNames(user)}`;
}

function friendIdsToNames(user) {
  var friendArr = user.friends
  var friendNames = userData.users.reduce((acc, account) => {
    if (friendArr.includes(account.id)) {
      acc.push(account.name)
    }
    return acc
  }, [])
  return friendNames.join(" - ")
}


// Event listener setup function
function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {

    const randomUser = generateRandomUser();
    displayWelcomeMessage(randomUser);
    displayStepGoal(randomUser)
    updateAccountName(randomUser)
    updateAccountAddress(randomUser)
    updateAccountEmail(randomUser)
    updateAccountStride(randomUser)
    updateAccountStep(randomUser)
    updateAccountFriends(randomUser)

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
  updateAccountName,
  updateAccountAddress,
  updateAccountEmail,
  updateAccountStride,
  updateAccountStep,
  updateAccountFriends
};