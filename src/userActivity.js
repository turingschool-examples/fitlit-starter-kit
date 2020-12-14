/* eslint-disable max-len */
'use strict'

class UserActivity {
  constructor(activityData) {
    this.userActivityData = activityData;
  }

  getOneDayOfData(date, keyName) {
    return this.userActivityData.find((day) => day.date === date)[keyName]
  }

  calculateAvgMinWeek(startDate) {
    const findIndex = this.userActivityData.findIndex((day) => day.date === startDate);
    const activityItemPerWeek = this.userActivityData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value.minutesActive);
      } else {
        total.push(value.minutesActive);
      }
      return total;
    }, []).splice([findIndex], 7);
    let totalMinutes = activityItemPerWeek.reduce((total, value) => {
      total += value;
      return total;
    }, 0);
    return totalMinutes / 7;
  }
  
  getStairRecord() {
    return this.activityData
      .map((item) => item.flightsOfStairs)
      .sort((a, b) => b - a)[0];
  }
  
  isUserAboveAvg(userItem, averageAll) {
    return userItem > averageAll
  }

  calculateActivityItemPerWeek(startDate, keyName) { // test this newb
    const findIndex = this.activityData.findIndex(day => day.date === startDate);
    const activityItemPerWeek = this.activityData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value[keyName]);
      } else {
        total.push(value[keyName]);
      }
      return total;
    }, []);
    return activityItemPerWeek.splice([findIndex], 7);
  }
  
  // bork bork
  // isStepGoalReached(userRepo, user, date) {
  //   let findActivityByDate = this.activityData.find((day) => day.date === date);
  //   let currentUser = userRepo.getAUser(user.id);
  //   let userSteps = findActivityByDate.numSteps;
  //   return userSteps > currentUser.dailyStepGoal;
  // }
  // getDaysStepsSuccess(userRepo, user) {
  //   return this.activityData
  //     .filter((item) => item.numSteps > user.dailyStepGoal)
  //     .map((item) => item.date);
  // }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}