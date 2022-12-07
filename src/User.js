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
    console.log(this.hydrationData.hydrationData)
  }
}

export default User;