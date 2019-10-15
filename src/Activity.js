class Activity{
    constructor(activityData,userId, allUsersData) {
        this.currentActivityData = activityData;
        this.userID = userId;
        this.currentUserActivityData;
        this.allUsersData = allUsersData
    }

    findCurrentUserActivityData() {
        this.currentUserActivityData = this.currentActivityData.filter((userInfo) =>
            // console.log(userInfo.userID)
            // console.log(this.userID)

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
        console.log(this.currentActivityData)
        console.log(this.currentUserActivityData)
        console.log(this.userID)
    let userDateActivity = this.currentUserActivityData.find(user => {
            return user.date === date
    })
        console.log(userDateActivity)
        let numSteps = userDateActivity.numSteps;
        let userInfo = this.allUsersData.find(user => {
            return user.id == userDateActivity.userID
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
            acc+=currentElement.minutesActive
            return acc
        }, 0)/userSevenDaysActive.length
        return Math.round(minutesActiveSevenDayAverage);
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
        let stairsClimbed = this.currentUserActivityData.map(user => user.flightsOfStairs)

        let mostStairsCLimbed = Math.max(...stairsClimbed)
        return mostStairsCLimbed
    }

    calculateAvgStairsClimbedOnSpecificDateAllUsers(date) {
        let alllUsersOnDate = this.currentActivityData.filter(user => {
            return user.date === date;
        })
        let avgStairsClimbedAllUsers = alllUsersOnDate.reduce((acc, currentElement) => {
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
        let avgStepsTakenAllUsers = alllUsersOnDate.reduce((acc, currentElement) => {
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
        let avgMinutesActiveAllUsers = alllUsersOnDate.reduce((acc, currentElement) => {
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

}

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };
