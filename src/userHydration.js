'use strict'

class UserHydration {
  constructor(hydrationData) {
    this.hydration = hydrationData;
  }

  mapUserWater(id) {
    return this.hydration.reduce((total, value) => {
      if (value.userID === id) {
        total.push(value)
      }
      return total;
    }, [])
  }

  calculateAvgWater(allNumOunces, id) {
    let totalAvgWater = this.mapUserWater(id).map(totalWater => totalWater.numOunces).reduce((avgWater, value) => {
      let totalWater = (avgWater += value);
      return totalWater;
    }, 0);
    return (totalAvgWater = totalAvgWater / allNumOunces.length);
  }

  getUserWaterConsumption(id) {
    const waterConsumption = this.mapUserWater(id)
    return waterConsumption.numOunces;
  }

  calculateWaterPerDay(date, id) {
    return this.mapUserWater(id).find((day) => day.date === date).numOunces;
  }

  calculateWaterPerWeek(startDate, id) {
    const waterConsumption = this.mapUserWater(id);
    const findIndex = waterConsumption.findIndex((day) => {
      return day.date === startDate;
    });

    const waterPerWeek = waterConsumption.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value.numOunces);
      } else {
        total.push(value.numOunces);
      }
      return total;
    }, []);

    return waterPerWeek.splice([findIndex], 7);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}