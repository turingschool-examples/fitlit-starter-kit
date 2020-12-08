'use strict'
 // this determines which users.js object to display.
// const user = new User(userData, id)
// let users = userData.map(user => user)

const userRepo = new UserRepo(users) // needs to take in array of users

let userFirstName = document.querySelector('.user-first-name')
let userAddress = document.querySelector('.user-address')
let userEmail = document.querySelector('.user-email')
let userStepCompare = document.querySelector('.user-step-compare')

window.addEventListener('load', () => {
  displayFirstName(id)
  displayInfoCard(id)
})

const displayFirstName = id => userFirstName.innerText = `Welcome, ${user.getFirstName(id)}`
const displayInfoCard = id => {
  userAddress.innerText = `${userRepo.getAUser(id).address}`;
  userEmail.innerText = `${userRepo.getAUser(id).email}`;
  userStepCompare.innerText = `Your step goal is ${users[id - 1].dailyStepGoal}, and the average is ${userRepo.calculateAvgSteps()}`
}