class UserRepository {
  constructor(filepathway) {
    this.filepathway = filepathway;
  }

  returnData(userId) {
    return this.filepathway.find(user => user.id == userId);
  }

  aveDailySteps() {
    return this.filepathway.reduce((totalSteps, singleUserSteps) => {
      return totalSteps += (singleUserSteps.dailyStepGoal / this.filepathway.length);
    }, 0);
  }

  findMostCommonState() {
    
  }
}

module.exports = UserRepository;
