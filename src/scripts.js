import './css/styles.css';
import './images/turing-logo.png'
import { fetchAll } from './apiCalls'
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';

let allUserData;
let allUserSleep;
let allUserHydro

const userDisplay = document.querySelector('#userInfo')
const userNameDisplay = document.querySelector('#userName')
const userStepGoalAvg = document.querySelector('#stepGoalAvg')
const hydrationBox = document.querySelector('#hydration')

fetchAll()
  .then(data => {
    allUserData = new UserRepository(data[0].userData.map(user => new User(user)))
    allUserSleep = data[1].sleepData;
    allUserHydro = data[2].hydrationData;
    pageLoadHandler()
})

function pageLoadHandler() {
  const user = allUserData.userData[0]
  console.log(user)
  displayUserName(user)
  displayUserInfo(user)
  displayComparedStepGoal(user, allUserData)
}

const displayUserName = function(user) {
  userNameDisplay.innerText = `Welcome, ${user.getFirstName()}!`
}

const displayUserInfo = function(user) {
  userDisplay.innerHTML = `
  <div>
    <p class="id">${user.id}</p>
    <p class="name">${user.name}</p>
    <p class="address">${user.address}</p>
    <p class="email">${user.email}</p>
    <p class="stride-length">${user.strideLength}</p>
    <p class="daily-step-goal">${user.dailyStepGoal}</p>
    <p class="friends">${user.friends}</p>
  </div>`
}

const displayComparedStepGoal = function(user, repository) {
  userStepGoalAvg.innerHTML = `<p>${user.dailyStepGoal} ${repository.calculateAverageStepGoal()}</p>`
}

const displayCurrentDayHydration = function(currentHydration) {
  hydrationBox.innerHTML = `
  <p>${currentHydration}</p>`
}