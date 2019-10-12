class Sleep { // instance for the user's sleep each day
  constructor(data) {
    this.userId = data.userID;
    this.date = data.date;
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
  }
  sleep() {

  }
  calculateSleepQualityAverage() {
    //unshift to put hoursSleptToday at beginning
  }
  calculateHoursSleptAverage() {
    //unshift to put sleepQualityToday at beginning
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
