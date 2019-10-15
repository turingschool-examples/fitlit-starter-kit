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

  userMinutesActiveByDate() {
    let minutesActive = this.filteredActivity.slice(-1)
    return minutesActive[0].minutesActive
  }

  userMinutesActiveByWeek() {
    let activityWeek = this.filteredActivity.slice(-7).map(activityObject => activityObject.minutesActive)

    let avg = this.filteredActivity.reduce((avg, activityUserArray) => {
      return avg += activityUserArray.minutesActive;
    }, 0)
    return parseFloat((avg / activityWeek.length).toFixed(2));
  }

  userStepsByWeek(id) {

    let activityDataFilter = this.activityData.filter(activityObject => {
      return activityObject.userID === id;
    })

    let activityWeek = activityDataFilter.slice(-7).map(activityObject => activityObject.numSteps)

    let average = activityWeek.reduce((avg, activityUserArray) => {
      return avg += activityUserArray;
    }, 0)

    return parseInt((average / activityWeek.length));
  }


  userStepGoalMetByDate(date) {
    let dailySteps = this.filteredActivity.find(activityObject => {
      return activityObject.date === date;
    })
    return dailySteps.numSteps > this.userData.dailyStepGoal
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

  userThreeDaySteps() {
    var steps = 0;
    var counter = 0;
    let activityDataFilter = this.filteredActivity.filter(activityObject => {
      if (steps < activityObject.numSteps) {
        counter += 1;
      } else {
        counter = 0;
      }

      if (counter === 3) {
        counter = 0;
        return activityObject.userID === this.userData.id;
      }
        steps = activityObject.numSteps
    })
  return activityDataFilter
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
