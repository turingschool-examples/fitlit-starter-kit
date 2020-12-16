'use strict'

class UserHydration {
  constructor(hydrationData) {
    this.userHydrationData = hydrationData;
  }

  getOneDayOfData(date, keyName) {
    return this.userHydrationData.find((day) => day.date === date)[keyName]
  }

  getAverage(fullList) { // test this one
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
      //count number of users - get that number * 7
    }, []).splice([findIndex], 7); //need to take 7 things before it
  } 
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}