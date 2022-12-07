import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import fetchUserData from "./apiCalls.js"

const userName = document.querySelector('#username') 
const name = document.querySelector('#name') 
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const strideLength = document.querySelector('#stride-length')
const userStepGoal = document.querySelector('#user-goal')
const averageStepGoal = document.querySelector('#average-goal')

let user
let userRepo
let currentUser

user = new User(userData[Math.floor(Math.random() * userData.length)])
userRepo = new UserRepository(userData)

  console.log('here', user)
  window.addEventListener('load', () => {
    user
    displayName()
    displayInfo()
    stepGoalDisplay()
  })

function displayName() {
  userName.innerHTML = `Welcome, ${user.showFirstName()}!`
   }

function displayInfo() {
    name.innerHTML = `Name: ${user.name}`
    email.innerHTML = `Email: ${user.email}`
    address.innerHTML = `Address: ${user.address}`
    strideLength.innerHTML = `Your Stride Length: ${user.strideLength}`
    userStepGoal.innerHTML = `Your Step Goal: ${user.dailyStepGoal}`
}

function stepGoalDisplay() {
    averageStepGoal.innerHTML = `Your step goal is ${user.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
}


// const makeClasses = (users) => {
//   userRepository = new UserRepository(users);
//   if (currentUser === undefined){
//     getRandomUser();
//   }}
// const getRandomUser = () => {
//   currentUser = new User(userData]);
//   userRepository = new UserRepository(currentUser)
// }

//getrandomIndex  compare user Id
//userRepo has users