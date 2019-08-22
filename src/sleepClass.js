class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
    // this.userID = 0
  }

  setUserID(userID) {
    return this.userID = userID;
  }

  averageHoursSlept() {
    let userSleepData = this.sleepData.filter(element => {
      if (element.userID === this.userID) {
        return element.hoursSlept
      }
    });
    let userHoursSlept = userSleepData.map(element => {
      return element.hoursSlept
    });
    let totalHoursSlept = userHoursSlept.reduce((totalHours, hours) => {
      return totalHours += hours;
    }, 0);
    totalHoursSlept = +(totalHoursSlept.toFixed(2))
    let averageHoursSlept = +(totalHoursSlept / userHoursSlept.length).toFixed(1)
    return averageHoursSlept

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
