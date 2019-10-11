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

  }
  calculateAverageSteps() {

  }
  calculateAverageStairs() {

  }
  calculateAverageMinutesActive() {

  }
  calculateAverageDailyWater() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
