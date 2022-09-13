class UserActivity {
  constructor(userActivityData) {
    this.data = userActivityData;
  }

  milesBasedOnSteps(activityDate, user) {
    let userActivity = this.data.filter((data) => data.date === activityDate);
    if (userActivity.length < 1) {
      return "Sorry no data available for given date";
    } else {
      let numberOfSteps = userActivity.reduce((acc, activity) => {
        acc += activity.numSteps;
        return acc;
      }, 0);
      const numOfStridesForMile = 5280 / user.strideLength;
      const numberOfMilesWalked = numberOfSteps / numOfStridesForMile;
      return parseFloat(numberOfMilesWalked.toFixed(2));
    }
  }
  minutesActive(activityDate, user) {
    let userActivity = this.data.filter((data) => data.date === activityDate);
    if (userActivity.length < 1) {
      return "Sorry no data available for given date";
    } else {
      let activeTime = userActivity.reduce((activeMinutes, activity) => {
        activeMinutes += activity.minutesActive;
        return activeMinutes;
      }, 0);
      return activeTime;
    }
  }
}

module.exports = UserActivity;
