'use strict'

class User {
  constructor(singleUserData, 
    singleUserSleepData,
    singleUserHydrationData,
    singleUserActivityData) {
    this.id = singleUserData.id;
    this.name = singleUserData.name;
    this.address = singleUserData.address;
    this.email = singleUserData.email;
    this.strideLength = singleUserData.strideLength;
    this.dailyStepGoal = singleUserData.dailyStepGoal;
    this.userSleep = new UserSleep(singleUserSleepData);
    this.userHydration = new UserHydration(singleUserHydrationData);
    this.userActivity = new UserActivity(singleUserActivityData, this.strideLength, this.dailyStepGoal); // ooooooo
  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}