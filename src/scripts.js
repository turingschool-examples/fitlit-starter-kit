// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
// import User fromgit  '../src/User';
// import userData from '../src/data/users'
// import UserRepository from './UserRepository';

// Global Variables
let one = 1

//Query Selectors
var infoBox = document.querySelector('.zero')
  console.log(1)
  console.log(infoBox)

// Event Listeners
infoBox.addEventListener('click', displayUserInfo)

//Event Handlers
function displayUserInfo() {
  console.log("Hi")
  infoBox.innerHTML = "Hello"
}
// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * userRepository.data.length);
  let randomUser = userRepository.data[randomIndex];
  currentUser = new User(randomUser);
}




console.log('This is the JavaScript entry file - your code begins here.');



