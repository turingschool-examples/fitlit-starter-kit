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

        return parseFloat((avgOunces / filterHydration.length).toFixed(0))

    }
    
  findWeeklyHydration(userID, date) {
        const filterHydration = this.findHydrationById(userID)

        const getDates = filterHydration.map(user => user.date)
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = filterHydration.slice(dateIndex -6, dateIndex +1)
        console.log("weekly range", weeklyRange.reverse());
        return weeklyRange.reverse()
    }

    findWeeklyHydrationData(userID, date) {
        const weeklyOunces = [];

        this.findWeeklyHydration(userID, date).forEach(week => {
            weeklyOunces.push(week.numOunces)
        })
        console.log("weekly oz", weeklyOunces);
        return weeklyOunces
    }
      
}

export default Hydration;
