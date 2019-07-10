
class Hydration {
  constructor(userData) {
    this.userData = userData
  }
  
  getDailyOunces(id, date="2019/06/15") {
    let day = this.userData.find(user => user.date === date && user.userID === id)
    console.log(day)
    console.log(date)
    return day.numOunces
  }

  getWeeklyOunces(id) {
    var userWeek = this.userData.filter(user => user.userID === id)
    var sevenDays = userWeek.slice((userWeek.length -7), userWeek.length)
    return sevenDays.map(user => user.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}