class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  getUserData(id) {
    let selectedUser = this.userData.find(user => user.id === id);
    selectedUser.friends = this.getGroupData(selectedUser.friends);
    return selectedUser;
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
    let friends = members.map(memberId => {
      return this.userData.find(user => user.id === memberId);
    });
    return friends;
  }
}

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}
