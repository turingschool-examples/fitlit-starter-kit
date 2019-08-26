
class Activity {
  constructor(activityData, userData, userID) {
    this.userID = userID;
    this.activityData = activityData;
    this.userData = userData;
    this.singleUserData = [];
    this.singleActivity = [];
    this.oneDay = {};
  }

  extractSingleUser(id) {
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
     };
    });
    return user[0].minutesActive
  };


  getMinsActive(id) {
    let singleUserMins = this.activityData.filter( (element) => {
      if (id === element.userID) {
        return element.minutesActive
      }
    });
    let activeMins = singleUserMins.map( element => {
      return element.minutesActive
    })
    return activeMins
  };
  
  calculateWeeklyActiveMins(id) {
    let allActivity = this.singleActivity.slice(-7);
    let totalMins = allActivity.reduce( (acc, minutes) => {
      acc += minutes.minutesActive;
      return acc
    }, 0)
    let weeklyAvg = +(totalMins / 7).toFixed()
    return weeklyAvg
  };

  determineStepGoal(id, date) {
   let info = this.singleUserData.find((element) => {
     if (element.userID === id && element.date === date) {
       return element.dailyStepGoal
     }
     return info
   })
   return info.dailyStepGoal
  };

  compareStepsToGoal(id, date) {
    let goal = this.determineStepGoal(id, date);
    let userInfo = this.singleUserData.find( element => {
      if (element.userID === id && element.date === date) {
        return element
      }
    }); 
    if (userInfo.dailyStepGoal >= goal) {
      return true
    } else {
      return false
    }
    

  }






}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}