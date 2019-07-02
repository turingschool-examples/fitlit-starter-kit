class UserRepo{
  constructor(sampleUsers) {
    this.sampleUsers = sampleUsers;
  }

  returnUserData(id, sampleUsers) {
    return sampleUsers.find(user => id === user.id);
}
  averageGoalSteps() {
    return sampleUsers.reduce(function(steps,cur) {
      return steps + cur.dailyStepGoal/sampleUsers.length;
    }, 0);
};


}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}