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
        
    }
    
    filterAllDatesUserCompletedStepGoal() {
        
    }
    
    findMostStairsClimbedForUserAllTime() {
        
    }
    
    findUsersWithAvgSleepQualityMoreThanThreeOverSpecificWeek() {
        
    }
    
    calculateAvgStairsClimbedOnSpecificDateAllUsers() {
        
    }
    
    calculateAvgStepsTakenAllOnSpecificDateAllUsers() {
        
    }
    
    calculateAvgMinutesActiveOnSpecificDateAllUsers() {
        
    }
    
    findMostActiveDateForUser() {
        
    } 
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
  };