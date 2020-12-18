class User {
  constructor(userData) {
    this.userID = userData.id
    this.name = userData.name
    this.address = userData.address
    this.email = userData.email
    this.strideLength = userData.strideLength
    this.dailyStepGoal = userData.dailyStepGoal
    this.friends = userData.friends
  }

  getFirstName() {
    const fullName = this.name.split(' ')
    return fullName[0]
  }

}

// module.exports = User;
