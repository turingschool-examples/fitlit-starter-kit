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
    let commonStates = this.filepathway.map(user => user.address.split(' ')[user.address.split(' ').length - 2]);
    let stateRanking = commonStates.reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
    return acc;
  }, {});
  return Object.entries(stateRanking).sort((a, b) => a[1] - b[1]).pop()[0];
  }

}

module.exports = UserRepository;
