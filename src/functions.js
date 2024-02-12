import sleep from '../src/data/sleep-test-data'
import account from '../src/data/users-test-data'

function generateRandomUser() {
    const randomIndex = Math.floor(Math.random() * account.users.length);
    return account.users[randomIndex];
}

function getAverageStepGoal(account) {
  const totalStepsGoal = account.users.reduce((total, user) => total + user.dailyStepGoal, 0);
  return totalStepsGoal / account.users.length;
}

function getAverageDailyFluidOunces(userId, hydroData) {
  const userHydrationData = hydroData.filter((userRecord) => userRecord.userID === userId);
  const totalOunces = userHydrationData.reduce((acc, userRecord) => acc += userRecord.numOunces, 0);
  return userHydrationData.length > 0 ? totalOunces / userHydrationData.length : 0;
}

function getSpecificDay(userId, date, hydroData) {
  const dayEntry = hydroData.find(entry => entry.userID === userId && entry.date === date);
  return dayEntry ? dayEntry.numOunces : 0; // return numOunces, or 0 if not found
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

export {
    generateRandomUser,
    getAverageStepGoal,
    getAverageDailyFluidOunces,
    getSpecificDay,
    getUserSleepData,
    getAverageSleepHours
};