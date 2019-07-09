class UserRepository {
  constructor(data) {
    this.data = data || []
  }
  getUserData(specificId) {
    let userData = this.data.find(function(aUser) {
      return aUser.id === specificId
    })
    return userData
  }
  calculateAverageStepGoal() {
    let stepGoals = this.data.map(function(aUser) {
      return aUser.dailyStepGoal
    })
    let totalStepGoal = stepGoals.reduce(function(total, goal) {
      return total = total + goal
    }, 0)
    let averageStepGoal = totalStepGoal / this.data.length;
    return averageStepGoal
  }
  
}





if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}