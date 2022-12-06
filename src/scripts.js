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
let currentUser

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
    .then(() => getUser())
    .catch(err => console.log('To err is human', err))
}

function displayUserInfo() {
  // infoBox.innerHTML = "Hello"
  getAllData()
}

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser);
}




console.log('This is the JavaScript entry file - your code begins here.');



