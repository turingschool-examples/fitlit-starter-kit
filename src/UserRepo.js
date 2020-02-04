class UserRepo {
  constructor(users) {
    this.users = users;
  }

  findUserId() {
    users.find(user => {
      return user.id;
    })
  }

  calculateAvgStepGoal() {

  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
