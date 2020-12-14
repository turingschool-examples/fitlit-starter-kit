class Sleep {
  constructor(hardData) {
    this.id = hardData.userID;
    this.date = hardData.date;
    this.hoursSlept= hardData.hoursSlept;
    this.sleepQuality = hardData.sleepQuality;
  }
  returnHoursSlept() {
    return this.hoursSlept;
  }
  returnSleepQuality() {
    return this.sleepQuality;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
