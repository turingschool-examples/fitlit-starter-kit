class UserHydration {
  constructor(userID, hydrationData) {
    this.userId = userID
    this.hydrationInfo = hydrationData.hydrationData.filter(user => user.userID === userID)
  }
  
  findMostRecentDay() {
    return this.hydrationInfo[this.hydrationInfo.length -1].date
  }

  calculateAllTimeAvgOunces() {
    const allTimeTotalOunces = this.hydrationInfo.reduce((acc, cur) => {
      return acc += cur.numOunces;
    }, 0)

    const allTimeAverage = Math.round(allTimeTotalOunces / this.hydrationInfo.length);

    return allTimeAverage;
  }

  findSingleDayOunces(day) {
    const allDays = this.hydrationInfo.filter(dayInfo => dayInfo.date === day);
    const totalOunces = allDays.reduce((acc, cur) => {
      return acc += cur.numOunces;
    }, 0);

    return totalOunces;
  }

  findOuncesLastSevenDays() {
     const sevenDayDetail = this.hydrationInfo.slice(-7).map(log => log.numOunces);

    return sevenDayDetail
  }

}

export default UserHydration;