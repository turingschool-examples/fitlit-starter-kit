class UserRepository {
  constructor(data) {
    this.data = data || []
  }
  getUserData(specificId) {
    let userData = this.data.find(function(object) {
      return object.id === specificId
    })
    return userData
  }
  calculateAverageStepGoal() {
    let stepGoals = this.data.map(function(object) {
      return object.dailyStepGoal
    })
    let totalStepGoal = stepGoals.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0)
    let averageStepGoal = totalStepGoal / this.data.length;
    return averageStepGoal
  }
  
}





if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}