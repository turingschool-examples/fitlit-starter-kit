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

    const allTimeAverage = allTimeTotalOunces / this.hydrationInfo.length

    return allTimeAverage
  }

    calculateSingleDayOunces(day) {
      const allDays = this.hydrationInfo.filter(dayInfo => dayInfo.date === day);
      const totalOunces = allDays.reduce((acc, cur) => {
        return acc += cur.numOunces;
      }, 0);
  
      return totalOunces;
    }
  

    calculateOuncesLastSevenDays(startDate, endDate) {
      
        const datesOunces = this.hydrationInfo
        .filter(day => day.date >= startDate && day.date <= endDate)
        .map(dates => dates.numOunces)


        return datesOunces
        
      }
      
        
    }

// }

  


export default UserHydration