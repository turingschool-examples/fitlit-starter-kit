
// You should create functions that:

// Return the user’s average number of hours slept per day

// {
//     "userID": 1,
//     "date": "2023/03/24",
//     "hoursSlept": 9.6,
//     "sleepQuality": 4.3
// }

// Return the user’s average number of hours slept per day - done
// Return the user’s average sleep quality per day over all time - done
// Return how many hours a user slept for a specific day - done
// Return a user’s sleep quality for a specific day - done
// Return how many hours a user slept each day over the course of a given week (7 days)
// This function should be able to calculate this for any week, not just the latest week
// Return a user’s sleep quality for each day over the course of a given week (7 days)
// this function should be able to calculate this for any week, not just the latest week 

function initiateSleepFunctions(sleepData) {
    Promise.all([calculateAvgHours(sleepData, 2),
    calculateAvgQuality(sleepData, 2),
    findHoursSlept(sleepData, 2, '2023/03/24'),
    findSleepQuality(sleepData, 2, '2023/03/24'),
    findRecentWeek(sleepData, 2)]).then(console.log('hi'))
}

function calculateAvgHours(sleep, id) {
    let totalHours = 0
    let userHoursSlept = sleep.sleepData.filter((user) => {
        return user.userID === id
        }).map((day) => { return day.hoursSlept })
            userHoursSlept.forEach((day) => {
                totalHours += day
            })
                return Math.round(totalHours/userHoursSlept.length)
}

function calculateAvgQuality(sleep, id) {
    let totalSleepQuality = 0
    let userSleepQuality = sleep.sleepData.filter((user) => {
        return user.userID === id
        }).map((day) => { return day.sleepQuality })
            userSleepQuality.forEach((day) => {
                totalSleepQuality += day
            })
                return Math.round(totalSleepQuality/userSleepQuality.length)
}

function findHoursSlept(sleep, id, day) {
   let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === id
   }).find((user) => { return user.date === day})
        return targetUser.hoursSlept
}

function findSleepQuality(sleep, id, day) {
    let targetUser = sleep.sleepData.filter((user) => {
         return user.userID === id
    }).find((user) => { return user.date === day})
         return targetUser.sleepQuality
 }

function findRecentWeek(sleep, id) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === id
   }).reverse()
        let recentWeekStart = targetUser[6].date
            findWeeklyHours(sleep, id, recentWeekStart)
            findWeeklyQuality(sleep, id, recentWeekStart)
}

function findWeeklyHours(sleep, id, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === id
    })
        let startDateIndex = targetUser.findIndex((log) => {
            return log.date === day
        })
            let weeklySleep = []
            for(var i = startDateIndex; i < (startDateIndex + 7); i++) {
                weeklySleep.push({date: targetUser[i].date, hours: targetUser[i].hoursSlept})
            }
                return weeklySleep
}

function findWeeklyQuality(sleep, id, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === id
    })
        let startDateIndex = targetUser.findIndex((log) => {
            return log.date === day
        })
            let weeklyQuality = []
            for(var i = startDateIndex; i < (startDateIndex + 7); i++) {
                weeklyQuality.push({date: targetUser[i].date, quality: targetUser[i].sleepQuality})
            }
                return weeklyQuality
}

export {
    initiateSleepFunctions
}
