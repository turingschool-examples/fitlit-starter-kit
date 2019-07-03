class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }


  aveFlightsOfStairsClimbedForDay(date) {
    let users = this.activityData.filter(el => el.date === date)
    let value = users.reduce(( acc, current) => acc + current.flightsOfStairs, 0) / users.length
    return parseFloat(value.toFixed(1))
  }

  aveStepsTakenForDay(date) {
    let users = this.activityData.filter(el => el.date === date)
    let value = users.reduce(( acc, current) => acc + current.numSteps, 0) / users.length
    return parseFloat(value.toFixed(1))
 }

  aveMinutesActiveForDay(date) {
    let users = this.activityData.filter(el => el.date === date)
    let value = users.reduce(( acc, current) => acc + current.minutesActive, 0) / users.length
    return parseFloat(value.toFixed(1))
  }



}

module.exports = ActivityRepository
