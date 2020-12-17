'use strict'
// const UserSleep = require("../src/UserSleep");
// const UserHydration = require("../src/UserHydration");
// const UserActivity = require("../src/UserActivity");

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
    this.userActivity = new UserActivity(
      singleUserActivityData, 
      this.strideLength, 
      this.dailyStepGoal);
  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}