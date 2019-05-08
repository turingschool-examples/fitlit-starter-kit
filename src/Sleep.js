const sleep = require('../data/sleepSample');
const sleepData = sleep.sleepData;


class Sleep {
  constructor(userID) {
    this.userID = userID;
  }

  user() {
    return sleepData.find(el => el.userID === this.userID);
  }

  averageHrsSlept() {
    var sAHours = this.user().sleepData.reduce((acc, cur) =>  acc + cur.hoursSlept,0)/this.user().sleepData.length;
    return parseFloat(sAHours.toFixed(1));
  }

  averageSleepQuality() {
    var qAHours = this.user().sleepData.reduce((acc, cur) =>  acc + cur.sleepQuality,0)/this.user().sleepData.length;
    return parseFloat(qAHours.toFixed(1));
  }

  hoursSleptInDate(date) {
    return this.user().sleepData.find(el => el.date == date).hoursSlept
  }

  hoursSleptQualityInDate(date) {
    return this.user().sleepData.find(el => el.date == date).sleepQuality
  }

  hoursSleptWeek(date) {
    var sleptWeekDays = [];
    var sleptData = this.user().sleepData;
    var firstDay = sleptData.find(el => el.date === date);
    var firstDayIndex = sleptData.indexOf(firstDay);
    for(let i = 0; i < sleptData.length; i++) {
      if(i >= firstDayIndex && i <= firstDayIndex+6) {
        sleptWeekDays.push(sleptData[i].hoursSlept)
      }
    }
    return sleptWeekDays
  }
}

module.exports = Sleep;