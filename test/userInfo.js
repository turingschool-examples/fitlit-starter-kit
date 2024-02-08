import userData from '../src/data/users';

import hydration from '../src/data/hydration';

let todaysDate = new Date();

function getUserInfo(userID) {
    let userInfo = userData.users.find((user) => {
      return user.id === userID
    })
    return userInfo
}

function calculateAverageSteps(userData) {
    let totalSteps = 0
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

function getRandomUser(usersData) {
    let randomUserId = Math.floor(Math.random() * usersData.length)
    return randomUserId
 }
 
function averageOunces(hydration, id) {
    var targetUser = hydration.hydrationData.filter(user => user.userID === id)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
   return Math.round(sum / targetUser.length) 
}

function dailyOunces(hydration, id) {
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === id
    });
    let index = targetUser.length - 1
    return targetUser[index].numOunces
};


 export {
     getUserInfo,
     calculateAverageSteps,
     getRandomUser,
     averageOunces,
     dailyOunces,
     //weeklyOunces,
 }