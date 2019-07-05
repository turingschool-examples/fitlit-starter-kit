const userData = require("../data/users")
const UserRepository = require("./user-repository");

class Activity {
    constructor(data, id) {
      this.data = data.filter(user => user.userID === id);
      this.id = id;
    }

  returnDailyMiles(date) {
    let userRepo = new UserRepository(userData);
    let currentStrideLength = userRepo.returnUser(this.id).strideLength;
    let currentDay = this.data.find(day => day.date === date);
    return parseFloat((currentStrideLength * currentDay.numSteps / 5280).toFixed(1))
  }

  returnDay(date) {
     return this.data.find(day => day.date === date);
  }


};

if (typeof module !== 'undefined') {
    module.exports = Activity;
}