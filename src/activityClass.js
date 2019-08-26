
class Activity {
  constructor(activityData, userData, userID) {
    this.userID = userID;
    this.activityData = activityData;
    this.userData = userData;
    this.singleUserData = [];
    this.singleActivity = [];
    this.oneDay = {};
  }

  extractSingleUser() {
    let singleUser = this.userData.filter( (user) => {
      if (this.userID === user.userID) {
        return user
      };
    });
    this.singleUserData = singleUser;
  };

  extractSingleActivityData() {
    let singleUser = this.activityData.filter( (user) => {
      if (this.userID === user.userID) {
        return user
      };
    });
    this.singleActivity = singleUser;
  };

  extractSingleDay(date) {
    let singleDay = this.singleActivity.find( day => {
      if (day.date === date) {
        return day
      }
    })
    this.oneDay = singleDay;
  };

  getStrideLength(day) {
    let stride = this.singleUserData.find( element => {
      if (element.date === day) {
        return element.strideLength;
      };
    });
    return stride.strideLength;
  }

  calculateDailyMiles(day) {
    let strideLength = this.getStrideLength(day)
    let stepsPerMi = 5280 / strideLength;
    let miles = this.oneDay.numSteps / stepsPerMi;
    return +(miles.toFixed(2))
  };

  calculateMinutesActive(day, id) {
    this.extractSingleActivityData()
   let user = this.singleActivity.filter( user => {
     if (user.userID === id && user.date === day) {
       return user.minutesActive
     }
    })
    return user[0].minutesActive
  };

  





}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}