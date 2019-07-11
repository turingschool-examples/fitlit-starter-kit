
class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  getUserData() {
    return this.data.find (user => user.id === this.id)
  }
  
  getAverageStepGoal() {
    return Number(this.data.reduce((a, b) => a + b.dailyStepGoal, 0) / this.data.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}