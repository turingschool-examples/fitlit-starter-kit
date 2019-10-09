class Hydration {
  constructor(userData) {
    this.userData = userData;

  }
  findUser(id) {
    return this.userData.filter(user => user.userID === id)
  }
  avgWaterIntake(id) {
    let singleUser = this.findUser(id)
    let totalOz = singleUser.reduce((ounces, data) => {
      ounces += data.numOunces / singleUser.length
      return ounces
    }, 0)
    return +(totalOz.toFixed(0))
  }
  dailyIntake(date, id) {
    let singleDay = this.userData.find(day => day.date === date && day.userID === id)
    return singleDay.numOunces
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}