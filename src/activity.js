if (typeof require !== 'undefined') {
const userData = require("../data/users")
const UserRepository = require("./user-repository");
}


class Activity {
    constructor(data, id) {
      this.data = data.filter(user => user.userID === id);
      this.id = id;
    }

  returnDailyMiles(date) {
    let userRepo = new UserRepository(userData);
    let currentStrideLength = userRepo.returnUser(this.id).strideLength;
    let currentDay = this.returnDay(date)
    return parseFloat((currentStrideLength * currentDay.numSteps / 5280).toFixed(1))
  }

  returnDay(date) {
     return this.data.find(day => day.date === date);
  }

  returnDailyMinutesActive(date) {
    let currentDay = this.returnDay(date);
    return currentDay.minutesActive;
  }

  returnWeeklyAvgActivity(date) {
    let dayIndex = this.data.findIndex(day => day.date === date)
    let currentWeek = this.data.slice(dayIndex-6, dayIndex+1);
    return parseInt(currentWeek.reduce((acc, day) => {
    return acc += day.minutesActive;
    }, 0) / currentWeek.length)
  }

  //write test for this function below

  returnWeeklySteps(date) {
    let dayIndex = this.data.findIndex(day => day.date === date)
    let currentWeek = this.data.slice(dayIndex-6, dayIndex+1);
    return parseInt(currentWeek.reduce((acc, day) => {
    return acc += day.numSteps;
    }, 0))
  }

  checkDailyStepGoal(date) {
    let userRepo = new UserRepository(userData);
    let stepGoal = userRepo.returnUser(1).dailyStepGoal;
    return this.returnDay(date).numSteps > stepGoal;
  }

  returnDaysStepGoalMet() {
    let userRepo = new UserRepository(userData);
    let stepGoal = userRepo.returnUser(1).dailyStepGoal;
    return this.data.reduce((acc, day) => {
    if(day.numSteps >= stepGoal) {
        acc.push(day)
    }
    return acc;
}, [])
  }

  returnHighestStairClimb() {
    return this.data.reduce((acc, day) => {
      if (day.flightsOfStairs > acc) {
          acc = day.flightsOfStairs
      };
    return acc;
    },0)
  }

  returnEmpireCount() {
    let totalFlights = this.data.reduce((acc, day) => {
      acc += day.flightsOfStairs
      return acc;
    },0)
    return parseFloat((totalFlights / 102).toFixed(1))
  }
  returnWeekInfo() {
    return this.data.filter(user => user.userID === this.id).slice(-7)
  } 

  returnIncreasedStepDays() {
    return this.data.reduce((acc, day, i, array) => {
      if(i !== 0 && i !== array.length-1) {
        if(day.numSteps > array[i-1].numSteps && day.numSteps < array[i+1].numSteps) {
          acc.push(array[i+1])
        }
      }
      return acc;
    }, [])
  };

  returnIncreasedStairDays() {
    return this.data.reduce((acc, day, i, array) => {
      if(i !== 0 && i !== array.length-1) {
        if(day.flightsOfStairs > array[i-1].flightsOfStairs && day.flightsOfStairs < array[i+1].flightsOfStairs) {
          acc.push(array[i+1])
        }
      }
      return acc;
    }, [])
  };

};
if (typeof module !== 'undefined') {
    module.exports = Activity;
}

