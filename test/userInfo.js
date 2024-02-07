import userData from '../src/data/users';

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

function getRandomUser(usersArr) {
    let randomUserId = Math.floor(Math.random() * usersArr.length)
    return randomUserId
 }
 
 
 export {
     getUserInfo,
     calculateAverageSteps,
     getRandomUser
 }