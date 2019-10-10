const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

class Hydration {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.ounces = data.numOunces;
    this.drink(userRepository);
  }
  drink(userRepo) {
    var hydrate = this;
    userRepo.users.find(function(user) {
      return user.id === hydrate.userId;
    }).updateHydration(this.date, this.ounces);
  }
}

module.exports = Hydration;
