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
    this.userActivity = new UserActivity(singleUserActivityData);
  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

  // this one is borked
  // calculateMilesWalked(date) {
  //   console.log(this.strideLength)
  //   // need to access numSteps which is on singleUserActivityData
  //   let activityByDate = this.singleUserActivityData.find((day) => day.date === date);
  //   let currentUser = userRepo.getAUser(user);
  //   let userStride = currentUser.strideLength;
  //   let userSteps = findActivityByDate.numSteps;
  //   let miles = (userStride * userSteps) / 5280;
  //   return miles;
  // }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}