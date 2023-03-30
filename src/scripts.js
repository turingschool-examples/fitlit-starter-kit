// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


// An example of how you tell webpack to use a JS file
import User from './user';
// import userData from './data/users';
import UserHydration from './userHydration';
import Sleep from './Sleep';
import fetchAll from './apiCalls';

// Global Varible Section
let userData
let allUserSleepData
let allUserHydrationData
let allUserActivityData

//querySelector variables 

const userInfoBox = document.querySelector('.user-info')




window.addEventListener('load', () => {
  fetchAll()
  .then(data => {
    userData = data[0]
    allUserSleepData = data[1]
    allUserHydrationData = data[2]
    allUserActivityData = data[3]
    const currentUser = new User(userData);
    loadUserInfo(currentUser,userData)
  })
})

function loadUserInfo(currentUserData,userData) {
    document.getElementById('firstName').innerHTML = currentUserData.userName;
    document.getElementById('fullName').innerHTML = currentUserData.userName;
    document.getElementById('address').innerHTML = currentUserData.address;
    document.getElementById('email').innerHTML = currentUserData.email;
    document.getElementById('strideLength').innerHTML = currentUserData.strideLength;
    document.getElementById('dailyStepgoal').innerHTML = currentUserData.dailyStepGoal;
    document.getElementById('friends').innerHTML = currentUserData.userFirstNameById(currentUserData.friends[0],userData);
   

    console.log(currentUserData.friends[0])

}


//Print Current User Object
// console.log(currentUser.userId)
// console.log(currentUser.userName)
// console.log(currentUser.address)
// console.log(currentUser.email)
// console.log(currentUser.strideLength)
// console.log(currentUser.dailyStepGoal)
// console.log(currentUser.friends)


// console.log(userData.users)
//     console.log(allUserSleepData)
//     console.log(allUserHydrationData)
//     console.log(allUserActivityData)