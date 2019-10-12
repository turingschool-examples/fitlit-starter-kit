class Hydration {
  constructor(userHydrationData) {
    this.userHydrationData = userHydrationData;

  }
  findUser(id) {
    return this.userHydrationData.filter(user => user.userID === id)
  }
  calculateAvgWaterIntake(id) {
    let singleUser = this.findUser(id)
    let totalOz = singleUser.reduce((ounces, data) => {
      ounces += data.numOunces / singleUser.length
      return ounces
    }, 0)
    return +(totalOz.toFixed(0))
  }
  calculateDailyIntake(date, id) {
    let singleDay = this.userHydrationData.find(day => day.date === date && day.userID === id)
    return singleDay.numOunces
  }
  findAWeek(id) {
    let user = this.findUser(id)
    return user.slice(-7);
  }
  getWeeklyOunces(id) {
    let days = this.findAWeek(id)
    return days.map(day => day.numOunces)
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}