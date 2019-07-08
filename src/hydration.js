
class Hydration {
  constructor(userData, date) {
    this.userData = userData
    this.date = date
  }
  getDailyOunces() {
    let day = this.userData.find(user => user.date === this.date)
    return day.numOunces
  }

  getWeeklyOunces() {
    var week = this.userData.slice((this.userData.length -7), (this.userData.length))
    return week.map(user => user.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}