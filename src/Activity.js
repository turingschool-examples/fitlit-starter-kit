class Activity {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.numSteps;
    this.minutesActive;
    this.flightsOfStairs;
  }

  findMilesWalkedByDay(userData, date, activityData) {
    let currentData = activityData.find(data => data.userID == this.userID && data.date === date);
    let milesWalked = ((currentData["numSteps"] * userData["strideLength"])/5280).toFixed(1);
    return `${milesWalked} Miles`
  }

  findMinutesActiveByDay(date, activityData) {
    let currentData = activityData.find(data => data.userID === this.userID && data.date === date);
    return currentData["minutesActive"]
  }

  findMinutesActiveByWeek(dateRange, activityData) {
    let userWeekMinutesActive = [];
    let userActivityData = activityData.filter(activity => activity.userID === this.userID);
    dateRange.forEach(date => {
      userActivityData.map(data => {
        if(date === data.date) {
          userWeekMinutesActive.push(data["minutesActive"])
        }
      })
    })
    let totalMinuteforWeek = userWeekMinutesActive.reduce((acc, el) => {
      acc += el
      return acc
    },0);
    let averageMinutesForWeek = (totalMinuteforWeek/dateRange.length).toFixed(1)

    return `${averageMinutesForWeek} minutes`
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
