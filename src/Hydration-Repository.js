class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findCurrentUserData(userId) {
    return this.hydrationData.filter((hydrationObj) => hydrationObj.userID === userId);
  }

  returnAvgFluidOzPerDayAllTime(userId) {
    return this.findCurrentUserData(userId).reduce((totalOunces, hydrationObj) => {
      return totalOunces += hydrationObj.numOunces;
    }, 0);
  }

  returnFluidOzByDate(userId, date) {
    return this.findCurrentUserData(userId).find((hydrationObj) => hydrationObj.date === date).numOunces;
  }

  returnFluidOzByWeek(userId, date) {
    let index = this.findCurrentUserData(userId).findIndex((hydrationObj) => hydrationObj.date === date);
    return this.findCurrentUserData(userId).map(hydrationObj => hydrationObj.numOunces).splice(index - 7, 7);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}