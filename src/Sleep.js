class Sleep {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserAverageSleepHours() {
    return this.userData.reduce((acc, record) => {
      acc += record.sleepQuality;
      return acc;
    }, 0) / this.userData.length;
  }

  returnUserSleepHoursDate(date) {
    return this.userData.find(record => record.date === date).hoursSlept;
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}