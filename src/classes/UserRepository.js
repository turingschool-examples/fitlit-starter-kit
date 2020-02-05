class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  getUserData(id) {
    let user = this.userData.find(user => user.id === id);
    user.friends = this.getGroupData(user.friends);
    return user;
  }

  getAvgStepGoal() {
    return this.userData.reduce((total, { dailyStepGoal }) => {
      total += dailyStepGoal / this.userData.length;
      return total;
    }, 0);
  }

  getRandomUserId(min = 1, max = 50) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getGroupData(members) {
    return members.map(memberId => {
      return this.userData.find(user => user.id === memberId);
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}
