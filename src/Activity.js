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
    let dateWalked = specificUser.find(function(aUser) {
      return aUser.date === date
    });
    let stepsInMile = 5280 / user.userData.strideLength;
    let roundedStepsInMile = Math.ceil(stepsInMile);
    let userMiles = dateWalked.numSteps / roundedStepsInMile
    let miles =  userMiles.toFixed(2);
    return Number(miles);
  }

  displayActiveMinutes(id, date) {
    let dateOfActiveMinutes = this.findIdHelper(id).find(function(aUser) {
      return aUser.date === date
    })
    return dateOfActiveMinutes.minutesActive;
  }

  displayWeeklyActiveMinutesList(id) {
    let user = this.findIdHelper(id);
    let userWeeklyActivityMinutes = user.map(function(aUser) {
      return aUser.minutesActive
    })
    console.log(userWeeklyActivityMinutes)
    if (userWeeklyActivityMinutes.length > 7) {
      userWeeklyActivityMinutes.length = 7;
    }
    return userWeeklyActivityMinutes;
  }

  displayWeeklyStepsList(id) {
    let user = this.findIdHelper(id);
    let userWeeklySteps = user.map(function(aUser) {
      return aUser.numSteps
    })
    console.log(userWeeklySteps)
    if (userWeeklySteps.length > 7) {
      userWeeklySteps.length = 7;
    }
    return userWeeklySteps;
  }

  displayWeeklyFlightsList(id) {
    let user = this.findIdHelper(id);
    let userWeeklyFlightsOfStairs = user.map(function(aUser) {
      return aUser.flightsOfStairs
    })
    console.log(userWeeklyFlightsOfStairs)
    if (userWeeklyFlightsOfStairs.length > 7) {
      userWeeklyFlightsOfStairs.length = 7;
    }
    return userWeeklyFlightsOfStairs;
  }

  displayWeeklyActiveMinutesAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklyActivityMinutes = user.map(function(aUser) {
      return aUser.minutesActive
    })
    if (userWeeklyActivityMinutes.length > 7) {
      userWeeklyActivityMinutes.length = 7
    }
    let weeklyTotalMinutes = userWeeklyActivityMinutes.reduce(function(total, todaysMinutes) {
      return total = total + todaysMinutes
    }, 0)
    let averageWeeklyMinutes = weeklyTotalMinutes / userWeeklyActivityMinutes.length;
    let roundedAverageWeeklyMinutes = Math.ceil(averageWeeklyMinutes)
    return Number(roundedAverageWeeklyMinutes)
  }

  displayWeeklyStepsAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklySteps = user.map(function(aUser) {
      return aUser.numSteps
    })
    if (userWeeklySteps.length > 7) {
      userWeeklySteps.length = 7;
    }
    let weeklyTotalSteps = userWeeklySteps.reduce(function(total, todaysSteps) {
      return total = total + todaysSteps
    }, 0)
    let averageWeeklySteps = weeklyTotalSteps / userWeeklySteps.length;
    let roundedAverageWeeklySteps = Math.ceil(averageWeeklySteps)
    return Number(roundedAverageWeeklySteps)
  }

  displayWeeklyFlightsAverage(id) {
    let user = this.findIdHelper(id);
    let userWeeklyFlights = user.map(function(aUser) {
      return aUser.flightsOfStairs
    })
    if (userWeeklyFlights.length >= 7) {
      userWeeklyFlights.length = 7;
    }
    let weeklyTotalFlights = userWeeklyFlights.reduce(function(total, todaysFlights) {
      return total = total + todaysFlights
    }, 0)
    let averageWeeklyFlights = weeklyTotalFlights / userWeeklyFlights.length;
    let roundedAverageWeeklyFlights = Math.ceil(averageWeeklyFlights)
    return Number(roundedAverageWeeklyFlights)
  }
  
  compareStepGoal(id, date) {
    let user = new User(userData[0]);
    let dateOfStepGoal = this.findIdHelper(id).find(function(aUser) {
      return aUser.date === date
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
    let actualSteps = userId.filter(function(aUser) {
      return aUser.numSteps > goal
    });
    return actualSteps.map(function(steps) {
      return steps.date;
    })
  }
  displayStairClimbRecored(id) {
    let userId = this.findIdHelper(id);
    let stairsClimbed = userId.map(function(aUser) {
      return aUser.flightsOfStairs 
    });
    return Math.max(...stairsClimbed);
  }

  displayRecordActiveDay(id) {
    let userId = this.findIdHelper(id);
    let minutesActiveList = userId.map(function(aUser) {
      return aUser.minutesActive
    })
    let mostActiveMinutes = Math.max(...minutesActiveList)
    let mostActiveDate = userId.find(function(ourUser) {
      return ourUser.minutesActive === mostActiveMinutes
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