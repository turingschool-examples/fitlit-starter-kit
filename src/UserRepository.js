// require dataFilepath ???


class UserRepository {
  constructor(users) {
    this.users= users || [];
  }

  returnUserData(userID) {
    let user = this.users.find((user) => {
      return user.id === userID;
    })
    return user;
  }

  returnAverageStepGoal() {
    let average = this.users.reduce((total, user) => {
      return total += user.dailyStepGoal / this.users.length;
    }, 0)
    return average;
  }

  returnAllUsersAddresses() {
    let allAddresses = this.users.map((user) => {
      return user.address;
    });
    return allAddresses;
  }

  returnAllStates() {
    let justStates = this.returnAllUsersAddresses()
    return justStates.map((address) => {
      return address.split(' ').filter((word) => word.length === 2).join('');
    })
    return justStates
  }

  returnMostFrequentState() {
    let mostCommonState = this.returnAllStates();
    return mostCommonState.sort((a, b) => mostCommonState.filter(state => state === a).length - mostCommonState.filter(state => state === b).length).pop();
  }
}

module.exports = UserRepository;