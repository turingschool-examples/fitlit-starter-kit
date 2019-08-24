class Sleep {
  constructor(sleepData, userID) {
    this.sleepData = sleepData;
    this.userID = userID;
    this.singleUserData = []
  }

  extractSingleUser() {
    let userData = this.sleepData.filter(user => {
      if (this.userID === user.userID) {
        return user;
      }
    });
    this.singleUserData = userData
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

  averageSleepQuality() {
    let sleepQuality = this.singleUserData.map(user => {
      return user.sleepQuality
    })
    let totalSleepQuality = sleepQuality.reduce((total, sleepQuality) => {
      return total += sleepQuality
    }, 0);
    totalSleepQuality = +(totalSleepQuality.toFixed(2));
    let averageSleepQuality = +(totalSleepQuality / sleepQuality.length).toFixed(1);
    return averageSleepQuality;

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}