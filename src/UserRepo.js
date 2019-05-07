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
  return
  // compareID() {
  //   console.log(this.returnUserData(1).id)
  // }
}

module.exports = UserRepo;