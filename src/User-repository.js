class UserRepository {
  constructor(users) {
    this.users = users;
  }

  returnUserData(idNum) {
    return this.users.find((currentElement) => currentElement.id === idNum);
  }

  returnAllUsersAverageStepGoal() {
    let sum = this.users.reduce((acc, currentValue) => {
      return acc + currentValue.dailyStepGoal;
    }, 0);
    return parseInt(sum / this.users.length)
  }
}

module.exports = UserRepository;