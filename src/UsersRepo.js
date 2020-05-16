//const User = require('../src/User');

class UsersRepo {
  constructor(usersData) {
    this.allUsers = usersData;
    // this.allUsers2 = []
  }

  // createUsers(users) {
  //   console.log('users', users)
  //   return users.map(user => new User(user))
  // }

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