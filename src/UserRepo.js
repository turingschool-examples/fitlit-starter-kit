class UserRepo {
  constructor(data) {
    this.data = data;
    this.users = [];

  }

  getUserData(id) {
    return users.find(user => {
      return user.id;
    })
  }

  getAvgStepGoal() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
