class Activity{
    constructor(activityData,userId, allUsersData) {
        this.currentActivityData = activityData;
        this.userID = userId;
        this.currentUserActivityData;
        this.allUsersData = allUsersData
    }

    findCurrentUserActivityData() {
        this.currentUserActivityData = this.currentActivityData.filter((userInfo) =>
        userInfo.userID === this.userID);
        return this.currentUserActivityData;
    }
    calculateMilesUserWalkedOnSpecificDate(date) {
    let userDateActivity = this.currentUserActivityData.find(user => {
            return user.date === date
    })
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
    
    calculateAvgMinutesActiveOnSpecificDateAllUsers() {
        
    }
    
    findMostActiveDateForUser() {
        
    } 
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };