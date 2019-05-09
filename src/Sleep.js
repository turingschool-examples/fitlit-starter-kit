const sleep = require('../data/sleepSample');
const UserRepository = require('./UserRepository');
const sleepData = sleep.sleepData;


class Sleep {
  constructor(userID) {
    this.userID = userID;
  }

  userData() {
    return sleepData.find(el => el.userID === this.userID);
  }

  averageHrsSlept() {
    var sAHours = this.userData().sleepData.reduce((acc, cur) =>
    acc + cur.hoursSlept,0)/this.userData().sleepData.length;
    return parseFloat(sAHours.toFixed(1));
  }

  averageSleepQuality() {
    var qAHours = this.userData().sleepData.reduce((acc, cur) => 
    acc + cur.sleepQuality,0)/this.userData().sleepData.length;
    return parseFloat(qAHours.toFixed(1));
  }

  hoursSleptInDate(date) {
    return this.userData().sleepData.find(el => el.date == date).hoursSlept
  }

  hoursSleptQualityInDate(date) {
    return this.userData().sleepData.find(el => el.date == date).sleepQuality
  }

  hoursSleptWeek(date) {
    var sleptWeekDays = [];
    var userSleepData = this.userData().sleepData;
    var firstDay = userSleepData.find(el => el.date === date);
    var firstDayIndex = userSleepData.indexOf(firstDay);
    for(let i = 0; i < userSleepData.length; i++) {
      if(i >= firstDayIndex && i <= firstDayIndex+6) {
        sleptWeekDays.push(userSleepData[i].hoursSlept)
      }
    }
    return sleptWeekDays
  }

  qualitySleptWeek(date) {
    var qualityWeekDays = [];
    var userSleepData = this.userData().sleepData;
    var firstDay = userSleepData.find(el => el.date === date);
    var firstDayIndex = userSleepData.indexOf(firstDay);
    for(let i = 0; i < userSleepData.length; i++) {
      if(i >= firstDayIndex && i <= firstDayIndex+6) {
        qualityWeekDays.push(userSleepData[i].sleepQuality)
      }
    }
    return qualityWeekDays;
  }
}

module.exports = Sleep;