// const User = require('../src/User')
const userData = require('../data/users')

class UserRepository {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath || '';
  }
  getUserData(id) {
    return this.dataFilePath.filter(user => user.id === id)
  }

  averageSteps() {
    let allSteps = this.dataFilePath.map(el => el.dailyStepGoal);
    let totalSteps = allSteps.reduce((acc, curr) => acc + curr);
    return totalSteps / allSteps.length;
  }

  mostStates() {

  }
}

module.exports = UserRepository;