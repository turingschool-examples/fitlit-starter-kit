const User = require('../src/User');

class ActivityUser{
  constructor(activityTestData) {
    this.activityTestData = activityTestData
  }

  findUserInfo(id) {
    return this.activityTestData.filter(user => user.userID === id);
  }

  calculateMilesWalked(date, id) {
    let day = this.findUserInfo(id).find(user => user.date === date);
    return day.numSteps
  }




} 


if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}