class Users {
  constructor (userData) {
    this.userID = userData.id,
    this.name = name || '',
    this.address = address || '',
    this.email = email || 'nobody@gmail.com',
    this.strideLength = strideLength || 1,
    this.dailyStepGoal = dailyStepGoal || 11000
  }
}

module.exports = Users;