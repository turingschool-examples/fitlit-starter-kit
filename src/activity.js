const User = require('../src/user');

class Activity extends User {
  constructor (user, currentUser) {
    super(user, currentUser)
    this.currentUser = currentUser
    this.user = user
  }

  milesWalked(date) {
    console.log(this.user)
  }

}

module.exports = Activity
