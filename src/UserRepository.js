const userData = require('../src/data/users.js')

class UserRepository {
 constructor(userData) {
  this.users = userData
 }
 findUserData(id) {
  const userID = this.users.find(id => userData[id] === id) 
 }
}
 console.log(this.findUserData[1]);


export default UserRepository;