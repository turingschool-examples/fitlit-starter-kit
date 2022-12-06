// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
// import User fromgit  '../src/User';
// import userData from '../src/data/users'
// import UserRepository from './UserRepository';

// Global Variables
let one = 1

//Query Selectors
 infoBox = document.querySelector('.zero')
 hydrationBox = document.querySelector('.one')
 stepGoalBox = document.querySelector('.two')
 activityBox = document.querySelector('.three')
 friendsBox = document.querySelector('.four')
 sleepBox = document.querySelector('.five')
 activityTrackerTitle = document.querySelector(h1)

// Event Listeners
window.addEventListener('load', displayUserInfo)
// infoBox.addEventListener('click', )
// hydrationBox.addEventListener('click', )
// stepGoalBox.addEventListener('click', )
// activityBox.addEventListener('click', )
// friendsBox.addEventListener('click', )
// sleepBox.addEventListener('click', )
// activityTrackerTitle.addEventListener('click', )


//Event Handlers
function displayUserInfo() {
  infoBox.innerHTML = "Hello"
}

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * userRepository.data.length);
  let randomUser = userRepository.data[randomIndex];
  currentUser = new User(randomUser);
}




console.log('This is the JavaScript entry file - your code begins here.');



