class Sleep {
  constructor() {}
  userSleepData(sleepData, id) {
    this.userSleep = sleepData.filter(dailySleep => dailySleep.userID === id);
    return this.userSleep;
  }
}
if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
    