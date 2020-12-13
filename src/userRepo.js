/* eslint-disable max-len */
'use strict'

class UserRepo { // all users, all data, all the time
  constructor(userData, sleepData) {
    this.users = userData;
    // this.activityData
    this.sleepData = sleepData
  }
  
  getAverage(fullList) {
    return fullList.reduce((total, value) => {
      return total += value
    }, 0) / this.sleepData.length
  }
  
  getAUser(id) {
    return this.users.find(user => user.id === id);
  }
  // this holds all users data - calculate averages in this file
  // and anything that works on all users

  filterSleepData(id) { // make one of these for water/activity
    return this.sleepData.filter(sleepItem => sleepItem.userID === id);
  } // returns an array of sleep data for the user passed in
  
  getAllUserAvgSleepQuality(keyName) { // all users sleep quality
    let fullList = this.sleepData.map((sleepItem) => sleepItem[keyName])
    return this.getAverage(fullList)
  } 
  
  findGoodSleepers(date) { // need to test this
    const findIndex = this.sleepData.findIndex(day => day.date === date);
    return this.sleepData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value)
      } else {
        total.push(value)
      }
      return total
    }, []).splice([findIndex], 7).filter(sleepItem => sleepItem.sleepQuality > 3).map(sleeper => sleeper.userID)
  }

  findLongSleepers(date) { // need to test this
    let todaysSleep = this.sleepData.filter((item) => item.date === date)
    let bestSleeper = todaysSleep.sort((a, b) => b.hoursSlept - a.hoursSlept)[0]
    todaysSleep.reduce((total, value) => {
      total[0] = bestSleeper.userID
      if (bestSleeper.hoursSlept === value.hoursSlept) {
        total.push(value.userID)
      }
      return total
    }, [])
  }

  // calculateAvgSteps() {
  //   let stepGoals = this.users.map((user) => {
  //     return user.dailyStepGoal
  //   })
  //   let totalAvgSteps = stepGoals.reduce((avgSteps, value) => {
  //     let totalSteps = avgSteps += value
  //     return totalSteps
  //   }, 0)
  //   return (totalAvgSteps = totalAvgSteps / stepGoals.length);
  // }

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}