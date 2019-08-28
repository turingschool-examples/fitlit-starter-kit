class ActivityUser {
  constructor(activityTestData, userData) {
    this.activityTestData = activityTestData
    this.userData = userData;
  }

  findActivityInfo(id) {
    return this.activityTestData.filter(user => user.userID === id);
  }

  getUsers(date) {
    return this.activityTestData.filter(day => day.date === date)
  }

  findUserStrideLength(id) {
    return this.userData.find(user => {
      return user.id === id
    }).strideLength;
  }
  
  calculateMilesWalked(date, id) {
    let user = this.findActivityInfo(id).find(user => user.date === date)
    let steps = user.numSteps
    let strideLength = this.findUserStrideLength(id)
    let totalFeet = Math.floor(steps * strideLength)
    let miles = totalFeet / 5280

    return Number(miles.toFixed(2))
  } 

  findMinutesActive(date, id) {
    return this.activityTestData.find(user => {
      return user.date === date && user.userID === id
    }).minutesActive
  }

  findAverageMinutesActive(startDate, endDate, id) {
    let totalTime = this.activityTestData
      .filter(user => user.userID === id)
      .filter(day => day.date >= startDate && day.date <= endDate)
      .map(day => day.minutesActive)
      .reduce((acc, time) => {
        return acc + time
      }, 0)
    return Math.round((totalTime / 7) * 10) /10
  }

  // returnTotalMinutesAvg(date) {
  //   return Math.floor(this.activityTestData.reduce((acc, element) => {
  //     return acc + element.minutesActive}, 1) / this.activityTestData.length)
  // }

  // returnTotalStepsAvg() {
  //   return Math.floor(this.activityTestData.reduce((acc, element) => {
  //     return acc + element.stepCount}, 1) / this.activityTestData.length)
  // }


  getGoal(id) {
    return this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
  }
  
  calculateStepGoal(date, id) {
    let stepGoal = this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
    let dailySteps = this.activityTestData.find(user => {
      return user.date === date && user.userID === id
    }).numSteps
    
    let difference = stepGoal - dailySteps
    
    return dailySteps >= stepGoal ? 'You have achieved your daily goal!' : `${difference} more steps to go!`
    
  }
  
  findExceptionalDays(id) {
    let stepGoal = this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
    var exceptionalDays = this.activityTestData.filter(user => user.userID === id)
    .filter(day => day.numSteps > stepGoal);
    
    return exceptionalDays;
  }
  
  findGreatestClimb(id) {
    let greatestClimb = this.findActivityInfo(id).map(day => day.flightsOfStairs)
    .reduce((acc, climb) => {
      return (climb < acc) ? acc : climb
    })
    return greatestClimb;
  }
  
  getDailyStepCount(id, date="2019/06/15") {
    let stepCount = this.activityTestData.find(user => user.userID === id && user.date === date)

    return stepCount.numSteps
  }
  
  
  calculateWeeksSteps(startDate, endDate, id) {
    return this.findActivityInfo(id).filter(day => day.date >= startDate && day.date <= endDate)
    .reduce((acc, day) => {
      acc += day.numSteps
      return acc
    }, 0)
  }

calculatePercentOfWorldWalked(id) {
  const earthMiles = 24901
  let user = this.findActivityInfo(id)
  let steps = user.map(day => day.numSteps)
  .reduce((acc, time) => {
    return acc + time
  }, 0)
  let strideLength = this.findUserStrideLength(id)
  let totalFeet = steps * strideLength
  let miles = totalFeet / 5280
  let total =  Number(miles.toFixed(2));
  const percentWalked = total / earthMiles * 100
  return Number(percentWalked.toFixed(2))
}

getWeeklyStepCount(date, id) {
  let week = this.activityTestData.filter(user => user.userID === id)
  let startDateId = week.find(user => user.date === date)
  let startDate = week.indexOf(startDateId)
  let weekOfActivity = week.slice(startDate, startDate + 7)
  return weekOfActivity.map(user => user.numSteps)
}

//FIND AVERAGE METHODS ARE FROM ACTIVITY REPO!
findTotalStepAverage(date) {
  var totalSteps = this.getUsers(date).reduce((acc, user) => {
    acc += user.numSteps;
    return acc
  }, 0)
  return Math.round(totalSteps / this.getUsers(date).length);
}

compareStepAverageWithUser(date, id) {
  let day = this.findActivityInfo(id).find(user => user.date === date)
  if(day.numSteps > this.findTotalStepAverage(date)) {
    return "You exceeded the daily average of steps today!"
  } else if (day.numSteps < this.findTotalStepAverage(date)) {
    return "You were lower than the daily average of steps today :("
  } else {
    return "You walked exactly the same as the daily average!"
  }
}

findTotalMinutesAverage(date) {
  var totalMinutes = this.getUsers(date).reduce((acc, user) => {
    acc += user.minutesActive;
    
    return acc
  }, 0)
  return Math.round(totalMinutes / this.getUsers(date).length);
}


compareMinutesAverageWithUser(date, id) {
  let day = this.findActivityInfo(id).find(user => user.date === date)
  
  if(day.minutesActive > this.findTotalMinutesAverage(date)) {
    return "You exceeded the daily average of minutes active today!"
  } else if (day.minutesActive < this.findTotalMinutesAverage(date)) {
    return "You were lower than the daily average of minutes active today :("
  } else {
    return "You were active the exact the same amount as the daily average!"
  }
}

findTotalStairsAverage(date) {
  var totalStairs = this.getUsers(date).reduce((acc, user) => {
    acc += user.flightsOfStairs;
    return acc
  }, 0)
  return Math.round(totalStairs / this.getUsers(date).length);
}

compareStairsAverageWithUser(date, id) {
  let day = this.findActivityInfo(id).find(user => user.date === date)
  
  if(day.flightsOfStairs > this.findTotalStairsAverage(date)) {
    return "You exceeded the daily average of stairs climbed today!"
  } else if (day.flightsOfStairs < this.findTotalStairsAverage(date)) {
    return "You were lower than the daily average of stairs climbed today :("
  } else {
    return "You climbed the exact the same amount of stairs as the daily average!"
  }
}

findThreeDayStepStreak(id) {
  let userInfo = [];
  let dates = [];
  let user = this.activityTestData.filter(user => user.userID === id);
  user.forEach(function(day) {
    if(userInfo.length >= 3) {
      userInfo.shift();
    }
    userInfo.push(day.numSteps)

    if(userInfo[0] < userInfo[1] && userInfo[2] > userInfo[1]) {
      dates.push(day.date)
    }
  })
  return dates
}

showUserFriends(date, id) {
  let included = [...this.userData[id].friends];
  let friends = included.map(friend => ({
    id: friend,
    name: this.userData.find(user => user.id === friend).name,
    steps: this.activityTestData
      .filter(day => day.userID === friend && day.date <= date)
      .map(user => user.numSteps)
  }));
  return friends.map(friend => {
    return friend.name;
  });
}

showUserFriendsSteps(date, id) {
  let included = [...this.userData[id].friends];
  let friends = included.map(friend => ({
    id: friend,
    name: this.userData.find(user => user.id === friend).name,
    steps: this.activityTestData
      .filter(day => day.userID === friend && day.date <= date)
      .map(user => user.numSteps)
  }));
  return friends.map(friend => {
    let sorted = friends.sort((a, b) => b.steps - a.steps);
    console.log('user friends--->', friend.steps)
    return friend.steps[0];
  });
}

  calculateWeeksStairsClimbed(startDate, endDate, id) {
    return this.findActivityInfo(id).filter(day => day.date >= startDate && day.date <= endDate)
    .reduce((acc, day) => {
      acc += day.flightsOfStairs
      return acc
    }, 0)
  }

  calculateWeeksActiveMinutes(startDate, endDate, id) {
    return this.findActivityInfo(id).filter(day => day.date >= startDate && day.date <= endDate)
    .reduce((acc, day) => {
      acc += day.minutesActive
      return acc
    }, 0)
  }
}



if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}