class UserRepo {
  constructor(data) {
    this.usersData = data;
  }
  returnUserData(ident) {
    return this.usersData.find(ele => ele.id === ident)
  }
  averageStepGoal() {
    return Math.floor(this.usersData.reduce((acc, stepSum) => {
      acc +=stepSum.dailyStepGoal
      return acc
    }, 0)/this.usersData.length)
  }
  stateWithMostUsers(){
    let justStates = this.usersData.map(ele => ele.address)
      .toString('')
      .split(' ')
      .filter(strings => strings.length === 2)

    const uniqueStates = Array.from(new Set(justStates))

    let counts = uniqueStates.map(a => justStates
    .filter(b => b == a).length);
    let averageState = counts.map((a, b) => Math.max(...counts) === a ? b : 0) 
    .filter(b => b !== 0)
    .map(a => uniqueStates[a]);
    return averageState.toString();
  }
  // compareID() {
  //   console.log(this.returnUserData(1).id)
  // }
}

module.exports = UserRepo;