import userData from '../src/data/users';

import hydration from '../src/data/hydration';

import hydrationSample from '../test/hydrationSample';


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
    // averageOunces(randomUserId)
    // dailyOunces(randomUserId)
    // weeklyOunces(randomUserId)
    return randomUserId
 }
 
function averageOunces(id) {
    var targetUser = hydrationSample.hydrationData.filter(user => user.userID === id)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
   return Math.round(sum / targetUser.length) 
}

function dailyOunces(id) {
    let targetUser = hydrationSample.hydrationData.filter((user) => {
        return user.userID === id
    });
    let index = targetUser.length - 1
    return `${targetUser[index].date} : ${targetUser[index].numOunces}oz`
};

function weeklyOunces(id) {
    let week = []
    let targetUser = hydrationSample.hydrationData.filter((user) => {
        return user.userID === id
    });
    for(var i = 0; i < 7; i++) {
        let day = {}
        day.date = targetUser[i].date
        day.numOunces = targetUser[i].numOunces
        week.push(day)
    }
    return week
};


 export {
     getUserInfo,
     calculateAverageSteps,
     getRandomUser,
     averageOunces,
     dailyOunces,
     weeklyOunces,
 }