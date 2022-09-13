class UserActivity {
  constructor(UserActivityData) {
    this.userId = UserActivityData.userId;
    this.date = UserActivityData.date;
    this.minutesActive = UserActivityData.minutesActive;
    this.flightsOfStairs = UserActivityData.flightsOfStairs;
  }
  //method for user miles walked
  numOfSteps(activityData, activityDate) {}
}
module.exports = UserActivity;
