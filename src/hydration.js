
class Hydration {
  constructor(userData) {
    this.userData = userData
  }
  
  getDailyOunces(id, date) {
    let day = this.userData.find(user => user.date === date && user.userID === id)
    return day.numOunces
  }

  getWeeklyOunces(id) {
    var userWeek = this.userData.filter(user => user.userID === id)
    var sevenDays = userWeek.slice((userWeek.length, -7), userWeek.length)
    return sevenDays.map(user => user.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}