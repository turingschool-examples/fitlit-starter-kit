const User = require('../src/User')

class UsersRepo {
  constructor(users) {
    this.allUsers = users
    this.allUsers2 = []
  }

  createUsers() {
    this.allUsers.forEach(user => {
      let newUser = new User(user)
      this.allUsers2.push(newUser)
    })
  }

  getUser(id) {
    if (typeof id === 'number') {
      return this.allUsers.find(user => user.id === id)
    } else {return 'You must pass a number'}   
  }

  getAvgStepGoal() {
    return this.allUsers.reduce((acc, user) => {
      return acc += user.dailyStepGoal / this.allUsers.length
    }, 0)
  }

}

if (typeof module !== 'undefined') {
  module.exports = UsersRepo;
}

//TEST FOR WRONG DATA TYPE IN CONSTRUCTOR