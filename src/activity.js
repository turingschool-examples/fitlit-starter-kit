const UserRepository = require('../src/users-repository');
const userData = require('../data/test-data');

class Activity {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  calculateMilesWalked(date, id) {
    let userRepo = new UserRepository(userData);
    
    let stride = userRepo.users.find(user => user.id === id).strideLength;

    let numberSteps = this.data.filter(user => user.date === date).find(user => user.userID === id).numSteps;

    return parseFloat(((stride * numberSteps / 5280).toFixed(1)))
  };

  calculateMinActive(date, id) {
    let userActivity = this.data.filter(user => user.userID === id).find(day => day.date === date).minutesActive;
 
  return userActivity
  }

  calculateAvgTimeActive(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);

    let day = userActivity.findIndex(day => day.date === date);

    let week = userActivity.splice(day - 5, day + 2);

    let totalMin = week.reduce((acc, min) => {
      return acc += min.minutesActive
    }, 0);

    return parseFloat((totalMin / week.length).toFixed(1));
  };

  compareGoal(date, id) {
    let userRepo = new UserRepository(userData);

    let user = userRepo.users.find(user => user.id === id);

    let goal = user.dailyStepGoal
    
    let userSteps = this.data.filter(user => user.userID === id).find(steps => steps.date === date).numSteps;

    if (userSteps > goal) {
      return true
    } else {
      return false
    };
  };

  findGoalDays(id) {
    let userRepo = new UserRepository(userData);

    let user = userRepo.users.find(user => user.id === id);

    let goal = user.dailyStepGoal;

    let userSteps = this.data.filter(user => user.userID === id);

    let goalArray = userSteps.filter(steps => steps.numSteps > goal);

    return goalArray
  }
}

module.exports = Activity;