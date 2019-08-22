class SleepUser {
  constructor(sleepTestData) {
    this.sleepTestData = sleepTestData
  }

  findDailySleep(date, id) {
    let userInfo = this.sleepTestData.filter(user => user.userID === id)
    let day = userInfo.find(user => user.date === date)
    return day.hoursSlept;
  }


}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}