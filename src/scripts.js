import './css/styles.css';
import './images/turing-logo.png'
import { fetchAll } from './apiCalls'

import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';

let allUserData;
let allUserSleep;
let allUserHydro


const getFetch = () => {
  return fetchAll()
  .then(data => {
    allUserData = data[0].userData;
    allUserSleep = data[1].sleepData;
    allUserHydro = data[2].hydrationData;
    pageLoadHandler(allUserData, allUserSleep, allUserHydro)
})
}


function pageLoadHandler(dataSet1, dataSet2, dataSet3) {

}





const userDisplay = document.querySelector('#userInfo')
const userNameDisplay = document.querySelector('#userName')
const userStepGoalAvg = document.querySelector('#stepGoalAvg')

const users = [{
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
},
{
  "id": 2,
  "name": "Jarvis Considine",
  "address": "30086 Kathryn Port, Ciceroland NE 07273",
  "email": "Dimitri.Bechtelar11@gmail.com",
  "strideLength": 4.5,
  "dailyStepGoal": 5000,
  "friends": [
    9,
    18,
    24,
    19
  ]
},
{
  "id": 3,
  "name": "Herminia Witting",
  "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
  "email": "Elwin.Tromp@yahoo.com",
  "strideLength": 4.4,
  "dailyStepGoal": 5000,
  "friends": [
    19,
    11,
    42,
    33
  ]
},]




const userRepo = new UserRepository(users.map(user => new User(user)))
const user1 = new User(users[0])







console.log(user1)

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

const displayUserName = function(user) {
  userNameDisplay.innerText = `Welcome, ${user.getFirstName()}!`
}

const displayComparedStepGoal = function(user, repository) {
  userStepGoalAvg.innerHTML = `<p>${user.dailyStepGoal} ${repository.calculateAverageStepGoal()}</p>`
}



displayUserInfo(user1)
displayUserName(user1)
displayComparedStepGoal(user1, userRepo)