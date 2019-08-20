class UserRepository {
  constructor(dataObj) {
    this.users = dataObj;
  }

  determineUserData(id) {
    return this.users.find(element => {
      if(element.id === id) {
        return element;
      }
    });
  }

  calculateAverageStepGoals() {
    let addedSteps = this.users.reduce((totalSteps, dailyGoal) => {
      return totalSteps += dailyGoal.dailyStepGoal;
    }, 0);
    return addedSteps / this.users.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}