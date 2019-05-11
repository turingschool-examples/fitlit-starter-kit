if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  activityData = require('../data/activity-test-data')
  User = require('./User')
  user = new User(1)
}

class Activity {
  constructor() {
    this.activeData = (this.findActivityData(user.user.id));
  }

  findActivityData(ident) {
    return activityData.find(user => user.userID === ident)
  }

//For a specific day(specified by a date), return the miles a user has walked based on their number of steps(use their strideLength to help calculate this)

  milesWalkedToday(day) {
    let todaysData = this.activeData.activityData.find(today => today.date === day)
    let walkedToday = (todaysData.numSteps * user.user.strideLength) / 5280;
    return parseFloat(walkedToday.toFixed(2))
  }

//For a user, (identified by their userID) how many minutes were they active for a given day(specified by a date) ?
  activeMinutesPerDay(day) {
    let todaysData = this.activeData.activityData.find(today => today.date === day)
    return todaysData.minutesActive
  }
  
//For a user, how many minutes active did they average for a given week(7 days) ?
  activeMinutesPerWeek(weekStart) {
    let firstDayIndex = this.activeData.activityData.findIndex(ele => ele.date === weekStart)
    let week = this.activeData.activityData.slice(firstDayIndex, firstDayIndex + 7)
      .map(minutes => minutes.minutesActive)
    let weekTotal = week.reduce((acc, minute) =>
      acc += minute, 0) / 7
    return parseFloat(weekTotal.toFixed(2))
  }
//For a user, did they reach their step goal for a given day(specified by a date) ?
  stepGoalReached(day) {
    let activityDataForDay = this.activeData.activityData.find(ele => ele.date === day)
    let stepsForDay = activityDataForDay.numSteps
    let userStepGoal = user.user.dailyStepGoal
    return userStepGoal <= stepsForDay
  }

  //For a user, find all the days where they exceeded their step goal
  daysExceededStepGoal() {
    let dailyStepGoal = user.user.dailyStepGoal
    let filteredDays = this.activeData.activityData
      .filter(steps =>  steps.numSteps > dailyStepGoal)

    return filteredDays.map(date => date.date)
  }

  //For a user, find their all - time stair climbing record

  allTimeStairRecord() {
    return this.activeData.activityData.sort((a, b)=> b.flightsOfStairs - a.flightsOfStairs).map(stair => stair.flightsOfStairs).shift()
  }

//For *ALL* users, what is the average number of:

// stairs climbed for a specified date
  allUsersStairsClimbedToday(day) {
    let allStairs = activityData.reduce((acc, sum) => {
      sum.activityData.forEach(stair => {
        if (acc.indexOf(stair) === -1)
        acc.push(stair)
      })
      return acc
    }, [])
    let stairsForDays = allStairs.filter(days => days.date === day)
    let totalOfStairs = stairsForDays.reduce((acc, stairs) => {
      acc += stairs.flightsOfStairs
      return acc
    }, 0)
    return Math.round(totalOfStairs / stairsForDays.length)
  }
// steps taken for a specific date

  stepsTakenOnDate(day) {
    let allSteps = activityData.reduce((acc, sum) => {
      sum.activityData.forEach(step => {
        if (acc.indexOf(step) === -1)
          acc.push(step)
      })
      return acc
    }, [])
    let stepsForDays = allSteps.filter(days => days.date === day)
    let totalOfSteps = stepsForDays.reduce((acc, steps) => {
      acc += steps.numSteps
      return acc
    }, 0)
    return Math.round(totalOfSteps / stepsForDays.length)
  }

//minutes active for a specific date
  minutesActiveForDate(day) {
    let allMinutes = activityData.reduce((acc, sum) => {
      sum.activityData.forEach(minute => {
        if (acc.indexOf(minute) === -1)
          acc.push(minute)
      })
      return acc
    }, [])
    let minutesForDays = allMinutes.filter(days => days.date === day)
    let totalOfMinutes = minutesForDays.reduce((acc, minutes) => {
      acc += minutes.minutesActive
      return acc
    }, 0)
    return Math.round(totalOfMinutes / minutesForDays.length)
  }
//Make a metric of your own! Document it, calculate it, and display it.
}



if (typeof module !== 'undefined') {
  module.exports = Activity;
}