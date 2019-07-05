class Activity {
  constructor(userData, userRepo) {
    this.userData = userData;
    this.userRepo = userRepo;
    console.log(this.userData)
    console.log(this.userRepo)
  }

  returnMilesWalkedForDate(date) {
    let stride = this.userRepo.strideLength;
    let steps = this.userData.find(record => record.date === date).numSteps;
    return +((stride * steps) / 5280).toFixed(2);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}