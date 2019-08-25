class Activity {
  constructor(allActivityData, id, allUsers) {
    this.allActivityData = allActivityData;
    this.currentUserId = id;
    this.currentUserData;
    this.allUsers = allUsers;

    
  }

  findCurrentUserData() {
    this.currentUserData = this.allActivityData.filter((data) => data.userID === this.currentUserId);
    return this.currentUserData;
  }

  findMilesWalkedForSpecificDayOfUser(dateString) {
    let dayToCalculateSteps = this.currentUserData.filter(day => day.date === dateString)[0].numSteps;
    let strideLength = this.allUsers.filter(users => users.id === this.currentUserId)[0].strideLength;
    let totalFeet = dayToCalculateSteps / strideLength
    let milesWalked = 5280 / totalFeet;
    return parseFloat(milesWalked.toFixed(2));
  }

  findTotalMinutesActiveOnSpecificDayForUser(dateString, id) {
    return this.allActivityData.filter(day => day.date === dateString && day.userID === id)[0].minutesActive;
  }

  findMinutesActiveAvgForGivenWeekForUser(startDateString, endDateString) {
    return Math.round(this.currentUserData.filter((day) => {
      if (new Date(day.date) >= new Date(startDateString) && new Date(day.date) <= new Date(endDateString)) {
        return day
      }
    }).reduce((acc, currentDay) => {
      acc += currentDay.minutesActive
      return acc
    }, 0) / 7);
  }

  findIfStepGoalReachedOnDateForUser(dateString) {
    let stepGoal = this.allUsers.filter(user =>  user.id === this.currentUserId)[0].dailyStepGoal;
    let stepsForDay = this.currentUserData.filter(day => day.date === dateString)[0].numSteps;
    if (stepsForDay >= stepGoal) {
      return true
    } else {
      return false
    }
  }

  findDaysWhereStepGoalExceededForUser() {
    let stepGoal = this.allUsers.filter(user =>  user.id === this.currentUserId)[0].dailyStepGoal;
    return this.currentUserData.reduce((acc, currentDay) => {
      if(currentDay.numSteps > stepGoal) {
        acc.push(currentDay.date)
      }
      return acc
    }, [])
  }

  findAllTimeStairClimbingRecordForUser() {
    return this.currentUserData.reduce((acc, currentDay) => {
      if (currentDay.flightsOfStairs > acc.flightsOfStairs) {
        acc.date = currentDay.date;
        acc.flightsOfStairs = currentDay.flightsOfStairs;
      }
      return acc
    }, {date: "", flightsOfStairs: 0})
  }

  findAverageOfAnyActivityByDateForAllUsers(dateString, property) {
    let dates = this.allActivityData.filter(day => day.date === dateString);
    let avg = dates.reduce((acc, currentDay) => {
      acc += currentDay[property]
      return acc
    },0) / dates.length;
    return Math.round(avg)

  }
  

}





if (typeof module !== 'undefined') {
  module.exports = Activity;
}