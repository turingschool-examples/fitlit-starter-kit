var dayjs = require("dayjs");
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration);
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class AllUserSleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepQuality() {
    const totalSleepQuality = this.sleepData.reduce((total, num) => {
      return total + num.sleepQuality
    }, 0)
    const avgSleepQuality = totalSleepQuality / this.sleepData.length
    return avgSleepQuality
  }

  calcAboveAvgSleepQuality(date) {
    // const day1 = dayjs(new Date(date));
    // const day7 = dayjs(day1).add(dayjs.duration({"weeks" : 1}))
    //
    // const totalSleepQuality = this.sleepData.reduce((total, dataPoint) => {
    //   if (dayjs(dataPoint.date).isBetween(day1, day7, null, "[]")) {
    //     const sleepQuality = dataPoint.sleepQuality;
    //     total + sleepQuality
    //   }
    //   return total
    // }, 0)
    // return totalSleepQuality
    //determine specific weeks
    //calculate average sleep quality for each user (create instances of users?)
    //return users who have a sleep quality > 3
  }

  calcMostSleep(date) {
    const dataForDate = this.sleepData.filter(element => {
      return element.date === date
    })
    //filters all sleep data to return only data pertaining to a specific date

    const orderData = dataForDate.sort((a,b) => (b.hoursSlept - a.hoursSlept))
    //returns all 3 users that day in order of most to least sleep

    const mostSleep = orderData.filter(element => {
      return element.hoursSlept === orderData[0].hoursSlept
    })
    //creates and array containing first (highest number of hoursSlept) element and any elements that had an equal amount of hoursSlept

    const winners = mostSleep.map(element => {
      return element.userID
    })
    //returns an array of just the userIDs for users who slept the most number of hours

    return winners
  }
}


if (typeof module !== 'undefined') {
  module.exports = AllUserSleep;
}
