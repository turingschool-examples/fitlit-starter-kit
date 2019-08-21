class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findCurrentUserData(userId) {
    return this.hydrationData.filter((hydrationObj) => hydrationObj.userID === userId);
  }

  returnAvgFluidOzPerDayAllTime(userId) {
    //iterate through array of objects find object with matching userId
    //
    //given userId, calculate average fluid 
    //ounces consumed for all time
  }

  returnFluidOzByDate(userId, date) {
    return this.findCurrentUserData(userId).find((hydrationObj) => hydrationObj.date === date).numOunces;
  }

  returnFluidOzByWeek(userId, date) {
    //for a given userId and 7 day period, calculate
    //fluid ounces consumed per day over that period
  }
}



module.exports = Hydration;