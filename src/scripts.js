// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
import User from  '../src/User';
// import userData from '../src/data/users'
// import UserRepository from './UserRepository';

// Global Variables

const user = new User ( {
  "id": 1,
  "name": "Luisa Hane",
  "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
  "email": "Diana.Hayes1@hotmail.com",
  "strideLength": 4.3,
  "dailyStepGoal": 10000,
  "friends": [
    16,
    4,
    8
  ]
})

console.log(user)

//Query Selectors
 let infoBox = document.querySelector('.zero')
 let hydrationBox = document.querySelector('.one')
 let stepGoalBox = document.querySelector('.two')
 let activityBox = document.querySelector('.three')
 let friendsBox = document.querySelector('.four')
 let sleepBox = document.querySelector('.five')
 let activityTrackerTitle = document.querySelector('h1')
 let userInfoList = document.querySelector("#userInfoList")

// Event Listeners
window.addEventListener('load', displayUserInfo)
// infoBox.addEventListener('click', )
// hydrationBox.addEventListener('click', )
// stepGoalBox.addEventListener('click', )
// activityBox.addEventListener('click', )
// friendsBox.addEventListener('click', )
// sleepBox.addEventListener('click', )
window.addEventListener('load', displayWelcomeName)


//Event Handlers
function displayUserInfo() {
  console.log('hi')
  userInfoList.innerHTML += `<li>${user.userData.name}</li>
                            <li>${user.userData.address}</li> 
                            <li>${user.userData.email}</li>
                            <li>Stride Length: ${user.userData.strideLength}</li>
                            <li>Daily Step Goal: ${user.userData.dailyStepGoal}</li>
                            <li>Friends: ${user.userData.friends}</li>`
}

function displayWelcomeName() {
  console.log('potato')
  activityTrackerTitle.innerText += ` ${user.getFirstName()}`
 }

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * userRepository.data.length);
  let randomUser = userRepository.data[randomIndex];
  currentUser = new User(randomUser);
}




console.log('This is the JavaScript entry file - your code begins here.');



