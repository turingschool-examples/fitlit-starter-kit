'use strict'
const id = 1 // this determines which users.js object to display
const user = new User()
const userRepo = new UserRepo()

let users = userData.map(user => {
  user = new User(user.id, user.name, user.address, user.email, user.strideLength, user.dailyStepGoal)
  return user
})

let userFirstName = document.querySelector('.user-first-name')

window.addEventListener('load', () => {
  userFirstName.innerText = `${user.getFirstName(id)}`
})
