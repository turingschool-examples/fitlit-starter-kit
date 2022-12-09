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
  getAverageDailySleep(hoursSlept) {
    let specificUserSleepData = this.getUserSleepData()
    console.log("Specific ", specificUserSleepData)
    let totalHours = specificUserSleepData.reduce((acc, user) => {
      acc += user.hoursSlept
      console.log(acc)
      return acc
    }, 0)
    let averageHours = totalHours/specificUserSleepData.length
    return averageHours
  }

  getUserSleepData() {
    let userOverallSleepData = this.sleepData.sleepData.filter(user => {
      return user.userID === this.userData.id;
    })
      return userOverallSleepData
  }

}




//For a user (identified by their userID), the average number of hours slept per day
export default User;