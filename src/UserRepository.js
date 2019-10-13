class UserRepository {
  constructor() {
    this.users = [];

  }
  getUser(id) {
    return this.users.find(function(user) {
      return user.id === id;
    })
  }
  getBestSleepers() {

  }
  getLongestSleepers() {

  }
  getWorstSleepers() {

  }
  calculateAverageStepGoal() {
    let goals = this.users.map(function(user) {
      return user.dailyStepGoal;
    });
    let total = goals.reduce(function(sum, goal) {
      sum += goal;
      return sum;
    }, 0);
    return total/this.users.length;
  }
  calculateAverageSleepQuality() {
    let totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }
  calculateAverageSteps() {

  }
  calculateAverageStairs() {

  }
  calculateAverageMinutesActive() {

  }
  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.users.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  }
  findBestSleepers(date) {
    return this.users.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
