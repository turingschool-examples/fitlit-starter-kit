class UserHydration {
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

  }


export default UserHydration