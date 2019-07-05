// const User = require('../src/user');

class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(id) {
    return this.data.find(el => el.id === id);
  }

  makeFriendNames(id) {
    const user = new User(this.returnUserData(id));
    let friends = user.friends.map(el => this.returnUserData(el));
    return friends.map(el => el.name).join(', ')
  }

  returnAverageStepGoal() {
    return Math.ceil(this.data.reduce((acc, total) => acc + total.dailyStepGoal, 0) / this.data.length)
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
