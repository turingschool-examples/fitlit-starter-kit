class UserRepository {
  constructor(data) {
    this.users = data
    //this.users should be an array[3]
  }

  returnUserData() {
 //input = data.userData.id
 //expected output = user data
 //should user object
  }

  countUsers() {
    //should return the length of this.users
  }

  calculateAverageStepGoal() {
    //should return overall average step goal
    //should be a number
    //.reduce
  }

  calculateAverageStep() {
    //should return overall average step taken
    //should be a number
  }

  calculateAverageSleepQuality() {
    //should return overall average sleepQuality
    //should be a number
  }

  calculateAverageNumStairsClimbed() {
    //should return overall average stairs climbed
    //should be a number
  }

  calculateAverageActiveMinutes() {
    //should return overall average minutes active
    //should be a number
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
