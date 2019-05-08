// const User = require('../src/User')
const userData = require('../data/users')

class UserRepository {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath || '';
  }
  getUserData(id) {
    return this.dataFilePath.filter(user => user.id === id)
  }

  averageSteps() {
    let allSteps = this.dataFilePath.map(el => el.dailyStepGoal);
    let totalSteps = allSteps.reduce((acc, curr) => acc + curr);
    return totalSteps / allSteps.length;
  }

  mostStates() {
    let states = this.dataFilePath.map(user => user.address.split(' ').reverse()[1]);
    let statesObj = states.reduce(function(acc,curr){
      if(acc[curr]){
        acc[curr] += 1
      } else {
      acc[curr] = 1;
      }
      return acc
    }, {})
    let stateVals = Object.values(statesObj)
    let result = Object.keys(statesObj).filter(el => statesObj[el] === Math.max(...stateVals))
    return result;
  }
}

if(typeof module !== undefined){
module.exports = UserRepository;
}