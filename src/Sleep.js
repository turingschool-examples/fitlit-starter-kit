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

  returnUserSleepQualityDate(date) {
    return this.userData.find(record => record.date === date).sleepQuality;
  }

  returnUserSleepHoursWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;

    return this.userData.reduce((acc, record, index) => {
      if (index <= daySeven && index >= dayOne) {
        acc.push({ ['x']: record.date, ['y']: record.hoursSlept })
      }
        return acc;
    }, []);
  }

  returnUserSleepQualityWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;

    return this.userData.reduce((acc, record, index) => {
      if (index <= daySeven && index >= dayOne) {
        acc.push({ ['x']: record.date, ['y']: record.sleepQuality })
      }
      return acc;
    }, []);
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}