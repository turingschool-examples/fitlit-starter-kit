const User = require('../src/User');
const userData = require('../test-data/users-fixtures')

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

  displayWeeklyActiveMinutes(id) {
    let user = this.findIdHelper(id);
    let userWeeklyActivityMinutes = user.map(function(obj) {
      return obj.minutesActive
    })
    if (userWeeklyActivityMinutes >= 7) {
      userWeeklyActivityMinutes.shift();
    }
    return userWeeklyActivityMinutes;
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
}
  



module.exports = Activity;