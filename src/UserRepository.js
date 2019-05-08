const userData = require('../data/users.js')
const User = require('./user.js')

class UserRepository {
  constructor(dataFilepath) {
    this.dataFilepath = dataFilepath;
    this.path = require(dataFilepath);

    this.userData = userData;
    this.user = {};
  }
  getUserDataFromId(id) {
    return this.userData.find(user => user.id === id);
  }
  getAverageStepGoal() {
    return this.userData.reduce((acc, stepGoal) => {
      acc += stepGoal.dailyStepGoal
      return acc;
    }, 0) / userData.length
  }
  getMostCommonState() {
    let states = [];
    userData.forEach((datum) => {
      let splitAddress = datum.address.split(' ');
      let stateIndex = splitAddress.length - 2;
      let state = splitAddress.splice(stateIndex, 1).toString();
      states.push(state);
    });
    return states.sort((a,b) =>
    states.filter(v => v===a).length
  - states.filter(v => v===b).length
    ).pop();
  };
};


module.exports = UserRepository;