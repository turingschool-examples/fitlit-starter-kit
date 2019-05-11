if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  activityData = require('../data/activity-test-data')
  User = require('./User')
  user = new User(1)
}

class Activity {
  constructor() {
    this.activeData = (this.findActivityData(user.user.id));
  }

  findActivityData(ident) {
    return activityData.find(user => user.userID === ident)
  }

//For a specific day(specified by a date), return the miles a user has walked based on their number of steps(use their strideLength to help calculate this)

  milesWalkedToday(day) {
    let todaysData = this.data.find(today => today.date === day)
    let walkedToday = Math.floor(todaysData.numSteps * user.user.strideLength) / 5280;
    return walkedToday
  }

//For a user, (identified by their userID) how many minutes were they active for a given day(specified by a date) ?
  
//For a user, how many minutes active did they average for a given week(7 days) ?
    

//For a user, did they reach their step goal for a given day(specified by a date) ?
      
//For a user, find all the days where they exceeded their step goal

//For a user, find their all - time stair climbing record

//For all users, what is the average number of:

//stairs climbed for a specified date

//steps taken for a specific date

//minutes active for a specific date

//Make a metric of your own! Document it, calculate it, and display it.


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}