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
    return this.findCurrentUserData(userId).map(hydrationObj => hydrationObj.numOunces).splice(index - 6, 7);
  }

  returnDidUserDrinkEnoughWater(userId, date) {
    let waterDatas = this.returnFluidOzByWeek(userId, date);
    let avgWaterPerDay = (waterDatas.reduce((acc, day) => {
      acc += day;
      return acc;
    }, 0) / 7);
    if (avgWaterPerDay > 64) {
      return true;
    }
    return false;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}