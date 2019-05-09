if (typeof module !== 'undefined') {
  var users = require('../data/users-test-data')
  var userSleep = require('../data/sleep-test-data')
} else {
  var users = userData
  var userSleep = sleepData
}

class Sleep {
  constructor(index) {
    this.userSleep = users[index]
  }
//For a user(identified by their userID), the average number of hours slept per day
  averageSleepPerDay() {

  }
//For a user, their average sleep quality per day over all time
  averageSleepAllTime() {

  }

//For a user, how many hours they slept for a specific day(identified by a date)
  hoursSleptOnDay(date) {

  }

//For a user, how many hours slept each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  hoursSleptGivenWeek(weekStart) {

  }

//For a user, their sleep quality each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  sleepQualityGivenWeek(weekStart) {

  }

//For all users, the average sleep quality

  allUsersSleepQuality() {

  }

//Find all users who average a sleep quality greater than 3 for a given week(7 days) - you should be able to calculate this for any week, not just the latest week
  allUsersGoodSleepGivenWeek(weekStart) {

  }
//For a given day(identified by the date), find the users who slept the most number of hours(one or more if they tied)
  championOfSleepers(date) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}