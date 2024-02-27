import sleep from '../src/data/sleep-test-data'

function getUserSleepData(randomUser) {
    return sleep.sleepData.filter(user => user.userID === randomUser.id)
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

function getMostRecentSleepData(randomUser, sleepDataType) {

    let sameUserSleepData = getUserSleepData(randomUser)
    let latestSleepDataIndex = sameUserSleepData.length - 1
    return sameUserSleepData[latestSleepDataIndex][sleepDataType]
}

function getWeeklySleepData(selectedWeek, sleepDataType) {
    return selectedWeek[0].map(day => day[sleepDataType])
}

export {
    getUserSleepData,
    getAverageSleepData,
    getMostRecentSleepData,
    getWeeklySleepData
};