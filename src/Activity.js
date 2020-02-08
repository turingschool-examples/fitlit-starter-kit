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

  determineStepGoalStatusForDay(userData, day, activityData) {
    let activityDaySummary = activityData.find(data => data.userID === this.userID && data.date === day);
    if(userData["dailyStepGoal"] > activityDaySummary["numSteps"]) {
      return 'Step goal not acheived'
    } else if (userData["dailyStepGoal"] <= activityDaySummary["numSteps"]) {
      return 'Step goal acheived!'
    }
  }

  findDaysExceedingStepGoal(userData, activityData) {
    let findAllUserActivityData = activityData.filter(data => data.userID === this.userID)
    .filter(data => userData["dailyStepGoal"] <= data["numSteps"])
    .map(data => {
      return {date: data["date"],
        numberOfSteps: data["numSteps"]}
    })

    return findAllUserActivityData
  }

  findAllTimeStairClimb(activityData) {
    let findAllUserActivityData = activityData.filter(data => this.userID === data.userID)
    .sort((a,b) => b.flightsOfStairs - a.flightsOfStairs);

    let highestStairClimb = findAllUserActivityData.filter(data => data["flightsOfStairs"] === findAllUserActivityData[0].flightsOfStairs)
    .map(data => {
      return {date: data["date"],
        numberOfSteps: data["flightsOfStairs"]}
    })

    return highestStairClimb
  }

  calculateAllTimeTotalFlightsOfStairsTaken(activityData) {
    let findAllUserActivityData = activityData.filter(data => this.userID === data.userID)
    .reduce((acc, data) =>{
      acc += data["flightsOfStairs"];
      return acc
    },0)

    return `${findAllUserActivityData} Stairs`
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
