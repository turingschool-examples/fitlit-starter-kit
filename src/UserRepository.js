class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find(user => user.id === id);
  }

  getAvgStep() {
    let totalStep = this.data.reduce((avg, user) => {
      return avg += user.dailyStepGoal;
    }, 0);
    return totalStep / this.data.length;
  }
}

module.exports = UserRepository;

// A UserRepository holds onto all of the User objects
// It should have a parameter to take in user data
// It should have methods to determine:
// Given a user’s ID, what is their user data ?
//   The average step goal amongst all users