const UserRepository = require("./UserRepository")
const userData = require("../data/users")
const userRepository = new UserRepository([userData[0],userData[1]]);

class Activity {
  constructor(activitySet) {
    this.activitySet = activitySet;
  }
  getDayData(dateSelected, id) {
    return this.activitySet.find(day => day.date === dateSelected && day.userID === id);
  }
  weeklySleepProperties(dateSelected, id, property) {
    let startingDate = this.getDayData(dateSelected, id);
    let firstDay = this.activitySet.indexOf(startingDate);
    return this.activitySet.slice(firstDay, firstDay + 7).map(day => day[property])
  }
  walkedMilesPerDay(dateSelected, id) {
    let dayData = this.getDayData(dateSelected, id)
    let userStrideLength = userRepository.returnUserData(id).strideLength;
    return Math.round((dayData.numSteps * userStrideLength / 5280) * 10) / 10;
  }
  minutesActivePerDay(dateSelected, id) {
    return this.getDayData(dateSelected, id).minutesActive
}
  averageWeeklyMinutes(dateSelected, id, property) {
    let weeklyActivity = this.weeklySleepProperties(dateSelected, id, property)
    return Math.round((weeklyActivity.reduce((allMinutes, minute) => allMinutes + minute, 0) / 7) * 10) / 10;
}
}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}
