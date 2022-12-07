

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
const header1 = document.querySelector('h1')
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()

window.addEventListener('load', function() {
  Promise.all([userPromise, hydrationPromise, sleepPromise])
      .then((values) => {
          {
              let userRepo = new UserRepository(values[0],values[1],values[2])
              console.log(userRepo)
          }
  })
});

import apiCalls from './apiCalls';
import UserRepository from './UserRepository';