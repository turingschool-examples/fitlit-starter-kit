/* eslint-disable max-len */
'use strict'

class UserActivity {
  constructor(activityData, strideLength, dailyStepGoal) {
    this.userActivityData = activityData;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
  }

  getOneDayOfData(date, keyName) {
    return this.userActivityData.find((day) => day.date === date)[keyName];
  }

  getWeekOfData(startDate, keyName) {
    // test this
    const findIndex = this.userActivityData.findIndex(
      (day) => day.date === startDate
    );
    return this.userActivityData
      .reduce((total, value) => {
        if (!total[findIndex]) {
          total.push(value[keyName]);
        } else {
          total.push(value[keyName]);
        }
        return total;
      }, [])
      .splice([findIndex], 7);
  }

  // getAverage(fullList) {
  //   // test this one
  //   return (
  //     fullList.reduce((total, value) => {
  //       return (total += value);
  //     }, 0) / this.userHydrationData.length
  //   );
  // }

  calculateAvgMinWeek(startDate) {
    // look into splitting these up or putting them into single reduce
    // use get average
    const findIndex = this.userActivityData.findIndex(
      (day) => day.date === startDate
    );
    const activityItemPerWeek = this.userActivityData
      .reduce((total, value) => {
        if (!total[findIndex]) {
          total.push(value.minutesActive);
        } else {
          total.push(value.minutesActive);
        }
        return total;
      }, [])
      .splice([findIndex], 7);
    let totalMinutes = activityItemPerWeek.reduce((total, value) => {
      total += value;
      return total;
    }, 0);
    return totalMinutes / 7;
  }

  getStairRecord() {
    return this.userActivityData
      .map((item) => item.flightsOfStairs)
      .sort((a, b) => b - a)[0];
  }

  isUserAboveAvg(userItem, averageAll) {
    return userItem > averageAll;
  }

  calculateActivityItemPerWeek(startDate, keyName) {
    // test this newb
    const findIndex = this.userActivityData.findIndex(
      (day) => day.date === startDate
    );
    const activityItemPerWeek = this.userActivityData.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value[keyName]);
      } else {
        total.push(value[keyName]);
      }
      return total;
    }, []);
    return activityItemPerWeek.splice([findIndex], 7);
  }

  isStepGoalReached(date) {
    let findActivityByDate = this.userActivityData.find(
      (day) => day.date === date
    ).numSteps;
    return findActivityByDate > this.dailyStepGoal;
  }

  getDaysStepsSuccess() {
    return this.userActivityData
      .filter((item) => item.numSteps > this.dailyStepGoal)
      .map((item) => item.date);
  }

  calculateMilesWalked(date) {
    // test this
    let userSteps = this.userActivityData.find((day) => day.date === date)
      .numSteps;
    let userStride = this.strideLength;
    let miles = (userStride * userSteps) / 5280;
    return miles;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}