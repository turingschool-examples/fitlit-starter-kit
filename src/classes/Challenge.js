class Challenge {
  constructor(currentUser) {
    this.trends = null,
    this.challengeGoal = 50000,
    this.users = [];
    this.stepCounts = [];
  }
  getUsers(currentUser) {
    this.users.push(...currentUser.friends);
    this.users.unshift(currentUser.id)
  }
  getUsersSteps(Calculator, data) {
    this.users.forEach(user => {
      let calculator = new Calculator(user);
      let userSteps = calculator.getUserWeekTotal(data, "2019/06/21", "numSteps");
      userSteps.id = user;
      userSteps.metrics = calculator.calculateTotal(userSteps);
      this.stepCounts.push(userSteps)
    });

    this.stepCounts.sort((a, b) => b.metrics - a.metrics);
  };

  getFriendNames(repo) {
    return repo.users.reduce((names, user) => {
      if (this.stepCounts
        .find(challengeUser => challengeUser.id === user.id)) {
        names.push(user.getFirstName());
        return names;
      }
    }, []);
  };
};


if(typeof module !== 'undefined'){
  module.exports = Challenge;
}
