// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
import {getAPIData} from './apiCalls'
import User from '../src/User';
// import userData from '../src/data/users'
import UserRepository from './UserRepository';

// Global Variables
let one = 1
let users
let sleep
let hydration

//Query Selectors
var infoBox = document.querySelector('.zero')


// Event Listeners
window.addEventListener('load', displayUserInfo)

//Event Handlers
function getAllData() {
  Promise.all([getAPIData('users'), getAPIData('sleep'), getAPIData('hydration')])
    .then((data) => {
      users = new UserRepository(data[0])
      sleep = data[1]
      hydration = data[2]

      console.log('users', users)
      console.log('sleep', sleep)
      console.log('hydration', hydration)
    })
    .then()

}

function displayUserInfo() {
  // infoBox.innerHTML = "Hello"
  getAllData()
  getUser()
}

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * users.data.length);
  let randomUser = users.data[randomIndex];
  currentUser = new User(randomUser);
  console.log('current user', currentUser)
}




console.log('This is the JavaScript entry file - your code begins here.');



