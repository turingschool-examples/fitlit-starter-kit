import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import fetchUserData from "./apiCalls.js";
import {promiseAll} from "./apiCalls.js"

console.log('hello friends', fetchUserData)
const userName = document.querySelector('#username') 
const name = document.querySelector('#name') 
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const strideLength = document.querySelector('#stride-length')
const userStepGoal = document.querySelector('#user-goal')
const averageStepGoal = document.querySelector('#average-goal')
const friendsData = document.querySelector('#friends')


let user
let userRepo
let currentUser

promiseAll().then((response) => {
console.log('response',response)
user = new User(userData[Math.floor(Math.random() * userData.length)])
userRepo = new UserRepository(userData)
console.log('userRepo', user)

})
  console.log('here', user)
  window.addEventListener('load', () => {
    user
    promiseAll
    displayName()
    displayInfoToDom()
    stepGoalDisplay()
    friendNames()
  })



function displayName() {
  userName.innerHTML = `Welcome, ${user.showFirstName()}!`
   }

function displayInfoToDom() {
    name.innerHTML = `Name: ${user.name}`
    email.innerHTML = `Email: ${user.email}`
    address.innerHTML = `Address: ${user.address}`
    strideLength.innerHTML = `Your Stride Length: ${user.strideLength}`
    userStepGoal.innerHTML = `Your Step Goal: ${user.dailyStepGoal}`
    // friendsData.innerHTML = `Your Friends: ${user.friends.showFirstName()}`

}

function stepGoalDisplay() {
    averageStepGoal.innerHTML = `Your step goal is ${user.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
}

  function friendNames() {
    const userFriends = user.friends
    const findFriendsNames = userFriends.reduce((acc, friend) => {
      const friendInfo = userRepo.getUserData(friend)
      acc += `<p>${friendInfo.name}'s step goal: ${friendInfo.dailyStepGoal}</p>`
      return acc
    }, "")
    friendsData.innerHTML = findFriendsNames
  }


// const makeClasses = (users) => {
//   userRepository = new UserRepository(users);
//   if (currentUser === undefined){
//     getRandomUser();
//   }}
// const getRandomUser = () => {
//   currentUser = new User(userData);
//   userRepository = new UserRepository(currentUser)
// }

//getrandomIndex  compare user Id
//userRepo has users
