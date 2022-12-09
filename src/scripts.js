// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';
import updateHydroDateChart from './activityCharts.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// Query Selectors
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()
const header1 = document.querySelector('h1')
const welcomeMessage = document.querySelector('#welcomeMessage')
const friendsDisplay = document.querySelector('#friends')
const stepGoal = document.querySelector('#stepGoal')
const stepGoalVsAvg = document.querySelector('#stepGoalVsAvg')
const userProfile = document.querySelector('#profile')

// Global variables
let userRepo;

window.addEventListener('load', function () {
    Promise.all([userPromise, hydrationPromise, sleepPromise])
        .then((values) => {
            userRepo = new UserRepository(values[0], values[1], values[2])
            userRepo.initialize()

            console.log("USER REPO", userRepo)

            console.log(userRepo);
            showPersonalizedWelcome();
            showUserInfoDisplay();
            displayUserStepGoal();
            displayStepGoalComparison();
            displaySelectedUserInformation();
            updateHydroDateChart(); //update charts upon page load
        });
});

// Welcome message display
function showPersonalizedWelcome() {
  welcomeMessage.innerText = `--------Welcome, ${userRepo.selectedUser.name}!`;
}

// Info card display
function showUserInfoDisplay() {
  friendsDisplay.innerText = ` `;
  userRepo.selectedUser.friends.forEach(friend => {
    // Added space manually with this interpolation but can fix later with CSS
    friendsDisplay.innerText += `${(userRepo.findUser(friend)).name}
    
    `;
  })
}

// User step goal display
function displayUserStepGoal() {
  stepGoal.innerText = `Step goal: ${userRepo.selectedUser.dailyStepGoal} steps per day`;
}

// Step Goal vs. Avg all users
function displayStepGoalComparison() {
  // Added space manually with this interpolation but can fix later with CSS
  stepGoalVsAvg.innerText = `Your step goal: ${userRepo.selectedUser.dailyStepGoal}

  Average Step Goal: ${userRepo.averageSteps()}`
}

// User Profile Information Dislplay
function displaySelectedUserInformation() {
  // Added space manually with this interpolation but can fix later with CSS
  userProfile.innerText = `${userRepo.selectedUser.name}

  ${userRepo.selectedUser.address}

  ${userRepo.selectedUser.email}

  ${userRepo.selectedUser.dailyStepGoal}

  ${userRepo.selectedUser.strideLength}`
}


import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';

export { userRepo }; //saying it won't export this