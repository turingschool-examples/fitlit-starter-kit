function generateRandomUser(account) {
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

export {
    generateRandomUser,
    getAverageStepGoal,
    getAverageDailyFluidOunces,
    getSpecificDay
};