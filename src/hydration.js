class Hydration {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  getDailyAvg() {
    let dailyIntake = this.data.filter(user => user.userID === this.id)
    let daliyAverage = dailyIntake.reduce((acc, day) => {
      return acc += day.numOunces
    }, 0) / dailyIntake.length
    
    return daliyAverage

  }
}

module.exports = Hydration;