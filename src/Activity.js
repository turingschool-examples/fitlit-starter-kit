if (typeof module !== "undefined") {
  activityData = require("../data/activity-test-data");
  User = require("./User");
  userData = require("../data/users-test-data");
  user = new User(1);
}

class Activity {
  constructor(id) {
    this.userActivity = this.findActivityData(id);
    this.uniqueUserData = this.findUserData(id);
  }

  findActivityData(id) {
    return activityData.filter(activity => activity.userID === id);
  }

  findUserData(id) {
    return userData.find(user => user.id === id);
  }

  findActiveMinutesForDay(id, dateOf) {
    let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    return dateOfActivity.minutesActive;
  }

  findStepsForDay(id, dateOf) {
    let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    return dateOfActivity.numSteps;
  }

  findFlightsForDay(id, dateOf) {
    let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    return dateOfActivity.flightsOfStairs;
  }

  findActiveMinutesForWeek(id, dateOf) {
    let dateIndex = this.userActivity.findIndex(day => day.date === dateOf);
    let weekOf = this.userActivity.slice(dateIndex - 6, dateIndex + 1);
    let dailyMinutesActive = weekOf.map(day => day.minutesActive);
    return Math.floor(
      dailyMinutesActive.reduce((totalMinutes, dailyMinutes) => {
        totalMinutes += dailyMinutes;
        return totalMinutes;
      }, 0) / 7
    );
  }

  compareNumStepsToStepGoal(id, dateOf) {
    let dayOfActivity = this.userActivity.find(day => day.date === dateOf);
    if (dayOfActivity.numSteps >= this.uniqueUserData.dailyStepGoal) {
      return `Great job at meeting your Daily Step Goal!`;
    } else {
      return "Keep twerking hunty!";
    }
  }

  daysExceedStepGoal(id) {
    let stepGoal = this.uniqueUserData.dailyStepGoal;
    let allDates = this.userActivity.filter(day => day.numSteps >= stepGoal);
    return allDates.map(day => day.date);
  }

  allTimeStairRecord(id) {
    let stairRecord = this.userActivity.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    });
    console.log(stairRecord[0].flightsOfStairs)
    return stairRecord[0].flightsOfStairs;
  }

  findMilesForDay(id, dateOf) {
    let dayOfActivity = this.userActivity.find(day => day.date === dateOf);
    let daySteps = dayOfActivity.numSteps;
    let strideLength = this.uniqueUserData.strideLength;
    return Math.floor((daySteps * strideLength) / 5280);
  }

  findLeastActiveDay(id) {
    let sortedMins = this.userActivity.sort((a, b) => {
      return a.minutesActive - b.minutesActive;
    });
    return sortedMins[0].minutesActive;
  }

  compareFriends(dateOf, id) {
    let included = [...userData[id].friends, userData[id].id];
    let friends = included.map(friend => ({
      id: friend,
      name: userData.find(user => user.id === friend).name,
      steps: activityData
        .filter(day => day.userID === friend && day.date <= dateOf)
        .slice(-6, +1)
        .map(user => user.numSteps)
        .reduce((totalSteps, dailySteps) => (totalSteps += dailySteps), 0)
    }));
    let sorted = friends.sort((a, b) => b.steps - a.steps);
    return friends[0];
  }

  showFriends(dateOf, id) {
    let included = [...userData[id].friends];
    let friends = included.map(friend => ({
      id: friend,
      name: userData.find(user => user.id === friend).name,
      steps: activityData
        .filter(day => day.userID === friend && day.date <= dateOf)
        .map(user => user.numSteps)
    }));
    return friends.map(friend => {
      return friend.name;
    });
  }

  showFriendsSteps(dateOf, id) {
    let included = [...userData[id].friends];
    let friends = included.map(friend => ({
      id: friend,
      name: userData.find(user => user.id === friend).name,
      steps: activityData
        .filter(day => day.userID === friend && day.date <= dateOf)
        .map(user => user.numSteps)
    }));
    return friends.map(friend => {
      return friend.steps[0];
    });
  }

    threeDayStepStreak(id){
        let userObjs = [];
        let dates = [];
        let user = activityData.filter(user => user.userID === id)
        user.forEach(function(day){

            if(userObjs.length >= 3){
                userObjs.shift();
            }

            userObjs.push(day.numSteps)
        
            if(userObjs[0] < userObjs[1] && userObjs[2] < userObjs[0]){
                dates.push(day.date);
            }
          })
          return dates

    }

    threeDayStairStreak(id){
        let userObjs = [];
        let dates = [];
        let user = activityData.filter(user => user.userID === id)
        user.forEach(function(day){

            if(userObjs.length >= 3){
                userObjs.shift();
            }

            userObjs.push(day.flightsOfStairs)
        
            if(userObjs[2] > userObjs[1] && userObjs[1] > userObjs[0]){
                dates.push(day.date);
            }
        })

        return dates
    }


}

if (typeof module !== "undefined") {
  module.exports = Activity;
}
