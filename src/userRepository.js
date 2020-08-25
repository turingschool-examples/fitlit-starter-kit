class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(userID) {
    return this.data.filter(datum => {
      if (datum.id === userID) {
        return datum;
      }
    })
  }
  returnTotalAverageStepGoal() {
    let totalStepGoal = 0;
    this.data.forEach(datum => {
      return (totalStepGoal += datum['dailyStepGoal']);
    })
    return Math.floor(totalStepGoal / this.data.length);
  }
}



module.exports = UserRepository;
