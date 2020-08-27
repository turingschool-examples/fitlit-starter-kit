const UserRepository = require("./UserRepository")
const userData = require("../data/users")
const userRepository = new UserRepository([userData[0],userData[1]]);

class Activity {
  constructor(activitySet) {
    this.activitySet = activitySet;
  }
  getDayData(dateSelected, id) {
    return this.activitySet.find(day => day.date === dateSelected && day.userID === id);
  }
  getUserData(id) {
    return userRepository.returnUserData(id);
  }
  weeklyActivityProperties(dateSelected, id, property) {
    let startingDate = this.getDayData(dateSelected, id);
    let firstDay = this.activitySet.indexOf(startingDate);
    return this.activitySet.slice(firstDay, firstDay + 7).map(day => day[property])
  }
  walkedMilesPerDay(dateSelected, id) {
    let dayData = this.getDayData(dateSelected, id)
    let userStrideLength = this.getUserData(id).strideLength;
    return Math.round((dayData.numSteps * userStrideLength / 5280) * 10) / 10;
  }
  minutesActivePerDay(dateSelected, id) {
    return this.getDayData(dateSelected, id).minutesActive;
  }
  averageWeeklyMinutes(dateSelected, id, property) {
    let weeklyActivity = this.weeklyActivityProperties(dateSelected, id, property)
    return Math.round((weeklyActivity.reduce((allMinutes, minute) => allMinutes + minute, 0) / 7) * 10) / 10;
  }
  stepGoalAchieved(dateSelected, id) {
    let userStepGoal = this.getUserData(id).dailyStepGoal;
    let dailySteps = this.getDayData(dateSelected, id).numSteps;
    return dailySteps >= userStepGoal;
  }
  daysStepGoalAchieved(id) {
    let usersActivityData = this.activitySet.filter(day => {
      return day.userID === id && this.stepGoalAchieved(day.date, day.userID);
    })
    return usersActivityData.map(day => day.date);
  }
  findStairRecord(id) {
    let userActivityData =  this.activitySet.filter(day => day.userID === id)
    return userActivityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)[0].flightsOfStairs
  }
  findDayActivity(dateSelected) {
    let allUsers = this.activitySet.filter(day => day.date === dateSelected);
    let dayData = allUsers.reduce((allData, userDay)=>{
      allData.numSteps += userDay.numSteps
      allData.minutesActive += userDay.minutesActive
      allData.flightsOfStairs += userDay.flightsOfStairs
      return allData
    }, {numSteps: 0, minutesActive: 0, flightsOfStairs: 0})
    dayData.numSteps = Math.round(dayData.numSteps / allUsers.length) 
    dayData.minutesActive = Math.round(dayData.minutesActive / allUsers.length) 
    dayData.flightsOfStairs = Math.round(dayData.flightsOfStairs / allUsers.length) 
    return dayData
  }
  weeklyStepGoal(date, id, property) {
    let weeklyAverage = this.averageWeeklyMinutes(date, id, property)
    return weeklyAverage >= this.getUserData(id).dailyStepGoal
  }
}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}
