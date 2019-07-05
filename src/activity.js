class Activity {
    constructor(data, id) {
      this.data = data.filter(user => user.userID === id);
      this.id = id;
    }

  returnDailyMiles(date) {
    let currentStrideLength = testUserRepo.returnUser(this.id).strideLength;
    let currentDay = this.data.find(day => day.date === date);
    return (currentStrideLength * currentDay.numSteps / 5280).toFixed(1)
  }

  returnDay(date) {
     return this.data.find(day => day.date === date);
  }


};

if (typeof module !== 'undefined') {
    module.exports = Activity;
}