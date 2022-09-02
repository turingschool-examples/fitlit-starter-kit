const data = require('../src/data/users.js')
import UserRepository from '../src/UserRepository';


class Hydration {
  constructor(userData) {
    this.userData = userData
  }
  calculateOuncesWaterConsumedSpecificDay(userID) {
    let ouncesByDate;
    let userDataById = this.userData.filter(user => {
        if (userID === user.userID) {
            return user
        }
    })

    //return userDataById

  }


}

export default Hydration;
