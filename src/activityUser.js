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
}


if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}