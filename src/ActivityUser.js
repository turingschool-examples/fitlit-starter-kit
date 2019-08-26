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


} //<<<-----end of class block


if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}