class UserActivity {
  constructor(userData, activityData) {
    this.userData = userData;
    this.activityData = activityData;
    this.filteredActivity = this.activityDataFilter();
  }

  activityDataFilter() {
    let activityDataFilter = this.activityData.filter(activityObject => {
      return activityObject.userID === this.userData.id;
    })
    return activityDataFilter
  }

  userStepsByDate(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
  }

  userMilesByDate() {
    let milesByDate = this.filteredActivity.slice(-1)
    return parseFloat(((milesByDate[0].numSteps * this.userData.strideLength) / 5280).toFixed(2))
  }

  userStepCountByWeek() {
    return this.filteredActivity.slice(-7).map(activity => activity.numSteps)
  };

  userMinutesActiveByDate() {
    let minutesActive = this.filteredActivity.slice(-1)
    return minutesActive[0].minutesActive
  }

  userMinutesActiveByWeek() {
    return this.filteredActivity.slice(-7).map(activityObject => activityObject.minutesActive)
  }

  userWeeklyMinutesActiveAverage() { 
    let avg = this.filteredActivity.reduce((avg, activityUserArray) => {
      return avg += activityUserArray.minutesActive;
    }, 0)
    return parseFloat((avg / this.userMinutesActiveByWeek().length).toFixed(2));
  }

  userStepsByWeek(id) {
    let activityDataFilter = this.activityData.filter(activityObject => {
      return activityObject.userID === id;
    })

    let average = this.userStepCountByWeek().reduce((avg, activityUserArray) => {
      return avg += activityUserArray;
    }, 0)

    return parseInt((average / this.userStepCountByWeek().length));
  }

  userStepGoalMetByDate(date) {
    let dailySteps = this.filteredActivity.find(activityObject => {
      return activityObject.date === date;
    })
    return dailySteps.numSteps > this.userData.dailyStepGoal
  }

  userStairsClimbedByWeek() {
    return this.filteredActivity.slice(-7).map(activityObject => activityObject.flightsOfStairs)
  }

  userStepGoalMetAllTime() {
    let activityDataFilter = this.activityData.filter(activityObject => {
      if (activityObject.numSteps > this.userData.dailyStepGoal) {
        return activityObject.userID === this.userData.id;
      }
    })
    let stepGoalMet = activityDataFilter.reduce((acc, activityObject) => {
      return acc.concat(activityObject.date)
    }, [])
    return stepGoalMet
  }

  userStairClimbedAllTime() {
    let activityDataFilter = this.activityData.filter(activityObject => {
      return activityObject.userID === this.userData.id;
    })

    activityDataFilter.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs})

    return activityDataFilter[0].flightsOfStairs
  }

  usersActivityAvgByDate(goal) {
    let usersActivity = this.activityData.filter(activityObject => {
      return activityObject.date === '2019/06/22';
    })

    let usersGoalMet = usersActivity.reduce((acc, activityObject) => {
      return acc += activityObject[goal]
    }, 0)
    return (usersGoalMet / usersActivity.length)
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
