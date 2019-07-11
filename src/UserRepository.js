class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(userId) {
    return this.data.find(dataSet => dataSet.id === userId);
  }

  averageStepGoals() {
    let numOfUsers = this.data.length;
    let avgStepGoal = this.data.reduce(function(accumulator, user) {
      return accumulator + user.dailyStepGoal;
    }, 0);
    return Math.ceil(avgStepGoal / numOfUsers);
  } 
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}