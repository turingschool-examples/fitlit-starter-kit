
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
      if (this.userID === user.id) {
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


  //**DELETE** ??// 
  // getStrideLength(day) {
  //   let stride = this.singleUserData[0].strideLength
  //   console.log(stride)
  //   return stride
  // }

  calculateDailyMiles(day) {
    this.extractSingleDay(day)
    let stride = this.singleUserData[0].strideLength
    let stepsPerMi = 5280 / stride;
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

  determineStepGoal() {
   let info = this.singleUserData.find((element) => {
     if (element.userID === this.userID) {
       return element.dailyStepGoal
     }
     return info
   })
   return info.dailyStepGoal
  };

  compareStepsToGoal(date) {
    let goal = this.determineStepGoal();
    let userInfo = this.singleUserData.find( element => {
      if (element.userID === this.userID && element.date === date) {
        return element
      }
    }); 
    let comparison = userInfo.dailyStepGoal >= goal ? true : false;
    return comparison
  }

  checkIfExceededGoal(id) {
    let goal = this.determineStepGoal(id);
    let userSteps = this.singleActivity.filter( day => {
      return day.numSteps >= goal
    });
    let dates = userSteps.map( day => {
      return day.date
    })
    return dates
  };

  checkFlightsClimbed() {
    let stairs = this.singleActivity.map( element => {
      return element.flightsOfStairs
    });
    return Math.max(...stairs)
  };

  getStairsClimbedAvg(date) {
    let day = this.activityData.filter( element => {
      return element.date === date
    })
    let stairs = day.reduce( (acc, climbed) => {

      acc += climbed.flightsOfStairs
      return acc
    }, 0)
    return stairs / day.length
  };

  getEveryonesAvgSteps(date) {
    let everyonesLastDayInfo = this.activityData.filter( user => {
      return user.date === date
    });
    let allUsers = everyonesLastDayInfo.filter(user => {
      return this.userID !== user.userId;
    });
    let steps = allUsers.reduce( (acc, walked) => {
      acc += walked.numSteps
      return acc
    }, 0);
    return +(steps / allUsers.length).toFixed();
  };

  getAvgMinsActive(date) {
    let day = this.activityData.filter( element => {
      return element.date === date
    })
    let activeMins = day.reduce( (acc, active) => {
      acc += active.minutesActive
      return acc
    }, 0)
    return activeMins / day.length
  }
  
  getEveryonesAvgMinsActive(date) {
    let everyonesLastDayInfo = this.activityData.filter( user => {
      return user.date === date
    });
    let allUsers = everyonesLastDayInfo.filter(user => {
      return this.userID !== user.userId;
    });
    let minActive = allUsers.reduce( (acc, walked) => {
      acc += walked.minutesActive
      return acc
    }, 0);
    return +(minActive / allUsers.length).toFixed();
  };

  getEveryonesAvgStairsClimbed(date) {
    let everyonesLastDayInfo = this.activityData.filter( user => {
      return user.date === date
    });
    let allUsers = everyonesLastDayInfo.filter(user => {
      return this.userID !== user.userId;
    });
    let stairsClimbed = allUsers.reduce( (acc, walked) => {
      acc += walked.flightsOfStairs
      return acc
    }, 0);
    return +(stairsClimbed / allUsers.length).toFixed();
  };

  calculateTotalWeeklySteps() {
    let allActivity = this.singleActivity.slice(-7);
    let totalSteps = allActivity.reduce( (acc, steps) => {
      acc += steps.numSteps;
      return acc
    }, 0)
    return totalSteps
  }

  calculateTotalWeeklyMinActive() {
    let allActivity = this.singleActivity.slice(-7);
    let totalMinActive = allActivity.reduce( (acc, minActive) => {
      acc += minActive.minutesActive;
      return acc
    }, 0)
    return totalMinActive
  }

  calculateTotalWeeklyFlightsClimbed() {
    let allActivity = this.singleActivity.slice(-7);
    let totalFlightsClimbed = allActivity.reduce( (acc, flights) => {
      acc += flights.numSteps;
      return acc
    }, 0)
    console.log(totalFlightsClimbed)
    return totalFlightsClimbed
  }


}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}