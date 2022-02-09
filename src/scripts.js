// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';


// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');
const userStepGoalBox = document.querySelector('.user-step-goals');

//EVENT LISTENERS
welcomeBox.addEventListener('load', updateMainBox());
userStepGoalBox.addEventListener('load', updateStepGoalBox());

// FUNCTIONS

function newUserInstance() {
  const newUser = new User(userData[1]);
  return newUser;
};

function newRepositoryInstance() {
  const newRepo = new UserRepository(userData);
  return newRepo;
}

function welcomeUser() {
  const newUser = newUserInstance();
  console.log(newUserInstance())
  const welcome = newUser.returnFirstName();
  return welcome;
};

function updateMainBox() {
  console.log('hi')
  welcomeBox.innerHTML += `
    <h1>Welcome back, ${welcomeUser()}</h1>
    <p>Email:</p>
    <p>${newUserInstance().email}</p>
    <p>Friends: </p>
    <p>${newUserInstance().friends.length}</p>
    <div class="average-step">
      <p>Your weekly step goal: </p>
      <p>${newUserInstance().dailyStepGoal} </p>
      <p>Average user step goal: </p>
      <p>${newRepositoryInstance().averageStepGoal()} </p>
    </div>`
};

function updateStepGoalBox() {
  const newUser = newUserInstance();
  return newUser.stepGoal
}









console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

// console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
