if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  const SleepRepository = require('./SleepRepository');
}

class Sleep {
  constructor(userID) {
    this.userID = userID;
  }

  userSleepData() {
    const sleepRepository = new SleepRepository('../data/sleepSample.js');
    return sleepRepository.getSleepDataOfAUser(this.userID)
  }

  averageHrsSlept() {
    var sAHours = this.userSleepData().reduce((acc, cur) =>
    acc + cur.hoursSlept,0)/this.userSleepData().length;
    return parseFloat(sAHours.toFixed(1));
  }

  averageSleepQuality() {
    var qAHours = this.userSleepData().reduce((acc, cur) => 
    acc + cur.sleepQuality,0)/this.userSleepData().length;
    return parseFloat(qAHours.toFixed(1));
  }

  hoursSleptInDate(date) {
    return this.userSleepData().find(el => el.date == date).hoursSlept
  }

  hoursSleptQualityInDate(date) {
    return this.userSleepData().find(el => el.date == date).sleepQuality
  }

  hoursSleptWeek(date) {
    var sleptWeekDays = [];
    var userSleepData = this.userSleepData();
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
    var userSleepData = this.userSleepData();
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

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = Sleep;
}