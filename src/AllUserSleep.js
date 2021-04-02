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




  retrieveAllUserDataByWeek(date) {
    const day1 = dayjs(new Date(date));
    const day7 = dayjs(day1).add(dayjs.duration({"weeks" : 1}))
    const dataForDates = this.sleepData.reduce((total, dataPoint) => {
      if (dayjs(dataPoint.date).isBetween(day1, day7, null, "[]")) {
        return [...total, dataPoint]
      }
      return total
    }, [])
    return dataForDates
    //returns data containing only relevant dates in week window
  }

  retrieveUniqueUserIDs(weekData) {
    const dataForWeek = weekData;
    const uniqueUsers = dataForWeek.reduce((uniqueIDs, currentUser) => {
      if (!uniqueIDs.includes(currentUser.userID)) {
        return [...uniqueIDs, currentUser.userID]
      }
      return uniqueIDs
    }, [])
    return uniqueUsers
    //uniqueUsers is an array of IDs (only one representing each user)
  }

  calcAboveAvgSleepQuality(date) {
    const dataForWeek = this.retrieveAllUserDataByWeek(date);
    const userIDs = this.retrieveUniqueUserIDs(dataForWeek);
    //currently have all data for the week and the unique user IDs


    //create user instance for each unique ID
    //calculate avgSleepQuality
    //return avgSleepQuality
    //if > 3, push user id into an array
    //return array

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
