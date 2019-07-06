// const User = require('../src/User');
// const userData = require('../test-data/users-fixtures')

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  findIdHelper(id) {
    let specificUserIntake = this.activityData.filter(function(object) {
      return object.userID === id
    })
    return specificUserIntake;
  }

  calculateMilesWalked(id, date) {
    let user = new User(userData[0]);
    let specificUser = this.findIdHelper(id);
    let dateWalked = specificUser.find(function(obj) {
      return obj.date === date
    });
    let stepsInMile = 5280 / user.userData.strideLength;
    let roundedStepsInMile = Math.ceil(stepsInMile);
    let userMiles = dateWalked.numSteps / roundedStepsInMile
    let miles =  userMiles.toFixed(2);
    return Number(miles);
  }

  displayActiveMinutes(id, date) {
    let dateOfActiveMinutes = this.findIdHelper(id).find(function(obj) {
      return obj.date === date
    })
    return dateOfActiveMinutes.minutesActive;
  }

  displayWeeklyActiveMinutesList(id) {
    let user = this.findIdHelper(id);
    let userWeeklyActivityMinutes = user.map(function(obj) {
      return obj.minutesActive
    })
    console.log(userWeeklyActivityMinutes)
    if (userWeeklyActivityMinutes.length > 7) {
      userWeeklyActivityMinutes.length = 7;
    }
    return userWeeklyActivityMinutes;
  }

  displayWeeklyActiveMinutesAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklyActivityMinutes = user.map(function(obj) {
      return obj.minutesActive
    })
    if (userWeeklyActivityMinutes.length > 7) {
      userWeeklyActivityMinutes.length = 7
    }
    let weeklyTotalMinutes = userWeeklyActivityMinutes.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0)
    let averageWeeklyMinutes = weeklyTotalMinutes / userWeeklyActivityMinutes.length;
    let roundedAverageWeeklyMinutes = Math.ceil(averageWeeklyMinutes)
    return Number(roundedAverageWeeklyMinutes)
  }

  displayWeeklyStepsAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklySteps = user.map(function(obj) {
      return obj.numSteps
    })
    if (userWeeklySteps.length > 7) {
      userWeeklySteps.length = 7;
    }
    let weeklyTotalSteps = userWeeklySteps.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0)
    let averageWeeklySteps = weeklyTotalSteps / userWeeklySteps.length;
    let roundedAverageWeeklySteps = Math.ceil(averageWeeklySteps)
    return Number(roundedAverageWeeklySteps)
  }

  displayWeeklyFlightsAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklyFlights = user.map(function(obj) {
      return obj.flightsOfStairs
    })
    if (userWeeklyFlights.length >= 7) {
      userWeeklyFlights.length = 7;
    }
    let weeklyTotalFlights = userWeeklyFlights.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0)
    let averageWeeklyFlights = weeklyTotalFlights / userWeeklyFlights.length;
    let roundedAverageWeeklyFlights = Math.ceil(averageWeeklyFlights)
    return Number(roundedAverageWeeklyFlights)
  }
  
  compareStepGoal(id, date) {
    let user = new User(userData[0]);
    let dateOfStepGoal = this.findIdHelper(id).find(function(obj) {
      return obj.date === date
    })
    if (dateOfStepGoal.numSteps < user.userData.dailyStepGoal) {
      return false;
    } else {
      return true;
    }
  }
  findExceededStepGoal(id) {
    let user = new User(userData[0]);
    let userId = this.findIdHelper(id);
    let goal = user.userData.dailyStepGoal;
    let actualSteps = userId.filter(function(obj) {
      return obj.numSteps > goal
    });
    return actualSteps.map(function(obj) {
      return obj.date;
    })
  }
  displayStairClimbRecored(id) {
    let userId = this.findIdHelper(id);
    let stairsClimbed = userId.map(function(obj) {
      return obj.flightsOfStairs 
    });
    return Math.max(...stairsClimbed);
  }

  displayRecordActiveDay(id) {
    let userId = this.findIdHelper(id);
    let minutesActiveList = userId.map(function(obj) {
      return obj.minutesActive
    })
    let mostActiveMinutes = Math.max(...minutesActiveList)
    let mostActiveDate = userId.find(function(obj) {
      return obj.minutesActive === mostActiveMinutes
    })
    let activityRecord = []
    activityRecord.push(mostActiveDate.date)
    activityRecord.push(mostActiveDate.minutesActive)
    return activityRecord
  }
}
  



if (typeof module !== 'undefined') {
  module.exports = Activity;
}