class Sleep { // instance for the user's sleep each day
  constructor(user) {
    this.userId = user.id;
    this.date = date;
    this.hoursSleptToday = 0;
    this.sleepQualityToday = 0;
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.hoursRecord = [];
    this.qualityRecord = []
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
