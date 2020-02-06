class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }
  getUserData(id) {
    return this.sleepData.filter(obj => {
      return obj.userID === id
    })
  }

  calculateAverageHours(id) {
    return this.getUserData(id).reduce((acc, object) => {
      return Math.round(acc += object.hoursSlept / this.getUserData(id).length)
    }, 0);
  }

  calculateAverageQuality(id) {
    return this.getUserData(id).reduce((acc, object) => {
      return Math.round(acc += object.sleepQuality / this.getUserData(id).length)
    }, 0);
  }

  getDayHours(id, date) {
    return this.getUserData(id).find(day => day.date === date).hoursSlept
  }
}



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}