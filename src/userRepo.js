/* eslint-disable max-len */
'use strict'

class UserRepo { // all users, all data, all the time
  constructor(userData, sleepData, hydrationData, activityData) {
    this.users = userData;
    this.activityData = activityData;
    this.sleepData = sleepData;
    this.hydrationData = hydrationData;
  }
  
  getAverage(fullList) {
    return fullList.reduce((total, value) => {
      return total += value
    }, 0) / this.sleepData.length
  }
  
  getAllUserAvgActivityItem(date, keyName) {
    let dayOfActivityData = this.activityData.filter(day => day.date === date)
    let listOfActivityItems = dayOfActivityData.map(item => item[keyName])
    let totalOfActivityItem = listOfActivityItems.reduce((total, value) => {
      return (total += value);
    }, 0) 
    return totalOfActivityItem / listOfActivityItems.length
  }
  
  getAUser(id) {
    return this.users.find(user => user.id === id);
  }

  filterHydrationData(id) { 
    return this.hydrationData.filter(hydrationItem => hydrationItem.userID === id);
  } 
  
  filterSleepData(id) { 
    return this.sleepData.filter(sleepItem => sleepItem.userID === id);
  }

  filterActivityData(id) {
    return this.activityData.filter(activityItem => activityItem.userID === id); 
  }

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

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}