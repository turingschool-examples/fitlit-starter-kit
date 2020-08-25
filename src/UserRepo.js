class UserRepo {
  constructor(users) {
    this.users = users;
  }
  searchUsersByID(idNum) {
    return this.users.find(user => {
      return user.id === idNum
    })
  }
  calculateAverageStepGoals() {
    const totalOfStepGoals = this.users.reduce((average, user) => {
      average += user.dailyStepGoal
      return average
    }, 0)
    const averageStepGoal = Math.round(totalOfStepGoals / this.users.length)
    return averageStepGoal
  }
};







if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
