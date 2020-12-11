class ActivityRepository {
   constructor(activityInstanceData) {
     this.activityInstanceData = activityInstanceData;
   }

   returnActivityData(id) {
     return this.activityInstanceData.filter(activity => activity.userID === id);
   }

   returnMilesWalked(user, date) {
     const allUserActivity = this.returnActivityData(user.id);
     const userActivityDate = allUserActivity.find(activity => activity.date === date);
     return Number(((user.strideLength * userActivityDate.numSteps) / 5280).toFixed(1));
   }

   returnMinutesActive(id, date) {
     const allUserActivity = this.returnActivityData(id);
     const userActivityDate = allUserActivity.find(activity => activity.date === date)
     return userActivityDate.minutesActive;
   }

   calculateWeeklyAverageMinutesActive() {
     
     // For a user, how many minutes active did they average for a given week (7 days)?
   }

   determineStepGoalAchieved() {
     // For a user, did they reach their step goal for a given day (specified by a date)?
   }

   findDaysWithExceededStepGoal() {
     // For a user, find all the days where they exceeded their step goal
   }

   findFlightsOfStairsRecord() {
     // For a user, find their all-time stair climbing record
   }

   calculateAllUsersActivityAveragesOnDay() {
     // For all users, what is the average number of:
        // stairs climbed for a specified date
        // steps taken for a specific date
        // minutes active for a specific date
   }

 }

 if (typeof module !== 'undefined') {
   module.exports = ActivityRepository;
 }
