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

  getDailyOz(date) {
    return this.data.find(day => day.date === date).numOunces
  }

  getWeekIntake(date, id) {
    let userWeek = this.data.filter(user => user.userID === id);

    let day = userWeek.findIndex(days => days.date === date)

    return userWeek.slice(day - 5, day + 2);
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
