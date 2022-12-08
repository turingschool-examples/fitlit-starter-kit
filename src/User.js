class User {
  constructor(userData, sleepData, hydrationData) {
    this.userData = userData;
    this.sleepData = sleepData;
    this.hydrationData = hydrationData;
  }

  getFirstName() {
    return this.userData.name.split(' ')[0];
  }

  // Hydration
  getAvgDailyWater(userID) {
    let matchedIDS = this.hydrationData.hydrationData.filter((user) => {
      return user.userID === userID
    })
    let avg = matchedIDS.reduce((acc, curr) => {
      acc += curr.numOunces
      return acc
    }, 0)
    return avg / matchedIDS.length
  }

  getWaterPerDay(date) {
    let dates = this.hydrationData.hydrationData.filter((user) => {
      return user.date === date
    })
    return dates.reduce((acc, curr) => {
      if (curr.userID === this.userData.id) {
        acc = curr.numOunces
      }
      return acc
    }, 0)
  }

  // Sleep
  getAverageDailySleep() {
    let totalHours = this.sleepData.hoursSlept.reduce((acc, user) => {
      acc += user.hoursSlept
      return acc
    }, 0)
    let averageHours = totalHours/this.sleepData.hoursSlept.length
    return parseInt(averageHours)
  }


}




//For a user (identified by their userID), the average number of hours slept per day
export default User;