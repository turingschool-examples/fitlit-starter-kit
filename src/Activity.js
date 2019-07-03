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
}

module.exports = Activity;