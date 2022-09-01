const data = require('../src/data/users.js')
class Hydration {
  constructor(users) {
    this.userID = users.userID
    console.log('here',this.userID)
  }

}

export default Hydration;
