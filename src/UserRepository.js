const data = require('../src/data/users.js')

class UserRepository {
 constructor(data) {
  this.users = data.users
 }

 findUserData(id) {
   return this.users.id
 }

 calculateAvgStepGoal() {
   
 }
//  findUserData(id) {
//   const userID = this.users.find(id => userData[id] === id)
//  }
// }
//  console.log(this.findUserData[1]);


// export default UserRepository;
module.exports = UserRepository;
