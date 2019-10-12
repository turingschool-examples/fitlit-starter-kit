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
  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.users.filter(user => {
      return user.addDailyOunces(date) > 0;
      // Can find each users ounces for a date in user.ouncesRecord (an array of date/ounce objects), so the return here would be the return of calling find on user.ouncesRecord where record[date] is not undefined (there are ounces present)
    })

    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  }
}

// number of users that drank on that date and the total ounces consumed on that date
// addDailyOunces gives a user's daily ounces on that date

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
