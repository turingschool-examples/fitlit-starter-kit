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

  findStartDate(date) {
    let startDate = this.singleUserData.find(day => {
      return day.date === date
    })
    return startDate;
  }

  averageHoursSlept() {
    let userHoursSlept = this.singleUserData.map(element => {
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

  hoursSleptSpecificDate(date) {
    let day = this.findStartDate(date)
    return day.hoursSlept;
  }

  sleepQualitySpecificDate(date) {
    let day = this.findStartDate(date)
    return day.sleepQuality;
  }

  //method to calculate how many hours slept in any given week
  calculateWeeklyHoursSlept(date) {
    //give a start date
    let startDate = this.findStartDate(date)
    //find the index of that date
    let index = this.singleUserData.indexOf(startDate)
    //return an arrary at that index and 7+
    let week = this.singleUserData.slice(index, 8);
    //return array with just the hours slept a given week
    let weeklyHoursSlept = week.map(day => {
      return day.hoursSlept
    })
    return weeklyHoursSlept;
  }

  calculateWeeklySleepQuality(date) {
    let startDate = this.findStartDate(date);
    let index = this.singleUserData.indexOf(startDate);
    let week = this.singleUserData.slice(index, 8);
    let weeklySleepQuality = week.map(day => {
      return day.sleepQuality
    });
    return weeklySleepQuality;
  }


}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}