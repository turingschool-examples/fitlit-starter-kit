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
    const day1 = dayjs(new Date(date));
    const day7 = dayjs(day1).add(dayjs.duration({"weeks" : 1}))

    //start with dates so you aren't making instances of users using ALL of the data--just use the data needed
    const dataForDates = this.sleepData.reduce((total, dataPoint) => {
      if (dayjs(dataPoint.date).isBetween(day1, day7, null, "[]")) {
        return [...total, dataPoint]
      }
      return total
    }, [])
    //returns data containing relevant dates
    // console.log(dataForDates)

    //need to create instances of users and then run calcSleepByDate(date, property) using "sleepQuality" as an argument to get data for each day. then use this data to calculate average sleep quality

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
