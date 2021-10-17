// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';

const header = document.querySelector('.header')

window.addEventListener('load', loadUser);

function loadUser() {
  console.log('>>>>>>>')
  const userRepository = new UserRepository(userData);
  const randomUser = Math.floor(Math.random() * userRepository.users.length);
  const user = new User(userRepository.users[randomUser]);
  displayUserInfo(user)
}

function displayUserInfo(user) {
  header.innerHTML = `
    <h1>Welcome, ${user.displayFirstName()}</h1>
    <p>Name: ${user.name} Address: ${user.address} Email: ${user.email}</p>
  `
}
