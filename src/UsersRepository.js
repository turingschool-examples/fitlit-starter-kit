class UsersRepository {
  constructor(id) {
    this.id = id;
  }

  getUserDataById(userData) {
    return userData.find(data => data.id === this.id)
  }

  calculateAverageStepGoal(userData) {
   let totalSteps = userData.reduce((acc, data) => {
     acc += data.dailyStepGoal;
     return acc;
   }, 0);

   let averageSteps = Math.trunc(totalSteps / userData.length);
   return averageSteps;
  }

  findAllUserAverageStairsClimbedForSpecificDate() {

  }

  findAllUserStepsTakeForSpecificDate() {

  }

  findAllUserMinutesActiveForSpecificDate() {

  }

  findAverageSleepQualityForAllUsers() {

  }

  findAllUserSleepQualityOverThree() {
	// average for given week //
  }

  findUsersMostSleepTimeByDay() {

  }

  findUserHighestSleepAverage() {
	// find user with the highest sleep average overall //
  }

}

if (typeof module !== 'undefined') {
  module.exports = UsersRepository;
}
