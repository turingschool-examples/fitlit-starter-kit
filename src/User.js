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
    console.log('where are you', this.hydrationData)
  }

  getAverage() {
    let totalHours = this.sleepData.hoursSlept.reduce((acc, user) => {
      acc += user.hoursSlept
      return acc
    }, 0)
    let averageHours = totalHours/this.sleepData.hoursSlept.length
    console.log("average hours", averageHours)
    return parseInt(averageHours)
  }


}




//For a user (identified by their userID), the average number of hours slept per day
export default User;