class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUser(id) {
    return this.users.userData.find(obj => obj.id === id)
  }

  returnAvgStepGoal() {
    return this.users.userData.map(obj => obj.dailyStepGoal).reduce((acc, num) => {
      return acc + num
    }, 0) / this.users.userData.length
  }
  
}

module.exports = UserRepository;
