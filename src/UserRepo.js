const User = require('./User');

class UserRepo {
  constructor(dataset) {    
    this.data = dataset.map(userData => new User(userData));
  }
  
  returnUserData(id) {
    return this.data[id - 1];
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}