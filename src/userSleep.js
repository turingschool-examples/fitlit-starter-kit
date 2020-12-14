/* eslint-disable max-len */
'use strict'

class UserSleep {
  constructor(userSleepData) {
    this.userSleepData = userSleepData
  }
  
  getOneDayOfData(date, keyName) {
    return this.userSleepData.find((day) => day.date === date)[keyName]
  }

  getAverage(fullList) {
    return fullList.reduce((total, value) => {
      return total += value
    }, 0) / this.userSleepData.length
  }

  calculateAvgSleepItem(keyName) {
    let fullList = this.userSleepData.map(sleepItem => sleepItem[keyName])
    return this.getAverage(fullList)
  }

  calculateSleepItemPerWeek(startDate, keyName) {
    const findIndex = this.userSleepData.findIndex(day => day.date === startDate);
    const sleepItemPerWeek = this.userSleepData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value[keyName]);
      } else {
        total.push(value[keyName]);
      }
      return total;
    }, []);
    return sleepItemPerWeek.splice([findIndex], 7);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}