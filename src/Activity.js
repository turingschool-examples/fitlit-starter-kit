class Activity {
  constructor(userData, userRepo) {
    this.userData = userData;
    this.userRepo = userRepo;
    // console.log(this.userData)
    // console.log(this.userRepo)
  }

  returnMilesWalkedForDate(date) {
    let stride = this.userRepo.strideLength;
    let steps = this.userData.find(record => record.date === date).numSteps;
    return +((stride * steps) / 5280).toFixed(2);
  }

  returnMinutesActiveGivenDate(date) {
    return this.userData.find(record => record.date === date).minutesActive;
  }

  returnAvgMinActiveGivenWeek(date) {
    let daySeven = this.userData.findIndex(record => record.date === date);
    let dayOne = daySeven - 6;

    return +(this.userData.reduce((acc, record, index) => {
      if (index <= daySeven && index >= dayOne) {
        acc += record.minutesActive;
      }
      return acc;
    }, 0) / 7).toFixed(2);
  } 

  wasStepGoalAchieved(date) {
    let steps = this.userData.find(record => record.date === date).numSteps;
    if (steps >= this.userRepo.dailyStepGoal) {
      return true;
    } else {
      return false;
    }
  }

  daysStepGoalExceeded() {
    return this.userData.filter(record => {
      return record.numSteps > this.userRepo.dailyStepGoal
    });
  }

  stairClimbingRecord() {
    return this.userData.reduce((acc, record) => {
      if (record.flightsOfStairs > acc) {
        acc = record.flightsOfStairs;
      }
      return acc;
    }, 0);
  }

  returnUsersStepTotal() {
    return this.userData.reduce((acc, record) => {
      acc += record.numSteps;
      return acc;
    }, 0);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}