class Sleep {
  constructor(sleepData) {
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.hoursSlept = sleepData.hoursSlept;
    this.sleepQuality = sleepData.sleepQuality;
  }

  returnHoursSlept() {
    return this.hoursSlept;
  }

  returnSleepQuality() {
    return this.sleepQuality;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
