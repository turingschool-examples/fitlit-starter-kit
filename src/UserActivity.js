class UserActivity {
  constructor(UserActivityData) {
    this.userId = UserActivityData.userId;
    this.date = UserActivityData.date;
    this.minutesActive = UserActivityData.minutesActive;
    this.flightsOfStairs = UserActivityData.flightsOfStairs;
  }
  //method for user miles walked
  numOfSteps(activityData, activityDate) {
    let userActivity = activityData.find(
      (data) =>
        data.date === activityDate && activityData.userID === this.userId
    );

    let walkedMiles = userActivity.numSteps;
    return walkedMiles;
  }
}
module.exports = UserActivity;
