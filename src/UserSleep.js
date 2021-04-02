var dayjs = require("dayjs");
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration);
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }

  calcAvgHoursSlept() {
    const totalHoursSlept = this.sleepData.reduce((total, num) => {
      return total + num.hoursSlept
    }, 0)
    const avgHoursSlept = totalHoursSlept / this.sleepData.length
    return avgHoursSlept
  }

  calcSleepByDate(date, property) {
    const sleepDate = this.sleepData.find(dataPoint => dataPoint.date === date);
    return sleepDate[property]
  }

  calcSleepOverWeek(date, property) {
    const day1 = dayjs(new Date(date));
    const day7 = dayjs(day1).add(dayjs.duration({"weeks" : 1}))

    const week = this.sleepData.reduce((specificWeek, dataPoint) => {
      if (dayjs(dataPoint.date).isBetween(day1, day7, null, "[]")) {
        //null, "[]" means include end data points, so days 1-7 including 1 and 7 (not just 2-6)
        const day = dataPoint.date;
        const sleepData = dataPoint[property];
        const newData = {[day]: sleepData};
        return [...specificWeek, newData]
      }
      return specificWeek
    }, [])
    return week
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
