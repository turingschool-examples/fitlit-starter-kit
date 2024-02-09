// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import '../src/images/layered-dumbell.png'
import '../src/images/light-dumbell.png'
import '../src/images/profile-image1.png'
import '../src/images/profile-image2.png'
import '../src/images/profile-image3.png'
import '../src/images/profile-image4.png'
import '../src/images/profile-image5.png'
import '../src/images/profile-image6.png'
import '../src/images/profile-image7.png'
import '../src/images/profile-image8.png'
import '../src/images/profile-image9.png'
import '../src/images/profile-image10.png'
import '../src/images/water-drop.png'
import '../src/images/sleepy-star.png'


// An example of how you tell webpack to use a JS file
// import userData from './data/users';

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { displayUserData } from './domUpdates';

import { displayHydrationData } from './domUpdates';

// import hydration from '../src/data/hydration';

function initiateUserFunctions(userData) {
    Promise.all([getRandomUser(userData.users), 
    calculateAverageSteps(userData)]).then(console.log('hi userdata'))  
}

function initiateHydrationFunctions(hydrationData) {
    Promise.all([averageOunces(hydrationData),
    dailyOunces(hydrationData), dailyOunces(hydrationData),  displayHydrationData(hydrationData)])
    .then(console.log('hi hydrationData'))  
}

function getUserInfo(userID, userData) {
    let userInfo = userData.find((user) => {
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

var randomUserId; 

function getRandomUser(userData) {
    randomUserId = Math.floor(Math.random() * userData.length)
    // populateOnDom(randomUserId)
    getUserInfo(randomUserId, userData)
}


function averageOunces(hydration) {
    var targetUser = hydration.hydrationData.filter(user => user.userID === randomUserId)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
    return Math.round(sum / targetUser.length)
}

function dailyOunces(hydration) {
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === randomUserId
    });
    let index = targetUser.length - 1
    return `${targetUser[index].date} : ${targetUser[index].numOunces}oz`
};

function weeklyOunces(hydration) {
    let week = []
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === randomUserId
    });
    for (var i = 0; i < 7; i++) {
        let day = {}
        day.date = targetUser[i].date
        day.numOunces = targetUser[i].numOunces
        week.push(day)
    }
    return week
};


// function populateOnDom(userId) {
//     displayHydrationData(userId)
// }

export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser,
    averageOunces,
    dailyOunces,
    weeklyOunces,
    // populateOnDom,
    initiateUserFunctions,
    initiateHydrationFunctions,
}