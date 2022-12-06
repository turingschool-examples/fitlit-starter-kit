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

const userRepository = new UserRepository(userData)

console.log(userRepository)

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
window.addEventListener('load', stepGoalDisplay)
// activityBox.addEventListener('click', )
// friendsBox.addEventListener('click', )
// sleepBox.addEventListener('click', )
window.addEventListener('load', displayWelcomeName)


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
  getAllData()
  userInfoList.innerHTML += `<li>${user.userData.name}</li>
                            <li>${user.userData.address}</li> 
                            <li>${user.userData.email}</li>
                            <li>Stride Length: ${user.userData.strideLength}</li>
                            <li>Daily Step Goal: ${user.userData.dailyStepGoal}</li>
                            <li>Friends: ${getUserFriends()}</li>`
}

function displayWelcomeName() {
  activityTrackerTitle.innerText += ` ${user.getFirstName()}`
 }

function stepGoalDisplay() {
  stepGoalBox.innerText = `Your step goal is ${user.userData.dailyStepGoal} steps. The average step goal is ${userRepository.stepGoalAverage()}.`
} 

// Functions
function getUser() {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser);
}

function getUserFriends() {
  let friendsArray = user.userData.friends.map(friend => {
    return userRepository.getData(friend).name
  }) 
  return friendsArray.join(', ')
}



