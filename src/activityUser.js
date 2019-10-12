class ActivityUser {
  constructor(userActivityData, userData){
    this.activityData = userActivityData;
    this.userData = userData;
  }

  calcMilesByDay(date) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    let feetWalked = userDateData.numSteps * this.userData.strideLength;
    return Math.round(feetWalked / 5280);
  }
}


if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}