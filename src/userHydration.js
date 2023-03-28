class userHydration {
  constructor(userID, hydrationData) {
    this.userID = userID
    this.hydrationInfo = hydrationData.filter(user => user.userID === userID)
  }

  calculateAllTimeAverageDailyOunces() {
    const allTimeTotalOunces = this.hydrationInfo
      .reduce((acc, cur) => {
        return acc += cur.numOunces
      }, 0)

    const allTimeAverage = allTimeTotalOunces / hydrationData.length

    return allTimeAverage
  }

  calculateSingleDayOunces(day) {

    const allDays = this.hydrationInfo.filter(dayInfo => dayInfo.date === day)
    const totalOunces = allDays.reduce((acc, cur) => {
      return acc += cur.numOunces
    }, 0)

    return totalOunces
  }

  calculateOuncesLastSevenDays(startDate, endDate) {
    const ouncesInWeek = [];

    for (var i = 6; i >=0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const dayInfo = this.hydrationInfo.find => {
        const infoDate = new Date(info.date);
        return infoDate.toDateString() === date.toDateString();
      }
      }
    }
    return this.hydrationInfo.sort()


  }
}

export default userHydration