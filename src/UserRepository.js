const data = require('../src/data/users.js')

class UserRepository {
 constructor(users) {
  this.users = users;
 }

 findUserData(id) {
  this.users.find(id => this.users[id] === id)
  return this.users[id]
 }

 calculateAvgStepGoal() {
  let numOfElements = 0;
  const stepGoal = this.users.reduce((acc, element) => {
    acc += element.dailyStepGoal

    numOfElements++
    return acc
  }, 0) / 3

  return Math.round(stepGoal)

  }

}


export default UserRepository;
