const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration")
dayjs.extend(duration);
const isBetween = require("dayjs/plugin/isBetween")
dayjs.extend(isBetween);

class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  calculateDailyWater() {
    const totalOzDrank = this.hydrationData.reduce((total, num) => {
      return total +num.numOunces;
    }, 0);
    const totalDays = this.hydrationData.length;
    const avgOzDrank = totalOzDrank / totalDays;
    return avgOzDrank;
  }

  ozDrankOnDate(date) {
    const drinkDate = this.hydrationData.find(dataPoint => dataPoint.date === date);
    const ozDrankOnDate = drinkDate.numOunces;
    // console.log("drinkDate >>>", drinkDate); // returns the whole object
    // console.log("ozDrankOnDate >>>", ozDrankOnDate);
    return ozDrankOnDate;
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
