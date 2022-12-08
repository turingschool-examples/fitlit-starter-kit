// import './images/turing-logo.png'
//console.log(userData,"<>>>>userData")
import './css/styles.css';
import {getAPIData} from './apiCalls'
import User from '../src/User';
// import userData from '../src/data/users'
import UserRepository from './UserRepository';

// Global Variables
// let one = 1
let users
let sleep
let hydration
let currentUser 

// const userRepository = new UserRepository(userData)
// 
// console.log(userRepository)

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
window.addEventListener('load', getAllData)
// window.addEventListener('load', displayUserInfo)
// infoBox.addEventListener('click', )
// hydrationBox.addEventListener('click', )
// window.addEventListener('load', stepGoalDisplay)
// activityBox.addEventListener('click', )
// friendsBox.addEventListener('click', )
// sleepBox.addEventListener('click', )
// window.addEventListener('load', displayWelcomeName)


//Event Handlers
function getAllData() {
  Promise.all([getAPIData('users'), getAPIData('sleep'), getAPIData('hydration')])
    .then((data) => {
      users = new UserRepository(data[0])
      sleep = data[1]
      hydration = data[2]
      loadPage()
      console.log('hydration', hydration)
      console.log('users', users)
      console.log('currentUser', currentUser)
    })
    .catch(err => console.log('To err is human', err))
}

function displayUserInfo() {
  // getAllData()
  userInfoList.innerHTML += `<li>${currentUser.userData.name}</li>
                            <li>${currentUser.userData.address}</li> 
                            <li>${currentUser.userData.email}</li>
                            <li>Stride Length: ${currentUser.userData.strideLength}</li>
                            <li>Daily Step Goal: ${currentUser.userData.dailyStepGoal}</li>
                            <li>Friends: ${getUserFriends()}</li>`
}

function displayWelcomeName() {
  activityTrackerTitle.innerText += ` ${currentUser.getFirstName()}`
 }

function stepGoalDisplay() {
  stepGoalBox.innerText = `Your step goal is ${currentUser.userData.dailyStepGoal} steps. The average step goal is ${users.stepGoalAverage()}.`
} 

// Functions
function getUser(sleep, hydration) {
  let randomIndex = Math.floor(Math.random() * users.data.userData.length);
  let randomUser = users.data.userData[randomIndex];
  currentUser = new User(randomUser, sleep, hydration);
  console.log('string', currentUser)
}

function getUserFriends() {
  let friendsArray = currentUser.userData.friends.map(friend => {
    return users.getData(friend).name
  }) 
  return friendsArray.join(', ')
}

function loadPage() {
  getUser(sleep, hydration)
  displayUserInfo()
  stepGoalDisplay()
  displayWelcomeName()
}
