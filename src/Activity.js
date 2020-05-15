const User = require('../src/User');

class Activity {
  constructor(id, activityData) {
    this.userActivity = this.getUserActivity(id, activityData);
  }

  getUserActivity(id, activityData) {
    return activityData.filter(activity => {
      return activity.userID === id;
    })
  }

  getMilesWalked(date) {
    let user = new User();
    //console.log(user);
  }

  getMinutesActive(date) {
    let newDate = this.checkDate(date);
    if (date === newDate) {
      let dailyActivity = this.userActivity.filter(activity => activity.date === date);
      
      return dailyActivity.reduce((acc, active) => {
        return acc += active.minutesActive;
      }, 0)
    } else {
      return 'You must pass a valid date';
    }
  }

  getWeeklyAvgMinutesActive(date) {
    let newDate = this.checkDate(date);
    if (date === newDate) {
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
    } else {
      return 'You must pass a valid date'
    }
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

//stride.length = 4.3
// 3577
//4.3*3577 / 5280
// For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)

// For a user, did they reach their step goal for a given day (specified by a date)?

// For a user, find all the days where they exceeded their step goal
