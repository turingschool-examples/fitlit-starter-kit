const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep')

class CommunitySleep {
  constructor(data = []) {
    this.sleeps = data.map(sleepForUser => new Sleep(sleepForUser))
  }

  convertDateString(date) {
    return parseInt(date.split('/').join(''));
  }

  findUserSleepData(userID) {
    const userSleep = this.sleeps.filter(sleeper => sleeper.userID === userID);
    return userSleep;
  }

  calculateAvgSleepHrsPerDay(userID) {
    const userSleep = this.sleeps.filter(sleeper => (sleeper.userID === userID));
    const amountSlept = userSleep.map(sleeper => sleeper.hoursSlept);
    const avgHoursSlept = (amountSlept.reduce((a, b) => a + b, 0)) / amountSlept.length;
    return Math.round(avgHoursSlept * 10) / 10;
  }

  calculateAvgSleepQualPerDay(userID) {
    const userSleep = this.sleeps.filter(sleeper => (sleeper.userID === userID));
    const sleepQuality = userSleep.map(sleeper => sleeper.sleepQuality);
    const avgSleepQuality = (sleepQuality.reduce((a, b) => a + b, 0)) / sleepQuality.length;
    return Math.round(avgSleepQuality * 10) / 10;
  }

  findHrsSleptOnDay(userID, date) {
    const hoursSlept = this.sleeps.find(sleeper => sleeper.userID === userID && sleeper.date === date);
    return hoursSlept.hoursSlept;
  }

  findSleepQualityOnDay(userID, date) {
    const sleepQuality = this.sleeps.find(sleeper => sleeper.userID === userID && sleeper.date === date);
    return sleepQuality.sleepQuality;
  }

  calculateSleepTimeWeek(userID, startDate, endDate) {
    const sleepWeekTotals = [];
    const startDateNumber = this.convertDateString(startDate);
    const endDateNumber = this.convertDateString(endDate);
    const userSleep = this.findUserSleepData(userID);
    const sleepDates = userSleep.filter(sleeper => {
      const sleepDateToNumber = this.convertDateString(sleeper.date)
      if(sleepDateToNumber >= startDateNumber && sleepDateToNumber <= endDateNumber){
        sleepWeekTotals.push(sleeper.hoursSlept);
      }
    })
    return sleepWeekTotals;
  }

  calculateSleepQualityWeek(userID, startDate, endDate) {
    const sleepWeekTotals = [];
    const startDateNumber = this.convertDateString(startDate);
    const endDateNumber = this.convertDateString(endDate);
    const userSleep = this.findUserSleepData(userID);
    const sleepDates = userSleep.filter(sleeper => {
      const sleepDateToNumber = this.convertDateString(sleeper.date)
      if(sleepDateToNumber >= startDateNumber && sleepDateToNumber <= endDateNumber){
        sleepWeekTotals.push(sleeper.sleepQuality);
      }
    })
    return sleepWeekTotals;
  }

  calculateAvgSleepQuality() {
    const sleepQualityAllUsers = this.sleeps.map(allSleepers => allSleepers.sleepQuality);
    const avgSleepQuality = (sleepQualityAllUsers.reduce((a, b) => a + b, 0)) / sleepQualityAllUsers.length;
    return Math.round(avgSleepQuality * 10) / 10;
  }
}
module.exports = CommunitySleep;
