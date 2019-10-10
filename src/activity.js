class Activity {
  constructor(data, user) {
    this.data = data
    this.user = user
  }

  milesWalked(date) {
   let day = this.data.find(element => element.date === date)
   return ((day.numSteps * this.user.strideLength) / 5280).toPrecision(2)
  }

  minutesActiveGivenDay(date) {
    let day = this.data.find(element => element.date === date)
    return day.minutesActive
  }

  avgMinActiveWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    let avg = week.reduce((acc, curVal) => {
      acc += curVal.minutesActive
      return acc
    }, 0)

    return (avg / week.length).toPrecision(3)
  }

  minActiveWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => day.minutesActive)
  }

  stepGoalReached(date) {
    let day = this.data.find(element => element.date === date)
    if (this.user.dailyStepGoal <= day.numSteps) {
      return `You\'ve walked: ${day.numSteps} steps, Step Goal Reached!`
    } else {
      return `You\'ve walked: ${day.numSteps} steps, Get Steppin\', Goal Not Reached!`
    }
  }

  stepsWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => day.numSteps)
  }

  findDaysGoalExceeded() {
    let days = this.data.filter(day => day.numSteps >= this.user.dailyStepGoal)
    return days.map(element => element.date)
  }

  allTimeStairs() {
    let sorted = this.data.sort((a, b) => a.flightsOfStairs - b.flightsOfStairs)
    return sorted[sorted.length - 1].flightsOfStairs
  }

  stairsWeek(date) {
    let index = this.data.findIndex(element => element.date === date)
    let week = this.data.slice(index, (index + 7))
    return week.map(day => day.flightsOfStairs)
  }

}

if (typeof module !== 'undefined'){
 module.exports = Activity;
}