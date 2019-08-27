class Sleep {
  constructor(sleepData, userID) {
    this.sleepData = sleepData;
    this.userID = userID;
  }

  findUser() {
    return this.sleepData.filter(user => user.userID === this.userID);
  }

  returnWeekOfData(week, userData) {
    return userData.splice((-7 * week), 7);
  }

  returnWeek(week) {
    var specificUser = this.findUser()
    return specificUser.splice(-7 * week, 7).map(day => day.date);
  }

  returnAvgSleepHours() {
    let specificUser = this.findUser();
    return Number((specificUser.reduce((totalHours, day) => {
      totalHours += day.hoursSlept;
      return totalHours;
    }, 0) / specificUser.length).toFixed(2));
  }

  returnAvgSleepQuality() {
    let specificUser = this.findUser();
    return Number((specificUser.reduce((totalQuality, day) => {
      totalQuality += day.sleepQuality;
      return totalQuality;
    }, 0) / specificUser.length).toFixed(2));
  }

  returnSleepHours(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).hoursSlept;
  }

  returnSleepQuality(date) {
    let specificUser = this.findUser();
    return specificUser.find(day => day.date === date).sleepQuality;
  }

  returnWeekOfSleepHours(week) {
    let specificUser = this.findUser();
    return this.returnWeekOfData(week, specificUser).map(day => day.hoursSlept);
  }

  returnWeekOfSleepQuality(week) {
    let specificUser = this.findUser();
    return this.returnWeekOfData(week, specificUser).map(day => day.sleepQuality);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}