class UserRepository {
  constructor(data) {
    this.data = data;
    this.length = this.data.length
  }
  getUserData(id) {
    return this.data.find(user => {
      if (user.id === id) {
        return user;
      }
    })
  }
  getAllUsersAvgStepGoal() {
    return Math.round(this.data.reduce((total, user) => total += user.dailyStepGoal, 0) / this.data.length)
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}