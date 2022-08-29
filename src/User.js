const data = require('../src/data/users.js')

class User {
  constructor(data) {
    this.name = data.name
    this.id = data.idea
    this.address = data.address
    this.email = data.email
    this.strideLength = data.strideLength
    this.dailyStepGoal = data.dailyStepGoal
    this.friends = data.friends
  }

  returnUserFirstName() {
    return this.name
  }
}
