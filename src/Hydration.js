var retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");
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
    return ozDrankOnDate;
  }

  dailyDrinkDuringWeek(date) {
    const day1 = dayjs(new Date(date));
    const day7 = dayjs(day1).add(dayjs.duration({"weeks" : 1}));

    const week = this.hydrationData.reduce((chosenWeek, dataPoint) => {
      if (dayjs(dataPoint.date).isBetween(day1, day7, null, "[]")) {
        const day = dataPoint.date;
        const drinkData = dataPoint.numOunces;
        const newDrinks = {[day]: drinkData};
        return [... chosenWeek, newDrinks];
      }
      return chosenWeek;
    }, [])
    return week;
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
