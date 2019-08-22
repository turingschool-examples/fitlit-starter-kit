class SleepUser {
  constructor(sleepTestData) {
    this.sleepTestData = sleepTestData
  }

  findDailySleep(date, id) {
    let day = this.sleepTestData.find(user => user.date === date && id)
  }


}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}