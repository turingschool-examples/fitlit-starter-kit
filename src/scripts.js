// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './apiCalls';

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

// getAllData();
// An example of how you tell webpack to use a JS file

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { displayUserData, displayHydrationData, displaySteps, displaySleepData  } from './domUpdates';

function initiateUserFunctions(userData) {
    getRandomUser(userData)
    calculateAverageSteps(userData)
    displaySteps(userData)
    console.log('hi userdata')
}

function initiateHydrationFunctions(hydrationData) {
    averageOunces(hydrationData)
    dailyOunces(hydrationData)
    dailyOunces(hydrationData)
    displayHydrationData(hydrationData)
    console.log('hi hydrationData')
}

function initiateSleepFunctions(sleepData) {
    calculateAvgHours(sleepData)
    calculateAvgQuality(sleepData)
    // findHoursSlept(sleepData, '2023/03/24')
    // findSleepQuality(sleepData, '2023/03/24')
    console.log('find recent week func', findRecentWeek(sleepData))
    findDailySleep(sleepData)
    displaySleepData(sleepData)
    console.log('sleep api works')
}

function getUserInfo(randomUserId, userData) {
    console.log('all users', userData.users)
    console.log('all users??', userData)
    let userInfo = userData.users.find((user) => {
        return user.id === randomUserId
    })
        displayUserData(userInfo)
}

function calculateAverageSteps(userData) {
    let totalSteps = 0
    console.log('calc steps userData', userData)
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

var randomUserId;

function getRandomUser(userData) {
    randomUserId = Math.floor(Math.random() * userData.users.length)
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

// sleep functions

function findDailySleep(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    });
    let index = targetUser.length - 1
    return `${targetUser[index].date} : ${targetUser[index].hoursSlept}hrs  |  Sleep Quality: ${targetUser[index].sleepQuality}`
};

function calculateAvgHours(sleep) {
    let totalHours = 0
    let userHoursSlept = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.hoursSlept })
    userHoursSlept.forEach((day) => {
        totalHours += day
    })
    return Math.round(totalHours / userHoursSlept.length)
}

function calculateAvgQuality(sleep) {
    let totalSleepQuality = 0
    let userSleepQuality = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.sleepQuality })
    userSleepQuality.forEach((day) => {
        totalSleepQuality += day
    })
    return Math.round(totalSleepQuality / userSleepQuality.length)
}

// function findHoursSlept(sleep, day) {
//     let targetUser = sleep.sleepData.filter((user) => {
//         return user.userID === randomUserId
//     }).find((user) => { return user.date === day })
//     return targetUser.hoursSlept
// }

// function findSleepQuality(sleep, day) {
//     let targetUser = sleep.sleepData.filter((user) => {
//         return user.userID === randomUserId
//     }).find((user) => { return user.date === day })
//     return targetUser.sleepQuality
// }

function findRecentWeek(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).reverse()
    let recentWeekStart = targetUser[6].date
    return recentWeekStart
    // console.log("weekly sleep", findWeeklyHours(sleep, recentWeekStart))
    // findWeeklyQuality(sleep, recentWeekStart)
    // findWeeklyHours(sleep,recentWeekStart)
}

function findWeeklyHours(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklySleep = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklySleep.push({ date: targetUser[i].date, hours: targetUser[i].hoursSlept })
    }
    return weeklySleep
}


function findWeeklyQuality(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklyQuality = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklyQuality.push({ date: targetUser[i].date, quality: targetUser[i].sleepQuality })
    }
    return weeklyQuality
}


export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser,
    averageOunces,
    dailyOunces,
    weeklyOunces,
    initiateUserFunctions,
    initiateHydrationFunctions,
    initiateSleepFunctions,
    findDailySleep,
    findWeeklyHours,
    findWeeklyQuality,
    findRecentWeek
}