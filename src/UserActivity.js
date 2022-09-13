class UserActivity {
  constructor(userActivityData) {
    this.data = userActivityData;
  }
  //method for user miles walked
  numOfSteps(activityDate, user) {
    let userActivity = this.data.filter((data) => data.date === activityDate);
    let numberOfSteps = userActivity.reduce((acc, activity) => {
      acc += activity.numSteps;
      return acc;
    }, 0);
    const numOfStridesForMile = 5280 / user.strideLength;
    const numberOfMilesWalked = numberOfSteps / numOfStridesForMile;
    return parseFloat(numberOfMilesWalked.toFixed(2));
  }

  //   getDayMilesWalked(userActivityTestData, date) {

  //     let userActivity = new UserActivity(userActivityTestData);

  //     let numberOFSteps = userActivity.numOfSteps(userActivityTestData, date);

  //     let userMiles = numberOFSteps / this.strideLength / 2000;
  //     return parseFloat(userMiles.toFixed(2));
  //   }
}

module.exports = UserActivity;
