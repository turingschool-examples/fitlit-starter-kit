class UsersSleepRepo {
  constructor(userData, sleepData) {
    this.userData = userData;
    this.sleepData = sleepData

  }

  avgUsersSleepQualityAllTime() {
    let usersAvgHoursSleep = this.sleepData.reduce((sum, sleep) => {
      return sum += sleep.hoursSlept
    }, 0); return parseFloat((usersAvgHoursSleep  / this.sleepData.length).toFixed(2));
  }

//   usersSleepQualityGreaterThreeByWeek() {
//find all users who's avg sleep is > 3 for 7 days. Should work for any week(dont hardcode days)
//   }

//   usersMostHoursSleptByDate(date) {
// for a given date find the users who slept the most number of hours(one or more if they tied)
//   }

//   metric_of_our_pick()  {

//   }
  
}

if (typeof module !== 'undefined') {
  module.exports = UsersSleepRepo;
}