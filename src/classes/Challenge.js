class Challenge {
  constructor(currentUser) {
    this.current
    this.trends = null,
    this.leaderboard = null,
    this.challengeGoal = 5000,
    this.users = [];
    this.stepcounts = [];
  }
  getUsers(currentUser) {
    this.users.push(...currentUser.friends);
    this.users.unshift(currentUser.id)
  }
  getUsersSteps(Calculator, data) {
    // const calculatorA = new Calculator(1);
    // const userA = calculatorA.getUserWeekTotal(data, "2019/06/15", "numSteps");
    // console.log(userA);
  };
  // getLeaderboard() {
  //
  // };
};

if(typeof module !== 'undefined'){
  module.exports = Challenge;
}
