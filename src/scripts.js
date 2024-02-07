// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import userData from './data/users';

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { displayUserData } from './domUpdates';


function getUserInfo(userID) {
    let userInfo = userData.users.find((user) => {
      return user.id === userID
    })
    return displayUserData(userInfo)
}

function calculateAverageSteps(userData) {
    let totalSteps = 0
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

function getRandomUser(usersArr) {
   let randomUserId = Math.floor(Math.random() * usersArr.length)
   return getUserInfo(randomUserId)
}

getRandomUser(userData.users);

export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser
}