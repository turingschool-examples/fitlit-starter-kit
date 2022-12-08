// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// Query Selectors
const header1 = document.querySelector('h1')
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()

// Global variables
let userRepo;
let userClassRepo = [];
let hydrationClassRepo = [];
let sleepClassRepo = [];

// Functions
window.addEventListener('load', function() {
  Promise.all([userPromise, hydrationPromise, sleepPromise])
  .then((values) => {
    userRepo = new UserRepository(values[0],values[1],values[2]);
    console.log("REPO", userRepo);
    createRepos(userClassRepo, 'userData', User);
    createRepos(hydrationClassRepo, 'hydrationData', Hydration);
    createRepos(sleepClassRepo, 'sleepData', Sleep);
    pickRandomUserDisplay();
  });
});

function createRepos(repo, dataVarName, className) {
  userRepo[dataVarName].forEach(value => {
    repo.push(new className(value));
  })
  console.log(repo);
};

function pickRandomUserDisplay() {
  userRepo.randomizeUser();
  console.log(userRepo.selectedUser);
}

import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';