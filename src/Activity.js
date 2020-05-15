//const User = require('../src/User');

class Activity {
  constructor(id, activityData, userData) {
    this.user = this.getUser(id, userData);
    this.userActivity = this.getUserActivity(activityData);
  }

  getUserActivity(activityData) {
    return activityData.filter(activity => {
      return activity.userID === this.user.id;
    })
  }

  getUser(id, userData) {
    return userData.find(user => {
      return user.id === id;
    })
  }

  getMilesWalked(date) {
    let strideLength = this.user.strideLength;
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let stepDate = this.userActivity.filter(activity => {
        return activity.date === date;
      })

      let dailySteps = stepDate.reduce((acc, activity) => {
        acc += activity.numSteps;
        return acc;
      }, 0)

      return Math.ceil((dailySteps * strideLength) / 5280);
    }
  }

  getMinutesActive(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let dailyActivity = this.userActivity.filter(activity => activity.date === date);
      
      return dailyActivity.reduce((acc, active) => {
        return acc += active.minutesActive;
      }, 0)
    }
  }

  getWeeklyAvgMinutesActive(date) {
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let activityDate = this.userActivity.find(activity => {
        return activity.date === date;
      })

      let firstDate = this.userActivity.indexOf(activityDate);
      let allDays = this.userActivity
        .slice(firstDate, firstDate + 7)
        .map(activity => activity.minutesActive);

      let avg = allDays.reduce((acc, activity) => {
        return acc += activity / allDays.length;
      }, 0)
      
      return Math.ceil(avg);  
    }
  }

  reachStepGoal(date) {
    let stepGoal = this.user.dailyStepGoal;
    let newDate = this.checkDate(date);
    if (date !== newDate) {
      return 'You must pass a valid date';
    } else {
      let activityDate = this.userActivity.filter(activity => {
        return activity.date === date;
      })

      let stepGoalDate = activityDate.reduce((acc, active) => {
        return acc += active.minutesActive;
      }, 0)

      return stepGoalDate >= stepGoal ? 'Congrats! You reached your step goal!' 
        : 'Step goal not reached for today.';
    }
  }

  exceedStepGoal() {
    let stepGoal = this.user.dailyStepGoal;
    return this.userActivity.filter(activity => {
      return activity.numSteps > stepGoal;
    }).map(activity => activity.date);   
  }

  getMaxStairsClimbed() {
    let stairSort = this.userActivity.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
    
    return stairSort[0].flightsOfStairs;
  }

  checkDate(date) {
    let isDate = new Date(date);
    let newIsDate = isDate.getFullYear() + "/" + 
      ("0" + (isDate.getMonth() + 1)).slice(-2) + "/" + 
      ("0" + isDate.getDate()).slice(-2);
    return newIsDate;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
