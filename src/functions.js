import sleep from '../src/data/sleep-test-data'
import account from '../src/data/users-test-data'
import hydration from '../src/data/hydration-test-data'

// ----- * Users * ----- //

function generateRandomUser() {
    const randomIndex = Math.floor(Math.random() * account.users.length);
    return account.users[randomIndex];
}

    function getAccountFriends(user) {
      var friendArr = user.friends
      var friendNames = account.users.reduce((acc, account) => {
        if (friendArr.includes(account.id)) {
          acc.push(account.name)
        }
        return acc
      }, [])
      return friendNames.join(" - ")
    }

// ----- * Steps * ----- //

function getAverageStepGoal(account) {
  const totalStepsGoal = account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / account.users.length;
}

// ----- * Water * ----- //

function getAverageDailyFluidOunces(userId, hydroData) {
  const userHydrationData = hydroData.filter((userRecord) => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
  return userHydrationData.length > 0 ? totalOunces / userHydrationData.length : 0;
}

function getSpecificDay(userId, date, hydroData) {
  const dayEntry = hydroData.find(entry => entry.userID === userId && entry.date === date);
  return dayEntry ? dayEntry.numOunces : 0; 
}

function getWeeklyFluidOunces(userId) {
  const userHydrationData = hydration.hydrationData.filter(record => record.userID === userId);
  userHydrationData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastWeekData = userHydrationData.slice(0, 7);
  return lastWeekData.map(record => ({
    date: record.date,
    numOunces: record.numOunces
  }));
}

// ----- * Sleep * ----- //

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

function getWeeklySleepHours(selectedWeek) {
  return selectedWeek[0].map(day => day.hoursSlept)
}

function getWeeklySleepQuality(selectedWeek) {
  return selectedWeek[0].map(day => day.sleepQuality)
}

export {
    generateRandomUser,
    getAccountFriends,
    getAverageStepGoal,
    getAverageDailyFluidOunces,
    getSpecificDay,
    getWeeklyFluidOunces,
    getUserSleepData,
    getAverageSleepData,
    getMostRecentSleepHours,
    getMostRecentSleepQuality,
    getWeeklySleepHours,
    getWeeklySleepQuality,
    getWeeklySleepData
};