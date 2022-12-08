import './css/styles.css';
import './images/turing-logo.png'
import { fetchAll } from './apiCalls'
import User from './User';
import UserRepository from './UserRepository';
import Hydration from './Hydration'
import Sleep from './Sleep'


let allUserData;
let allUserSleep;
let allUserHydro
let currentUser
let currentDate

const userDisplay = document.querySelector('#userInfo')
const userNameDisplay = document.querySelector('#userName')
const userStepGoalAvg = document.querySelector('#stepGoalAvg')
const hydrationBox = document.querySelector('#hydration')
const displayWeekly = document.querySelector('#week')
const sleepBox = document.querySelector('#sleep')

fetchAll()
  .then(data => {
    console.log(data)
    allUserData = new UserRepository(data[0].userData.map(user => new User(user)))
    allUserSleep = new Sleep(data[1].sleepData);
    allUserHydro = new Hydration(data[2].hydrationData)
    currentUser = allUserData.userData[0]
    console.log(allUserHydro)
    currentDate = allUserHydro.data.slice(-1)[0].date
    pageLoadHandler()
})

function pageLoadHandler() {
  displayUserName(currentUser)
  displayUserInfo(currentUser)
  displayComparedStepGoal(currentUser, allUserData)
  displayCurrentDayHydration(allUserHydro, currentDate)
  displayWeeklyInfo(allUserHydro, currentDate)
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

const displayCurrentDayHydration = function(hydration, date) {
  hydrationBox.innerHTML = `
  <p>${hydration.consumeBydate(currentUser.id, date)}</p>`
}

const displayWeeklyInfo = function(hydration, date) {
  displayWeekly.innerHTML = `
  <p>Water ${hydration.returnWeeklyWaterConsumption(currentUser.id, date)}</p>`
}

const displayCurrentDaySleep = function() {

}