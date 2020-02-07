class Activity {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.numSteps;
    this.minutesActive;
    this.flightsOfStairs;
  }

  findMilesWalkedByDay(userData) {
    let milesWalked = ((userData.dailyStepGoal * userData.strideLength)/5280).toFixed(1);
    return `${milesWalked} Miles`
  }

  findMinutesActiveByDay() {
  }

  findMinutesActiveByWeek() {
  }

  determineStepGoalStatusForDay() {
  }

  findDaysExceedingStepGoal() {
  }

  findAllTimeStairClimb() {
	// find the day of most stair climb (included date and stairclimber amount)
  }

  calculateAllTimeStepsTaken() {
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
