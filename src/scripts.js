

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './html-css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
const header1 = document.querySelector('h1')
const userProfile = document.querySelector('#profile')
const welcomeMessage = document.querySelector('#welcomeMessage')
const friendsDisplay = document.querySelector('#friends')
const userPromise = apiCalls.loadUserData()
const hydrationPromise = apiCalls.loadHydrationData()
const sleepPromise = apiCalls.loadSleepData()

let userRepo;
let userClassRepo = [];
let hydrationClassRepo = [];
let sleepClassRepo = [];


window.addEventListener('load', function () {
    Promise.all([userPromise, hydrationPromise, sleepPromise])
        .then((values) => {
            userRepo = new UserRepository(values[0], values[1], values[2])
            userRepo.initialize()

            console.log("USER REPO", userRepo)

            console.log(userRepo);
            displaySelectedUserInformation()
        });
});

function displaySelectedUserInformation() {
    let user = userRepo.selectedUser
    console.log(user)
    friendsDisplay.innerText = `${user.name}`
  }
  

//   Promise.all([userRepo])
//     .then(repo => {
//       // input: userData in promise
//       // output: instatiations of User to be pushed in to a global var array
//       // userData mapped to instatiate User class for each object
//       // Create new attribute inside of each user for hydration and sleep data
//       console.log(repo);
//       repo.userData.forEach(user => {
//         // console.log(userClassRepo);
//         userClassRepo.push(new User(user));
//       })
//       console.log("userRepo", userClassRepo);
//     })
// });

import apiCalls from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
