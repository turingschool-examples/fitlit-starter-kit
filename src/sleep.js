import sleep from '../src/data/sleep-test-data'

function getUserSleepData(randomUser) {
    return sleep.sleepData.filter(user => user.userID === randomUser.id)
}

function getAverageSleepHours(randomUser) {
let sameUserSleepData = getUserSleepData(randomUser)
let averageSleepHours = 0
let totalSleepHours = 0
sameUserSleepData.forEach(obj => {
    totalSleepHours += obj.hoursSlept
})
averageSleepHours = totalSleepHours / sameUserSleepData.length
return averageSleepHours.toFixed(2)
}

function getAverageSleepQuality(randomUser) {
let sameUserSleepData = getUserSleepData(randomUser)
let averageSleepQuality = 0
let totalSleepQuality = 0
sameUserSleepData.forEach(obj => {
    totalSleepQuality += obj.sleepQuality
})
averageSleepQuality = totalSleepQuality / sameUserSleepData.length
return averageSleepQuality.toFixed(2)
}

function getAverageSleepData(randomUser, sleepDataType) {
    let sameUserSleepData = getUserSleepData(randomUser)
    let averageSleep = 0
    let totalSleep = 0
    sameUserSleepData.forEach(obj => {
      totalSleep += obj[sleepDataType]
    })
    averageSleep = totalSleep/ sameUserSleepData.length
    return averageSleep.toFixed(2)
  }

function getMostRecentSleepHours(randomUser) {
let sameUserSleepData = getUserSleepData(randomUser)
let latestSleepDataIndex = sameUserSleepData.length - 1
return sameUserSleepData[latestSleepDataIndex].hoursSlept
}

function getMostRecentSleepQuality(randomUser) {
let sameUserSleepData = getUserSleepData(randomUser)
let latestSleepDataIndex = sameUserSleepData.length - 1
return sameUserSleepData[latestSleepDataIndex].sleepQuality
}

// refactored getMostRecentSleepHours() + getMostRecentSleepQuality()
function getMostRecentSleepData(randomUser, sleepDataType) {

    let sameUserSleepData = getUserSleepData(randomUser)
    let latestSleepDataIndex = sameUserSleepData.length - 1
    return sameUserSleepData[latestSleepDataIndex][sleepDataType]
}

function getWeeklySleepHours(selectedWeek) {
return selectedWeek[0].map(day => day.hoursSlept)
}

function getWeeklySleepQuality(selectedWeek) {
return selectedWeek[0].map(day => day.sleepQuality)
}

// refactored getWeeklySleepHours() + getWeeklySleepQuality()
function getWeeklySleepData(selectedWeek, sleepDataType) {
    return selectedWeek[0].map(day => day[sleepDataType])
}

export {
    getUserSleepData,
    getAverageSleepHours,
    getAverageSleepQuality,
    getMostRecentSleepHours,
    getMostRecentSleepQuality,
    getWeeklySleepHours,
    getWeeklySleepQuality
};