// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
import User from '../src/User';
import userData from '../src/data/users'
import UserRepository from './UserRepository';

// Global Variables

//Query Selectors

// Event Listeners

//Event Handlers

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * userRepository.data.length);
  let randomUser = userRepository.data[randomIndex];
  currentUser = new User(randomUser);
}



console.log('This is the JavaScript entry file - your code begins here.');



