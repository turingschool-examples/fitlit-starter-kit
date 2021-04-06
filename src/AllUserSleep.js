if (typeof module !== 'undefined') {
  const calcAverage = require("./helpers/calcAverage");
  const retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");
}

class AllUserSleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calcAvgSleepQuality(data, property) {
    const avg = calcAverage(data, property)
    return avg
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
    const dataForWeek = retrieveAllUserDataByWeek(this.sleepData, date);
    const userIDs = this.retrieveUniqueUserIDs(dataForWeek);

    //iterates through unique ids and then filters the data for the week to grab all of the data relevant to that unique id
    const aboveAvgSleepers = userIDs.reduce((highSleepQualityUsers, currentUser) => {
      const specificSleeperData = dataForWeek.filter(dataPoint => dataPoint.userID === currentUser)
      //calculate average sleep quality
      const avgSleepQuality = this.calcAvgSleepQuality(specificSleeperData, "sleepQuality")

      //stores the user id to an array if the sleep quality average was > 3
      if (avgSleepQuality > 3) {
        return [...highSleepQualityUsers, currentUser]
      }
      return highSleepQualityUsers
    }, [])
    return aboveAvgSleepers
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
