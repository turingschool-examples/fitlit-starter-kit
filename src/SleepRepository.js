const Sleep = require('./Sleep')
const sleepData = require('../data-subsets/sleep-subset');
const userData = require('../data-subsets/users-subset');
const User = require('./User');

class SleepRepository {
  constructor() {
    this.userData = userData;
    this.sleepData = sleepData;
    // this.users = new Sleep(id);
  }

  findGlobalSleepAverage() {
    let totalQuality = this.sleepData.map(user => user.sleepQuality);
    let reducedTotalQuality = totalQuality.reduce((a, b) => (a += b));
    return Math.round(reducedTotalQuality /this.sleepData.length)
  }

  // findSleepQualAboveAverage() {
  //   let userIds = sleepData.map(user => user.userID);
  //   let userSet = new Set(userIds);
  //   let uniqueUsers = new Array(...userSet);

  //   return uniqueUsers.reduce((allIds))
  // }

  findSleepiestUserPerDay(givenDate) {
    let days = this.sleepData.filter(day => day.date === givenDate);
    let hours = days.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let longestSleeper = hours.filter(day => day.hoursSlept === hours[0].hoursSlept);
    return longestSleeper[0].hoursSlept;
  }

}   


if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}