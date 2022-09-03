const data = require('../src/data/users.js')
import UserRepository from '../src/UserRepository';


class Hydration {
  constructor(userData) {
    this.userData = userData
  }

  // findUserData(userID) {
  //  this.userData.find(userID => this.userData[userID] === userID)
  //  return this.userData[userID]
  // }
  findWaterById(userID) {
      const hydrationDataById = this.userData.filter(user => {
          if (userID === user.userID) {
              return user
          }
      })
      console.log(hydrationDataById)
      return hydrationDataById
  }

  findWaterConsumedByDate(userID, date) {
        const hydrationDataById = this.findWaterById(userID)
        const findWaterConsumedByDate = hydrationDataById.find(user => user.date === date)
        console.log(findWaterConsumedByDate.numOunces)
        return findWaterConsumedByDate.numOunces
    }


}

export default Hydration;
