class ActivityUser{
  constructor(activityTestData) {
    this.activityTestData = activityTestData
  }

  findUserStrideLength(user) {
    return user.strideLength;
  }

  findMinutesActive(date, id) {
    return this.activityTestData.find(user => {
      return user.date === date && user.userID === id
    }).minutesActive
  }

  findAverageMinutesActive(startDate, endDate, id) {
  let totalTime = this.activityTestData
  .filter(user => user.userID === id)
  .filter(day => day.date >= startDate && day.date <= endDate)
  .map(day => day.minutesActive)
  .reduce((acc, time) => {
    return acc + time
  }, 0)
  return Math.round((totalTime / 7) * 10) /10
  }
} //<<<-----end of class block

// findAverageHoursSlept(startDate, endDate, id) {
//   let userInfo = this.findUserInfo(id)
//   let week = userInfo.filter(day => day.date >= startDate && day.date <= endDate);
//   let dailyHours = week.map(day => day.hoursSlept)
//   let totalHours = dailyHours.reduce((acc, num) => {
//     return acc + num;
//   }, 0)
//   return Math.round((totalHours / 7) * 10) / 10;
// }


if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}