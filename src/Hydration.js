class Hydration {
  constructor(userData) {
    this.userData = userData
  }

  findHydrationById(userID) {
      const hydrationDataById = this.userData.filter(user => {
          if (userID === user.userID) {
              return user
          }
      })
      return hydrationDataById
  }

  findWaterConsumedByDate(userID, date) {
        const hydrationDataById = this.findHydrationById(userID)
        const findWaterConsumedByDate = hydrationDataById.find(user => user.date === date)
        return findWaterConsumedByDate.numOunces
    }

  findAverageDailyHydration(userID) {
        const filterHydration = this.findHydrationById(userID)
        const avgOunces = filterHydration.reduce((acc, hydration) => {
            acc += hydration.numOunces
            return acc
        }, 0)
        return parseFloat((avgOunces / filterHydration.length).toFixed(1))
    }
    
  findWeeklyHydration(userID, date) {
        const filterHydration = this.findHydrationById(userID)
        const getDates = filterHydration.map(user => user.date)
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = filterHydration.slice(dateIndex -6, dateIndex +1)

        const weeklyHydration = weeklyRange.reduce((acc, ounces) => {
            acc += ounces.numOunces / 7
            return acc
        }, 0)
        return weeklyHydration.toFixed(1)
    }
}

export default Hydration;
