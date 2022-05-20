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

// import userData from './data/users';
import {fetchUserData, fetchUserActivity, fetchUserSleep, fetchUserHydration} from './apiCalls';
import UserRepository from './UserRepository';
import SleepRepository from './sleep-repository';
import ActivityRepository from './Activity';
import HydrationRepository from './HydrationRepository';
import User from './User'

let friends = document.getElementById('friends')
let welcomeName = document.getElementById('name')
let stepGoal = document.getElementById('step-goal')
let stepsTaken = document.getElementById('steps-taken')
let minsActive = document.getElementById('mins-active')
let flights = document.getElementById('flights')
let sleep = document.getElementById('sleep')
let weeklySleep = document.getElementById('weekly-sleep')
let avgSleep = document.getElementById('.avg-sleep')
let waterDrank = document.getElementById('water')
let weeklyWater = document.getElementById('weekly-water')
let email = document.getElementById('email')
let avgStepGoal = document.getElementById('avg-step-goal')


// window.addEventListener('load', getPromiseAll())

let userRepo;
let sleepRepo;
let hydrationRepo;
let activityRepo;

Promise.all([fetchUserData(), fetchUserActivity(), fetchUserSleep(), fetchUserHydration()]).then(data => {
    console.log('seeifData', data)
    const filterData = (data) => {
      instantiateRepoType(data);
    }
    // userRepo.diplayUserInfo(data[0].userData, data[0])
})

function instantiateRepoType(data) {
  userRepo = new UserRepository(data[0]);
  activityRepo = new ActivityRepository(data[1]);
  sleepRepo = new SleepRepository(data[2]);
  hydrationRepo = new HydrationRepository(data[3]);
}
//usually reassign to global variables






// function getRandomID() {
//     return Math.floor(Math.random() * userData.length)
// }
//make all users from data into user objects
//could make more dynamic with params to do for every repo

// function getAllUsers() {
//   console.log(userData)
//     const createUsersArray = userData.map((user) => {
//         return new User(user)
//     });
//     putUsersInRepo(createUsersArray)
// }
// // console.log(getAllUsers())
// //put array of all user objects in user-repo
// function putUsersInRepo(usersArray) {
//     let userRepo = new UserRepository(usersArray)
//     getRandomUser(userRepo)
// }
//
// function getRandomUser(userRepo) {
//     displayUserInfo(userRepo.getUserById(getRandomID()), userRepo)
// }
//
function displayUserInfo(user, userRepo) {
    welcomeName.innerText = `Welcome, ${user.getUserFirstName()}`
    stepGoal.innerText = `${user.dailyStepGoal}`
    email.innerText = `${user.email}`

    const getFriendsNames = user.friends.map((friend) => {
        return userRepo.getUserById(friend).name
    })
    friends.innerText = `${getFriendsNames}`
    avgStepGoal.innerText = `${userRepo.calculateAvgStepGoal()}`
}
