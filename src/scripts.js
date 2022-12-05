import './css/styles.css';
import './images/turing-logo.png'


import userData from './data/users';

import UserRepository from './UserRepository';

import User from './User';

const userDisplay = document.querySelector('#userInfo')
const userNameDisplay = document.querySelector('#userName')

const user1 = new User({
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


displayUserInfo(user1)
displayUserName(user1)