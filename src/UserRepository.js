class UserRepository {
  constructor(dataFilepath) {
    this.dataFilepath = dataFilepath;
    this.userData = this.findFilepath(dataFilepath)

  }
  getUserDataFromId(id) {
    return this.userData.find(user => user.id === id);
  }

  getAverageStepGoal() {
    return this.userData.reduce((acc, stepGoal) => {
      acc += stepGoal.dailyStepGoal
      return acc;
    }, 0) / this.userData.length
  }

  getMostCommonState() {
    let states = [];
    this.userData.forEach((datum) => {
      let splitAddress = datum.address.split(' ');
      let stateIndex = splitAddress.length - 2;
      let state = splitAddress.splice(stateIndex, 1).toString();
      states.push(state);
    });
    return states.sort((a,b) =>
    states.filter(v => v===a).length
  - states.filter(v => v===b).length
    ).pop();
  }
  findFilepath(dataFilepath) {
    if(typeof module !== 'undefined') {
      return require(dataFilepath);
  } else {
    return userData;
    }
  }
  instantiateUsers() {
    return userData.map(datum => datum = new User(datum));
  }
}



if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = UserRepository;
}
