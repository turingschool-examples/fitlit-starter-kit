class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUser = (id) => {
    return this.users.find(obj => {
      return obj.id === id;
    });
  };

  returnAvgStepGoal() {
    return this.users.map(obj => obj.dailyStepGoal).reduce((acc, num) => {
      return acc + num
    }, 0) / this.users.length
  };
};

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}
