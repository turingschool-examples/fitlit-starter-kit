class UserHydration {
  constructor(userID, hydrationData) {
    this.userID = userID
    this.hydrationInfo = hydrationData.hydrationData.filter(user => user.userID === userID)
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
  

    calculateOuncesLastSevenDays(date) {
      const selectedDayIndex = this.hydrationInfo.findIndex(log => log.date === date);

        const sevenDayDetail = this.hydrationInfo.slice(selectedDayIndex, selectedDayIndex +7).map(log => log.numOunces);

        let lastWeekDetails = [0, 0, 0, 0, 0, 0, 0]

        sevenDayDetail.forEach((log, index) => {
            lastWeekDetails[index] = log;
        });
        return lastWeekDetails
      }

    findMostRecentDay() {
      return this.hydrationInfo[0].date
    }   
    }

// }

  


export default UserHydration