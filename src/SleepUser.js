class SleepUser {
  constructor(sleepTestData) {
    this.sleepTestData = sleepTestData
  }

  findUserInfo(id) {
    return this.sleepTestData.filter(user => user.userID === id);
  }

  findDailySleep(date, id) {
    let day = this.findUserInfo(id).find(user => user.date === date);
    return day.hoursSlept;
  }

  findDailySleepQuality(date, id) {
    let day = this.findUserInfo(id).find(user => user.date ===date)
    return day.sleepQuality;
  }



}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}