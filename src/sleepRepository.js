class SleepRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }
  getUserData() {
    return this.data.filter(el =>
      el.userID === this.id)
  }
  getUserAvg(attribute) {
    var user = this.data.filter(el =>
      el.userID === this.id).map(el => el[attribute])
    var avg = user.reduce((a, b) => a + b / user.length, 0)
    return parseFloat(avg.toFixed(2))
  }

  getTotalAvg(quality) {
    var attribute = this.data.map(el => el[quality])

    var avg = attribute.reduce((a, b) => a + b / attribute.length, 0)
    return parseFloat(avg.toFixed(2))
  }
  mostHoursSlept(date) {
    var dateArr = this.data.filter(el => el.date === date)

    var mostHours = dateArr.reduce((acc, user) => {
      if (user.hoursSlept > acc) {
        acc = user.hoursSlept
      }
      return acc
    }, 0)
    return dateArr.filter(el => el.hoursSlept === mostHours)
  }

  bestSleepQuality(date) {
    let userIds = this.data.map(user => user.userID);
    let uniqueIds = new Set(userIds);
    uniqueIds = [...uniqueIds];
    return uniqueIds.reduce((acc, userId) => {
      let userData = this.data.filter(el =>
        el.userID === userId)
      let index = userData.findIndex(day => day.date === date)
      let week = userData.slice(index - 6, index + 1);
      let weekAvg = week.reduce((acc, day) => {
        return acc += day.sleepQuality
      }, 0) / week.length
      if (weekAvg >= 3) {
        acc.push(userId)
      }
      return acc
    }, [])
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}