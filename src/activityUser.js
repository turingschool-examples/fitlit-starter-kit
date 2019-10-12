class ActivityUser {
  constructor(userActivityData){
    this.activityData = userActivityData;
  }

  calcMilesByDay(date, userStrideLength) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    let feetWalked = userDateData.numSteps * userStrideLength;
    return Math.round(feetWalked / 5280);
  }

  getMinutesActiveByDay(date) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    return userDateData.minutesActive;
  }

  calcAvgMinutesByWeek(date) {
    let dataDate = this.activityData.map(data => data.date);
    let dateIndex = dataDate.lastIndexOf(date);
    let weekData = this.activityData.slice(dateIndex - 7, dateIndex + 1);
    let sum =  weekData.reduce((acc, day) => {
      acc += day.minutesActive;
      return acc;
    },0)
    return Math.round(sum / 8);
  }

  evalReachStepGoal(date, userStepGoal) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    if (userDateData.numSteps >= userStepGoal) {
      return true;
    } else {
      return false;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}