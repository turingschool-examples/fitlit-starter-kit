class UserRepo {
  constructor(data) {
    this.usersData = data;
  }
  returnUserData(ident) {
    return this.usersData.find(ele => ele.id === ident)
  }
  averageStepGoal() {
    return Math.floor(this.usersData.reduce((acc, stepSum) => {
      acc += stepSum.dailyStepGoal
      return acc
    }, 0) / this.usersData.length)
  }
  stateWithMostUsers() {
    let justStates = this.usersData.map(ele => ele.address)
      .toString('')
      .split(' ')
      .filter(strings => strings.length === 2)

    return justStates.sort((a, b) =>
      justStates.filter(state => state === a).length - justStates.filter(state => state === b).length)
      .pop()
  }
}

module.exports = UserRepo;