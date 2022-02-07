// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './js/UserRepository';

const userName = document.querySelector('#userName');
const stepGoal = document.querySelector('#stepGoal');

const users = new UserRepository(userData);
let currentUser;

const getRandomUser = () => {
  currentUser = users.getUser(Math.floor(Math.random() * users.users.length));
}
const updateUser = () => {
  userName.innerText = `Welcome ${currentUser.getName()}`;
  stepGoal.innerText = `Your step goal: ${currentUser.dailyStepGoal} / Average: ${users.averageStepGoal()}`  
}

const start = () => {
  getRandomUser();
  updateUser();
}


window.addEventListener('load', start);
