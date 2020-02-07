class Challenge {
  constructor(currentUser) {
    this.current
    this.trends = null,
    this.leaderboard = null,
    this.challengeGoal = 5000,
    this.users = [];
    this.stepCounts = [];
  }
  getUsers(currentUser) {
    this.users.push(...currentUser.friends);
    this.users.unshift(currentUser.id)
  }
  getUsersSteps(Calculator, data) {
    this.users.forEach(user => {
      const calculator = new Calculator(1);
      const userSteps = calculator.getUserWeekTotal(data, "2019/06/21", "numSteps");
      this.stepCounts.push(userSteps)
    })
  };
  // getLeaderboard() {
  //
  // };
};

if(typeof module !== 'undefined'){
  module.exports = Challenge;
}
