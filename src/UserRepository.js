import { use } from 'chai';

const data = require('./data/users.js')

class UserRepository {
 constructor(users) {
  this.users = users;
 }

 findUserData(id) {
  const findUserData = this.users.find(user => id === user.id)
    return findUserData
 }

 calculateAvgStepGoal() {
  let numOfElements = 0;
  const stepGoal = this.users.reduce((acc, element) => {
    acc += element.dailyStepGoal

    numOfElements++
    return acc
  }, 0)
  return Math.round(stepGoal / this.users.length)
  }  
}

export default UserRepository;
