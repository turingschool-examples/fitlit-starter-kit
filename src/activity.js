class Activity {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  calculateMilesWalked(date, id) {
    let stride = this.users.users.find(user => user.id === id).strideLength;

    let numberSteps = this.data
      .filter(user => user.date === date)
      .find(user => user.userID === id).numSteps;

    console.log(stride)
    return parseFloat(((stride * numberSteps) / 5280).toFixed(1));
  };

  calculateMinActive(date, id) {
    let userActivity = this.data.filter(user => user.userID === id).find(day => day.date === date).minutesActive;

    return userActivity;
  };

  calculateAvgTimeActive(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let day = userActivity.findIndex(day => day.date === date);
    let week = userActivity.splice(day - 5, day + 2);
    let totalMin = week.reduce((acc, min) => {
      return (acc += min.minutesActive);
    }, 0);

    return parseFloat((totalMin / week.length).toFixed(1));
  };

  compareGoal(date, id) {
    let user = this.users.users.find(user => user.id === id);
    let goal = user.dailyStepGoal;
    let userSteps = this.data.filter(user => user.userID === id).find(steps => steps.date === date).numSteps;

    if (userSteps > goal) {
      return true;
    } else {
      return false;
    };
  };

  findGoalDays(id) {
    let user = this.users.users.find(user => user.id === id);
    let goal = user.dailyStepGoal;
    let userSteps = this.data.filter(user => user.userID === id);
    let goalArray = userSteps.filter(steps => steps.numSteps > goal);

    return goalArray;
  };

  findMostStairs(id) {
    let userStairs = this.data.filter(user => user.userID === id);

    userStairs.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    });

    return userStairs[0];
  };

  calculateStepsAMin(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let day = userActivity.find(day => day.date === date);
    let stepsAMin = (day.numSteps / day.minutesActive).toFixed(1);

    return parseFloat(stepsAMin);
  }

  returnWeekStep(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.findIndex(day => day.date === date);
    let targetWeek = userActivity.slice(targetDay - 6, targetDay + 1);

    return targetWeek.map(elem => elem.numSteps);
  };

  returnWeekStairs(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.findIndex(day => day.date === date);
    let targetWeek = userActivity.slice(targetDay - 6, targetDay + 1);

    let array = targetWeek.map(elem => elem.flightsOfStairs);

    return array;
  }

  returnWeekMin(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.findIndex(day => day.date === date);
    let targetWeek = userActivity.slice(targetDay - 6, targetDay + 1);
    let array = targetWeek.map(elem => elem.minutesActive);
    return array;
  }

  returnStepsDay(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.find(day => day.date === date);

    return targetDay.numSteps;
  }

  returnActiveDay(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.find(day => day.date === date);

    return targetDay.minutesActive;
  }

  returnStairsDay(date, id) {
    let userActivity = this.data.filter(user => user.userID === id);
    let targetDay = userActivity.find(day => day.date === date);

    return targetDay.flightsOfStairs;
  };

  getConsecutiveIncrease(id) {
    let userActivity = this.data.filter(user => user.userID === id)
    
    return userActivity.reduce((acc, day, i, array) => {
      if(i !== 0 && i !== array.length - 1) {
        if(day.numSteps > array[i - 1].numSteps && day.numSteps < array[i + 1].numSteps) {
          acc.push(array[i - 1], array[i] ,array[i + 1]);
        }
      }
      return acc;
    }, []);
  };
};

if (typeof module !== "undefined") {
  module.exports = Activity;
};