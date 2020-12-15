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

  findUserSleepData(user) {
    const userSleep = this.sleeps.filter(sleeper => sleeper.userID === user.userID);
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
    // const sleepWeekTotals = [];
    const startDateNumber = this.convertDateString(startDate);
    const endDateNumber = this.convertDateString(endDate);
    const userSleep = this.findUserSleepData(userID);
    return usersleep.filter(sleeper => {
      const sleepDateToNumber = this.convertDateString(sleeper.date)
      return sleepDateToNumber >= startDateNumber && sleepDateToNumber <= endDateNumber
    })

    // const userSleepStrings = userSleep.map(sleeper => {
    //   const sleepStrings = this.convertDateString(sleeper.date);
    //   return sleepStrings;
    // })
    // const sleepHrsForWeek = userSleepStrings.filter(sleepDate => sleepDate >= startDateNumber && sleepDate <= endDateNumber);
    // console.log(sleepHrsForWeek);
    // const sleepWeek = sleepHrsForWeek.forEach(element => {
    //   const sleepWeekFiltered = this.sleeps.filter(sleeper => {
    //     let dateString = this.convertDateString(sleeper.date)
    //     // console.log(dateString)
    //     if(dateString === element) {
    //       // console.log(element)
    //       sleepWeekTotals.push(sleeper.hoursSlept);
    //     }
    //   })
    // })
    // console.log(sleepWeekTotals);
    // return sleepWeekTotals;
  }
}
module.exports = CommunitySleep;
