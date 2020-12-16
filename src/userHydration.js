'use strict'

class UserHydration {
  constructor(hydrationData) {
    this.userHydrationData = hydrationData;
  }

  getOneDayOfData(date, keyName) {
    return this.userHydrationData.find((day) => day.date === date)[keyName]
  }

  getAverage(fullList) {
    return fullList.reduce((total, value) => {
      return total += value
    }, 0) / this.userHydrationData.length
  }

  calculateWaterPerWeek(startDate) {
    let findIndex = this.userHydrationData.findIndex((day) => {
      return day.date === startDate;
    });
    return this.userHydrationData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value.numOunces);
      } else {
        total.push(value.numOunces);
      }
      return total;
    }, []).splice([findIndex], 7);
  } 
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}