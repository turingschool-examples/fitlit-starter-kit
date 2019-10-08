class UserRepository {
  constructor(data) {
    //instantiate is all here? 
    this.data = data;
  }

  returnUserData(userID) {
    return this.data.find((element) => element.id === userID);
  }

  calculateAvgStepGoal() {
    let totalSteps = this.data.reduce((accumulator, element) => {
      return accumulator + element.dailyStepGoal;
    }, 0);
    return totalSteps / (this.data.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
