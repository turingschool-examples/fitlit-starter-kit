// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// console.log(fetchUserData, 'newuserdata')
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import fetchUserData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User'



let friends = document.querySelector('.friends')
let welcomeName = document.querySelector('.name')
let stepGoal = document.querySelector('.step-goal')
let stepsTaken = document.querySelector('.steps-taken')
let minsActive = document.querySelector('.mins-active')
let flights = document.querySelector('.flights')
let sleep = document.querySelector('.sleep')
let weeklySleep = document.querySelector('.weekly-sleep')
let avgSleep = document.querySelector('.avg-sleep')
let waterDrank = document.querySelector('.water')
let weeklyWater = document.querySelector('.weekly-water')
let email = document.querySelector('.email')
let avgStepGoal = document.querySelector('.avg-step-goal')


window.addEventListener('load', getAllUsers())

function getRandomID() {
    return Math.floor(Math.random() * userData.length)
}
//make all users from data into user objects
//could make more dynamic with params to do for every repo

function getAllUsers() {
    const createUsersArray = userData.map((user) => {
        return new User(user)
    });
    putUsersInRepo(createUsersArray) 
}
//put array of all user objects in user-repo
function putUsersInRepo(usersArray) {
    let userRepo = new UserRepository(usersArray)
    getRandomUser(userRepo)
}

function getRandomUser(userRepo) {
    displayUserInfo(userRepo.getUserById(getRandomID()), userRepo)
}

function displayUserInfo(user, userRepo) {
    welcomeName.innerText = `Welcome, ${user.name}`
    stepGoal.innerText = `${user.dailyStepGoal}`
    email.innerText = `${user.email}`

    const getFriendsNames = user.friends.map((friend) => {
        return userRepo.getUserById(friend).name
    })
    friends.innerText = `${getFriendsNames}`
    avgStepGoal.innerText = `${userRepo.calculateAvgStepGoal()}`
}




