class Challenge {
  constructor(currentUser) {
    this.trends = null,
    this.challengeGoal = 50000,
    this.userIDs = [];
    this.userData = [];
  }
  getUsers(currentUser) {
    this.userIDs.push(...currentUser.friends);
    this.userIDs.unshift(currentUser.id)
  }
  getUsersData(Calculator, data, userRepo) {
    this.userIDs.forEach(user => {
      let calculator = new Calculator(user);
      let userSteps = calculator.getUserWeekTotal(data, "2019/06/21", "numSteps");
      userSteps.id = user;
      userSteps.name = userRepo.find(person => person.id === user).name;
      userSteps.metrics = calculator.calculateTotal(userSteps);
      this.userData.push(userSteps)
    });

    this.userData.sort((a, b) => b.metrics - a.metrics);
  };

  getLeaderboardPercentages() {
    const steps = this.userData.map(person => {
      const percentage = (person.metrics * 100 / this.userData[0].metrics).toFixed(0);
      return percentage});
      
    return steps;
  };
};


if(typeof module !== 'undefined'){
  module.exports = Challenge;
}
