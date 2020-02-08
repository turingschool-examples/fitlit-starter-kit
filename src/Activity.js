class Activity {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.numSteps;
    this.minutesActive;
    this.flightsOfStairs;
  }

  findMilesWalkedByDay(userID, userData, date, activityData) {
    let currentData = activityData.find(data => data.userID === userID && data.date === date);
    let milesWalked = ((currentData["numSteps"] * userData["strideLength"])/5280).toFixed(1);
    return `${milesWalked} Miles`
  }

  findMinutesActiveByDay(userID, date, activityData) {
    let currentData = activityData.find(data => data.userID === userID && data.date === date);
    return currentData["minutesActive"]
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
