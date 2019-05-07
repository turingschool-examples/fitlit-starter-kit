// const User = require('../src/User')
const userData = require('../data/users')

class UserRepository {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath || '';
  }
  getUserData(id) {
    return this.dataFilePath.filter(user => user.id === id)
  }

  averageSteps() {

  }

  mostStates() {
    
  }
}

module.exports = UserRepository;