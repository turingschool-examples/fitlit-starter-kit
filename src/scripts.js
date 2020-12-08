'use strict'
const id = 0 // this determines which users.js object to display. 1 = 2
const user = new User()
let users = userData.map(user => user)

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
  userAddress.innerText = `${userRepo.getUserData(id).address}`
  userEmail.innerText = `${userRepo.getUserData(id).email}`
  userStepCompare.innerText = `Your step goal is ${users[id].dailyStepGoal}, and the average is ${userRepo.calculateAvgSteps()}`
}