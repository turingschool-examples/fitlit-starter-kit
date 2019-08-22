class SleepRepository {
  constructor(data) {
    this.data =  data.map(obj => {
      const date = new Date(obj.date)
      obj.date = date.getTime()
      return obj
    });
  }

  getUserData(id) {
    return this.data.filter(user => {
      if (user.userID === id) {
        return user;
      }
    })
  }

  getAvgHoursSleptAllUsers() {
    const total = this.data.reduce((totalHours, user) => totalHours += user.hoursSlept, 0)
    return parseFloat((total / this.data.length).toFixed(1))
  }

  getAvgQualitySleptAllUsers() {
    const total = this.data.reduce((qualitySlept, user) => qualitySlept += user.sleepQuality, 0)
    return parseFloat((total / this.data.length).toFixed(1))
  }

  getWeekOfUsers(dateToday) {
    const newDateFormat = new Date(dateToday)
    const startDate = newDateFormat.getTime();
    const weekOfData = this.data.filter( day => {
      if (day.date >= startDate - 604800000 && day.date <= startDate) {
        return day
      }
    })
    return weekOfData
  }

  createSleepQualityObj(weekOfUsers) {
    return weekOfUsers.reduce( (acc, user) => {
      if (!acc[user.userID]) {
        acc[user.userID] = [user.sleepQuality]
      } else {
        acc[user.userID].push(user.sleepQuality)
      }
      return acc
    }, {})
  }

  getHydroArray(dateToday) {
    const arrayOfDates = this.userData.map(day => day.date)
    const index = (((arrayOfDates.length - arrayOfDates.findIndex(date => dateToday === date)) * -1) - 6)
    this.weeklyArr = this.newUserData.splice(index, 7).reverse();
    return this.weeklyArr;
  }

  getWeeklyHydroAvg() {
    const weekTotal = this.weeklyArr.reduce((total, day) => {
      total += day.numOunces;
      return total
    }, 0)
    return Math.round(weekTotal / this.weeklyArr.length)
  }
};



if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}