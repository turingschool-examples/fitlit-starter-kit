class User {
  constructor(userData) {
    this.name = userData.name
    this.id = userData.id
    this.address = userData.address
    this.email = userData.email
    this.strideLength = userData.strideLength
    this.dailyStepGoal = userData.dailyStepGoal
    this.friends = userData.friends
  }

  returnUserFirstName() {
    return this.name.split(' ')[0]
  }
}

export default User;
