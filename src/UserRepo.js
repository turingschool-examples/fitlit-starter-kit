const User = require('./User');

class UserRepo {
  constructor(dataset) {    
    this.data = dataset.map(userData => new User(userData));
  }    
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}