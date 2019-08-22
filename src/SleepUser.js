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

  findAverageHoursSlept(startDate, endDate, id) {
    let userInfo = this.findUserInfo(id)
    let week = userInfo.filter(day => day.date >= startDate && day.date <= endDate);
    let dailyHours = week.map(day => day.hoursSlept)
    let totalHours = dailyHours.reduce((acc, num) => {
      return acc + num;
    }, 0)
    return Math.round((totalHours / 7) *10) / 10;
  }

  findAverageQualitySlept(startDate, endDate, id) {
    let userInfo = this.findUserInfo(id)
    let week = userInfo.filter(day => day.date >= startDate && day.date <= endDate);
    let dailyQuality = week.map(day => day.sleepQuality)
    console.log(dailyQuality)
    let totalQuality= dailyQuality.reduce((acc, num) => {
      return acc + num;
    }, 0)
    return Math.round((totalQuality / 7) *10) / 10;
  }


}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}