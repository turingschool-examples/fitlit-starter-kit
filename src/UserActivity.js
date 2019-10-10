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

 activityDataFilterByDate(date) {
   let milesByDate = this.filteredActivity.find(activityObject => {
     return activityObject.date === date;
   })

   return parseFloat(((milesByDate.numSteps * this.userData.strideLength) / 5280).toFixed(2))
  }

 userMinutesActiveByDate(date) {
   let minutesActive = this.filteredActivity.find(activityObject => {
     return activityObject.date === date;
   })

   return minutesActive.minutesActive
  }

  userMinutesActiveByWeek() {
  let activityWeek = this.filteredActivity.slice(-7).map(activityObject => activityObject.minutesActive)

  let avg = this.filteredActivity.reduce((avg, activityUserArray) => {
      return avg += activityUserArray.minutesActive;
    }, 0)

    return parseFloat((avg / activityWeek.length).toFixed(2));

 }

 userStepGoalMetByDate(date) {
 let dailySteps = this.filteredActivity.find(activityObject => {
     return activityObject.date === date;
   })

   return dailySteps.numSteps > this.userData.dailyStepGoal
  }

 userStepGoalMetAllTime() {
  // For a user, find all the days where they exceeded their step goal
  let activityDataFilter = this.activityData.filter(activityObject => {
    if (activityObject.numSteps > this.userData.dailyStepGoal) {
    return activityObject.userID === this.userData.id;
    }
  })
  let stepGoalMet = activityDataFilter.reduce((acc,activityObject) => {
      return acc.concat(activityObject.date)
  },[])
  return stepGoalMet
 }

 userStairClimbedAllTime() {
//  For a user, find their all-time stair climbing record
let activityDataFilter = this.activityData.filter(activityObject => {
    return activityObject.userID === this.userData.id;
  })

activityDataFilter.sort((a,b) => {return b.flightsOfStairs - a.flightsOfStairs})

return activityDataFilter[0].flightsOfStairs

 }

// example usersActivityAvgByDate('2019/06/15', 'minutesActive')
usersActivityAvgByDate(date, goal) {

let usersActivity = this.activityData.filter(activityObject => {
     return activityObject.date === date;
   })

 let usersGoalMet = usersActivity.reduce((acc,activityObject) => {
      return acc += activityObject[goal]
  },0)
  return (usersGoalMet / usersActivity.length)
 }
}


if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
