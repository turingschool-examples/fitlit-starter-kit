// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

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
const infoCard = document.querySelector('#infoCard');

const users = new UserRepository(userData);
let currentUser;

const getRandomUser = () => {
  currentUser = users.getUser(Math.floor(Math.random() * users.users.length));
}
const updateUser = () => {
  let friends = `Friends: `
  userName.innerText = `Welcome ${currentUser.getName()}`;
  stepGoal.innerText = `Your step goal: ${currentUser.dailyStepGoal} / Average: ${users.averageStepGoal()}`
  currentUser.friends.forEach(friend => {
    friends += `${users.getUser(friend).getName()}, `
  });
  friends = friends.slice(0, -2)
  infoCard.innerHTML = `
    <p>Name: ${currentUser.name}</p>
    <p>Id: ${currentUser.id}</p>
    <p>Address: ${currentUser.address}</p>
    <p>Email: ${currentUser.email}</p>
    <p>Stride Length: ${currentUser.strideLength}</p>
    <p>${friends}</p>`;

  console.log(currentUser)
}

const start = () => {
  getRandomUser();
  updateUser();
}


window.addEventListener('load', start);
