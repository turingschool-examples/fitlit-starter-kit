const sleep = require('../data/sleepSample');
const sleepData = sleep.sleepData;


class Sleep {
  constructor(userID, day) {
    this.userID = userID;
    this.day = day;
    this.user = this.user();
  }

  user() {
    return sleepData.find(el => el.userID === this.userID);
  }

  day() {
    return this.user.sleepData.find(el => el.date == this.day)
  }

  averageHrsSlept() {
    var sAHours = this.user.sleepData.reduce((acc, cur) =>  acc + cur.hoursSlept,0)/this.user.sleepData.length;
    return parseFloat(sAHours.toFixed(1));
  }

  averageSleepQuality() {
    var qAHours = this.user.sleepData.reduce((acc, cur) =>  acc + cur.sleepQuality,0)/this.user.sleepData.length;
    return parseFloat(qAHours.toFixed(1));
  }

  hoursSleptInDay() {
    var x = this.user.sleepData.find(el => el.date == this.day)
    console.log(x)
  }
}

module.exports = Sleep;