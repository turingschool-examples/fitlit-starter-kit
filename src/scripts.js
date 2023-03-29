// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


// An example of how you tell webpack to use a JS file
import User from './user';
import userData from './data/users';
import UserHydration from './userHydration';
import Sleep from './Sleep';
import fetchAll from './apiCalls';

// Global Varible Section
let allUsersData
let allUserSleepData
let allUserHydrationData
let allUserActivityData

window.addEventListener('load', () => {
  fetchAll()
  .then(data => {
    allUserSleepData = data[1]
    allUserHydrationData = data[2]
    allUserSleepData = data[3]
    console.log(allUserHydrationData)
  })

})
//console.log("User Data:", userData);

//Get Random user by refrencing the class
const currentUser = new User(userData);
//Get Current user First Name
currentUser.userFirstName()

//Change The Current User By ID
currentUser.findUserById(1,userData)
//Get Current user First Name
currentUser.userFirstName()

//Get overall Step goal
currentUser.findOverAllStepGoal(userData)
//Get user Step Goal
currentUser.dailyStepGoal

//Get First Name by ID
currentUser.userFirstNameById(49,userData)



//Print Current User Object
// console.log(currentUser)

// console.log(currentUser.userId)
// console.log(currentUser.userName)
// console.log(currentUser.address)
// console.log(currentUser.email)
// console.log(currentUser.strideLength)
// console.log(currentUser.dailyStepGoal)
// console.log(currentUser.friends)
