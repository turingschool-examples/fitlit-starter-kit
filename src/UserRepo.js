if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
}

class UserRepo {
  constructor() {
    this.users = userData;
  }

  averageStepGoal() {
    return Math.floor(this.users.reduce((acc, stepSum) => {
      acc += stepSum.dailyStepGoal
      return acc
    }, 0) / this.users.length)
  }
  
  stateWithMostUsers() {
    let justStates = this.users.map(ele => ele.address)
      .toString('')
      .split(' ')
      .filter(strings => strings.length === 2)

    let oneState = justStates.sort((a, b) => justStates
      .filter(state => state === a).length - justStates
      .filter(state => state === b).length)
      .pop()

    return oneState
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
