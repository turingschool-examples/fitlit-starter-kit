if (typeof module !== "undefined") {
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
  }

  calcAboveAvgSleepQuality(date) {
    const dataForWeek = retrieveAllUserDataByWeek(this.sleepData, date);
    const userIDs = this.retrieveUniqueUserIDs(dataForWeek);

    const aboveAvgSleepers = userIDs.reduce((highSleepQualityUsers, currentUser) => {
      const specificSleeperData = dataForWeek.filter(dataPoint => dataPoint.userID === currentUser)
      const avgSleepQuality = this.calcAvgSleepQuality(specificSleeperData, "sleepQuality")

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
    const orderData = dataForDate.sort((a,b) => (b.hoursSlept - a.hoursSlept))
    const mostSleep = orderData.filter(element => {
      return element.hoursSlept === orderData[0].hoursSlept
    })
    const winners = mostSleep.map(element => {
      return element.userID
    })
    return winners
  }
}

if (typeof module !== 'undefined') {
  module.exports = AllUserSleep;
}
