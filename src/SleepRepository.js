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

  findSleepQualAboveAverage(givenDate) {
    let userIds = sleepData.map(user => user.userID);
    let userSet = new Set(userIds);
    let uniqueUsers = new Array(...userSet);
    return uniqueUsers.reduce((totalIds, uniqueId) => {
      let user = sleepData.filter(sleep => sleep.userID === uniqueId);
      let dateIndex = user.findIndex(day => day.date === givenDate);
      let week = user.slice(dateIndex-6, dateIndex+1);
      let overallSleepQuality = week.reduce((overallQuality, dailyQuality) => {
        return (overallQuality += dailyQuality.sleepQuality);
      }, 0) / 7;
      if (overallSleepQuality >= 3) {
        totalIds.push(uniqueId)
      }
      return totalIds;
    }, [])
  }

  findSleepiestUserPerDay(givenDate) {
    let userObjs = sleepData.filter(obj => obj.date === givenDate);
    let sortedObjs = userObjs.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    });
    let sleepiestUser = sortedObjs.filter(
      day => day.hoursSlept === sortedObjs[0].hoursSlept
    );
    let sleepyUserObj =  userData.find(user => user.id === sleepiestUser[0].userID);
    return sleepyUserObj.name
  }
 
}   




if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}