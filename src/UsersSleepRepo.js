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

//   }

//   usersMostHoursSleptByDate() {

//   }

//   metric_of_our_pick()  {

//   }
  
}

if (typeof module !== 'undefined') {
  module.exports = UsersSleepRepo;
}