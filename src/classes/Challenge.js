class Challenge {
  constructor() {
    this.trends = null,
    this.leaderboard = null,
    this.challengeGoal = 5000,
    this.users = [];
  }
  getUsers(currentUser) {
    this.users.push(...currentUser.friends);
    this.users.unshift(currentUser)
  }
  getTrends() {

  };
  getLeaderboard() {

  };
};

if(typeof module !== 'undefined'){
  module.exports = Challenge;
}
