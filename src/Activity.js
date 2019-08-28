if (typeof module !== 'undefined') {
  userData = require('../data-subsets/users-subset');
}
  
class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
  
  userStepsPerDay(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
  }
  
  milesUserWalked(id, date, userData) {
    let userSteps = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    let userStride = userData.find(user => id === user.id).strideLength;
    return parseFloat(((userSteps * userStride) / 5280).toFixed(1)); 
  }
     
  minsUserActive(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).minutesActive;
  }
  
  weeklyAvgMins(id, date) {
    let userActivity = this.activityData.filter(user => id === user.userID);
    let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
    let getWeeklyAverage = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
    return getWeeklyAverage.reduce((acc, avg) => {
      return parseFloat((acc + (avg.minutesActive / 7)).toFixed(1))
    }, 0);
  }
  
  stepGoalMet(id, date, userData) {
    let stepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
    if (stepsOfDay >= goalSteps) {
      return true
    } else {
      return false
    }
  }  
   
  overStepGoal(id, userData) {
    let userActivity = this.activityData.filter(user => id === user.userID);
    let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
    let stepsAbove = userActivity.filter(user => user.numSteps > goalSteps);
    return stepsAbove.map(steps => steps.date) 
  }

  giveUserStepsFeedback(id, date, userData) {
        let userActivityToday = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal
        if (userActivityToday >= goalSteps) {
          let stepsOver = userActivityToday - goalSteps
          return `You're a rockstar! You went ${stepsOver} steps over your goal!`
        } else {
          let stepsLeft = goalSteps - userActivityToday
          return `Almost there! You have ${stepsLeft} steps until you have met your step goal.`
        }
      
  
  stairClimbRecord(id) {
    let userActivity = this.activityData.filter(user => id === user.userID);
    let stairsClimbed = userActivity.map(day => day.flightsOfStairs);
    return Math.max(...stairsClimbed) 
  }
  //   Design a step challenge between friends. Assign your user a few friends 
  //   from the user data file. Add the methods you need and a display on the 
  //   dashboard to see their friends step count for a whole week, 
  //   and then show who had the most steps for that week.
  
  gatherFriends(givenDate, id) {
    let allFriends = [...userData[id].friends];
    return allFriends
    let userFriends = allFriends.map(friend => ({
      id: friend,
      name: userData.find(user => user.id === friend).name,
      steps: this.activityData.filter(day => day.userID === userFriends && day.date <= givenDate)
        .map(user => user.numSteps) 
    }));
    return userFriends.amp(friend => {
      return friend.name;
    });
  }
  
  
if (typeof module !== 'undefined') {
  module.exports = Activity;
}