import userData from '../test/usersSampleData';

import hydrationSample from '../test/hydrationSample';

import sleepSample from '../test/sleepTestUsers';


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
    for (var i = 0; i < 7; i++) {
        let day = {}
        day.date = targetUser[i].date
        day.numOunces = targetUser[i].numOunces
        week.push(day)
    }
    return week
};

function findDailySleep(sleep) {
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    });
    let index = targetUser.length - 1
    return `${targetUser[index].date} : ${targetUser[index].hoursSlept}hrs | Sleep Quality: ${targetUser[index].sleepQuality}`
};

function calculateAvgHours(sleep) {
    let totalHours = 0
    let userHoursSlept = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    }).map((day) => { return day.hoursSlept })
    userHoursSlept.forEach((day) => {
        totalHours += day
    })
    return Math.round(totalHours / userHoursSlept.length)
}

function calculateAvgQuality(sleep) {
    let totalSleepQuality = 0
    let userSleepQuality = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    }).map((day) => { return day.sleepQuality })
    userSleepQuality.forEach((day) => {
        totalSleepQuality += day
    })
    return Math.round(totalSleepQuality / userSleepQuality.length)
}

function findRecentWeek(sleep) {
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    }).reverse()
    let recentWeekStart = targetUser[6].date
    return recentWeekStart
}

function findWeeklyHours(sleep, day) {
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
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
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
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

function findHoursSlept(sleep, day) {
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    }).find((user) => { return user.date === day })
    return targetUser.hoursSlept
}

function findSleepQuality(sleep, day) {
    let targetUser = sleepSample.sleepData.filter((user) => {
        return user.userID === 1
    }).find((user) => { return user.date === day })
    return targetUser.sleepQuality
}

export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUser,
    averageOunces,
    dailyOunces,
    weeklyOunces,
    findDailySleep,
    calculateAvgHours,
    calculateAvgQuality,
    findRecentWeek,
    findWeeklyHours,
    findWeeklyQuality,
    findHoursSlept,
    findSleepQuality,
}