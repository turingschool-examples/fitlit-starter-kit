class Activity {
  constructor(activityInfo, user) {
    this.activityInfo = activityInfo;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.date = {};
  }

  getMilesWalked(date) {

  }

  getDailyActivityByMinutes(date) {

  }

  getWeeklyActivityByMinutes() {

  }

  findReachedStepGoalByDate(date) {

  }

  findDaysExceededStepGoal() {

  }

  findStairClimbingRecord() {

  }

  getMilesWalkedByWeek() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
