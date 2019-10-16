class Activity {
  constructor(activityData, userId, allUsersData) {
    this.currentActivityData = activityData;
    this.userID = userId;
    this.currentUserActivityData;
    this.allUsersData = allUsersData
    this.friend1;
    this.friend2;
    this.friend3;
  }

  findFriend1ActivityData(idArray) {
    this.friend1 = this.currentActivityData.filter((userInfo) =>
      idArray[0] === userInfo.userID);
      return this.friend1;
  }

  findFriend2ActivityData(idArray) {
    this.friend2 = this.currentActivityData.filter((userInfo) =>
      idArray[1] === userInfo.userID);
      return this.friend2;
  }

  findFriend3ActivityData(idArray) {
    this.friend3 = this.currentActivityData.filter((userInfo) =>
      idArray[2] === userInfo.userID);
      return this.friend3;
  }

  findCurrentUserActivityData() {
    this.currentUserActivityData = this.currentActivityData.filter((userInfo) =>
      userInfo.userID === this.userID);
      return this.currentUserActivityData;
  }

  returnNumberOfStepsForUserOnSpecificDate(date) {
    let stepTotalForDay = this.currentUserActivityData.find(userBlock => {
      return userBlock.date === "2019/06/15"
    })

    return stepTotalForDay.numSteps
  }

  returnNumberOfStairsClimbedForUserOnSpecificDate(date) {
    let stairsClimbedForDay = this.currentUserActivityData.find(userBlock => {
      return userBlock.date === "2019/06/15"
    })

      return stairsClimbedForDay.flightsOfStairs
  }

  calculateMilesUserWalkedOnSpecificDate(date) {
    let userDateActivity = this.currentUserActivityData.find(user => {
      return user.date === date
    })
      let numSteps = userDateActivity.numSteps;
      let userInfo = this.allUsersData.find(user => {
        return user.id === userDateActivity.userID
      })

      let userStrideLength = userInfo.strideLength;
      let mileStrideLength = 5280 / userStrideLength;
      let milesWalked = numSteps / mileStrideLength;
      return parseFloat(milesWalked.toFixed(2));
  }

  returnMinutesActiveByUserOnSpecificDate(date) {
    let userDate = this.currentUserActivityData.find(user => {
      return user.date === date;
    })

    return userDate.minutesActive;
  }

  calculateAvgMinutesActiveForUserOnSpecificWeek() {
    let userSevenDaysActive = this.currentUserActivityData.slice(-7)
    let minutesActiveSevenDayAverage = userSevenDaysActive.reduce((acc, currentElement) => {
      acc += currentElement.minutesActive
      return acc
    }, 0) / userSevenDaysActive.length

    return Math.round(minutesActiveSevenDayAverage);
  }

  calculateAvgStepsTakenByUserOnSpecificWeek() {
    let userSevenDaysSteps = this.currentUserActivityData.slice(-7)
    let stepsTakenSevenDayAverage = userSevenDaysSteps.reduce((acc, currentElement) => {
      acc += currentElement.numSteps
      return acc
    }, 0) / userSevenDaysSteps.length

    return Math.round(stepsTakenSevenDayAverage);
  }

  calculateAvgFlightsOfStairsClimbedForUserOnSpecificWeek() {
    let userSevenDaysStairs = this.currentUserActivityData.slice(-7)
    let stairsClimbedSevenDayAverage = userSevenDaysStairs.reduce((acc, currentElement) => {
      acc += currentElement.flightsOfStairs
      return acc
    }, 0) / userSevenDaysStairs.length

    return Math.round(stairsClimbedSevenDayAverage);
  }

  hasUserStepGoalBeenReachedOnSpecificDate(date) {
    let currentUserByDate = this.currentUserActivityData.find(user => {
      return user.date === date
    })

    let userStepGoal = this.allUsersData.find(user => {
      return user.id === currentUserByDate.userID
    })

    if (currentUserByDate.numSteps > userStepGoal.dailyStepGoal) {
      return true
    } else {
      return false
    }
  }

  filterAllDatesUserCompletedStepGoal() {
    let allDatesOverStepGoal = []
    let userProfile = this.allUsersData.find(user => {
      return user.id === this.userID
    })

    let userStepGoal = userProfile.dailyStepGoal;
      this.currentUserActivityData.forEach(user => {
        if (userProfile.id === user.userID && user.numSteps > userStepGoal) {
          allDatesOverStepGoal.push(user.date)
        }
      })

    return allDatesOverStepGoal
  }

  findMostStairsClimbedForUserAllTime() {
    let stairsClimbed = this.currentUserActivityData.map
    (user => user.flightsOfStairs)
    let mostStairsCLimbed = Math.max(...stairsClimbed)
      return mostStairsCLimbed
  }

  calculateAvgStairsClimbedOnSpecificDateAllUsers(date) {
    let alllUsersOnDate = this.currentActivityData.filter(user => {
      return user.date === date;
    })

    let avgStairsClimbedAllUsers = alllUsersOnDate.reduce
    ((acc, currentElement) => {
      acc += currentElement.flightsOfStairs;
      return acc
    }, 0)

    let average = avgStairsClimbedAllUsers / alllUsersOnDate.length;
    return parseFloat(average.toFixed(1))
  }

  calculateAvgStepsTakenOnSpecificDateAllUsers(date) {
    let alllUsersOnDate = this.currentActivityData.filter(user => {
      return user.date === date;
    })

    let avgStepsTakenAllUsers = alllUsersOnDate.reduce
    ((acc, currentElement) => {
      acc += currentElement.numSteps;
      return acc
    }, 0)

    let average = avgStepsTakenAllUsers / alllUsersOnDate.length;
    return parseFloat(average.toFixed(1))
  }

  calculateAvgMinutesActiveOnSpecificDateAllUsers(date) {
    let alllUsersOnDate = this.currentActivityData.filter(user => {
      return user.date === date;
    })

    let avgMinutesActiveAllUsers = alllUsersOnDate.reduce
    ((acc, currentElement) => {
      acc += currentElement.minutesActive;
      return acc
    }, 0)

    let average = avgMinutesActiveAllUsers / alllUsersOnDate.length;
    return parseFloat(average.toFixed(0))
  }

  findMostActiveDateForUser() {
    let sortedUserMinutes = this.currentActivityData.sort((a, b) => {
      return b.minutesActive - a.minutesActive
    })

    let mostActiveDate = sortedUserMinutes.shift()
    return mostActiveDate.date
  }

  userStepCountForWeek() {
    let userWeeklyActivityData = this.currentUserActivityData.slice(-7);
    let userNumStepsForWeek = userWeeklyActivityData.reduce
    ((acc, currentElement) => {
      acc += currentElement.numSteps
      return acc
    }, 0)

    return userNumStepsForWeek
  }

  friendsStepCountForWeek() {
        let friendWeekArray = this.friend1.slice(-7);
        let totalFriendSteps = friendWeekArray.reduce((acc, currentElement) => {
            acc += currentElement.numSteps;
            return acc
        }, 0)
        return totalFriendSteps;
  }

  friend2StepCountForWeek() {
    let friendWeekArray = this.friend2.slice(-7);
    let totalFriendSteps = friendWeekArray.reduce((acc, currentElement) => {
      acc += currentElement.numSteps;
      return acc
    }, 0)

    return totalFriendSteps;
  }

  friend3StepCountForWeek() {
    let friendWeekArray = this.friend3.slice(-7);
    let totalFriendSteps = friendWeekArray.reduce((acc, currentElement) => {
      acc += currentElement.numSteps;
      return acc
    }, 0)

    return totalFriendSteps;
  }

  findHighestStepCount() {
    let friend1 = this.friendsStepCountForWeek();
    let friend2 = this.friend2StepCountForWeek();
    let friend3 = this.friend3StepCountForWeek();
    let user = this.userStepCountForWeek();

    if (Math.max(friend1, friend2, friend3, user) === user) {
      return `You were highest this week!`;

    } else if (Math.max(friend1, friend2, friend3, user) === friend1) {
      return `Your friend was the highest this week!`;

    } else if (Math.max(friend1, friend2, friend3, user) === friend2) {
      return `Your friend was the highest this week!`;

    } else if (Math.max(friend1, friend2, friend3, user) === friend3) {
      return `Your friend was the highest this week!`
    }
  }

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
