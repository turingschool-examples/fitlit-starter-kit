// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';


// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');

//EVENT LISTENERS
welcomeBox.addEventListener('load', updateDOM);

function newUserInstance() {
  const newUser = new User(userData[1]);
  return newUser;
};

function welcomeUser() {
  newUserInstance();
  console.log(newUserInstance())
  const welcome = newUser.returnFirstName();
  return welcome;
};

function updateDOM() {
  console.log(welcomeUser())
  welcomeBox.innerHTML += `<h1>Welcome back, ${welcomeUser()}</h1>`
}











console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
