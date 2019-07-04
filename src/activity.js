const User = require('../src/user');

class Activity extends User {
  constructor (user, currentUser) {
    super(user, currentUser)
    this.currentUser = currentUser
    this.user = user
  }

  milesWalked(date) {
    let found = this.currentUser.find(el => el.date === date);
    return ((found.numSteps * this.user.strideLength) / 5280).toFixed(2)
  }


}

module.exports = Activity
