class Activity{
    constructor(activityData,userId) {
        this.currentActivityData = activityData;
        this.userID = userId;
        this.currentUserActivityData;
    }

    findCurrentUserActivityData() {
        this.currentUserActivityData = this.currentActivityData.filter((userInfo) =>
        userInfo.userID === this.userID);
        return this.currentUserActivityData;
    }
    calculateMilesUserWalkedOnSpecificDate() {
        
    }
    
    returnMinutesActiveByUserOnSpecificDate() {
        
    }
    
    calculateAvgMinutesActiveForUserOnSpecificWeek() {
        
    }
    
    hasUserStepGoalBeenReachedOnSpecificDate() {
        
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