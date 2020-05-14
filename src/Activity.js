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
    let user = new User(this.userActivity[0])
    console.log(user);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}

//stride.length = 4.3
// 3577
// For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)

// For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?

// For a user, how many minutes active did they average for a given week (7 days)?

// For a user, did they reach their step goal for a given day (specified by a date)?

// For a user, find all the days where they exceeded their step goal

// For a user, find their all-time stair climbing record