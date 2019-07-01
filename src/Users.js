class User {
  constructor(user) {
    this.id = user.id,
    this.name = user.name,
    this.address = user.address,
    this.dailyStepGoal = user.dailyStepGoal,
    this.strideLength = user.strideLength,
    this.email = user.email,
    this.friends = user.friends
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}