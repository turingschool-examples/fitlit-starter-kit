class UserRepository {
  constructor(data) {
    this.users = data;
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

module.exports = UserRepository;
