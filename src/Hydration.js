class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  findUser() {
    return this.hydrationData.filter(user => user.userID === this.userID);
  }

  returnAverageFluidOunces() {
    var specificUser = this.findUser()
    return Math.floor(specificUser.reduce((totalOunces, dailyOunces) => {
      totalOunces += dailyOunces.numOunces;
      return totalOunces;
    }, 0) / specificUser.length);
  }

  returnDailyFluidOunces(date) {
    var specificUser = this.findUser()
    return specificUser.find(ounces => ounces.date === date).numOunces
  }

  returnWeeklyNumOunces() {
    var specificUser = this.findUser()
    return specificUser.splice(-7).map(day => day.numOunces);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}