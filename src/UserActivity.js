class UserActivity {
  constructor(userActivityData) {
    this.data = userActivityData;
  }

  milesBasedOnSteps(activityDate, user) {
    let userActivity = this.data.filter((data) => data.date === activityDate);
    console.log(userActivity);
    if (userActivity.length < 1) {
      return 0;
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
      return 0;
    } else {
      let activeTime = userActivity.reduce((activeMinutes, activity) => {
        activeMinutes += activity.minutesActive;
        return activeMinutes;
      }, 0);
      return activeTime;
    }
  }
  stepGoalForGivenDay(activityDate, user) {
    let stepGoalMet = false;
    const userActivity = this.data.filter((data) => data.date === activityDate);
    const stepGoalvsStep = userActivity.forEach((activity) => {
      if (activity.numSteps >= user.dailyStepGoal) {
        stepGoalMet = true;
      } else {
        stepGoalMet = false;
      }
    });
    return stepGoalMet;
  }
  allDaysExceedingStepGoal(user) {
    let response = "";
    const daysExceedingStepGoal = this.data.filter(
      (activity) => activity.numSteps > user.dailyStepGoal
    );
    if (daysExceedingStepGoal.length < 1) {
      response = `Sorry you haven't exceeded your step goal.`;
    } else {
      daysExceedingStepGoal.forEach((exceededActivity) => {
        response = `You exceeded your step goal on ${
          exceededActivity.date
        } by ${exceededActivity.numSteps - user.dailyStepGoal} steps`;
      });
    }
    return response;
  }
  allTimeStairClimbingRecord() {
    const climbingRecord = this.data.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    });
    const allTimeRecord = climbingRecord.shift();
    return allTimeRecord.flightsOfStairs;
  }
}

export default UserActivity;
