class Activity {
  constructor(allActivityData, id, allUsers) {
    this.allActivityData = allActivityData;
    this.currentUserId = id;
    this.currentUserData = this.findCurrentUserData();
    this.allUsers = allUsers;

    
  }

  findCurrentUserData(id = this.currentUserId) {
    this.currentUserId = id;
    this.currentUserData = this.allActivityData.filter((data) => data.userID === id);
    return this.currentUserData;
  }

  findMilesWalkedForSpecificDayOfUser(dateString) {
    let dayToCalculateSteps = this.currentUserData.filter(day => day.date === dateString)[0].numSteps;
    let strideLength = this.allUsers.filter(users => users.id === this.currentUserId)[0].strideLength;
    let totalFeet = dayToCalculateSteps / strideLength
    let milesWalked = 5280 / totalFeet;
    return parseFloat(milesWalked.toFixed(2));
  }

  findTotalMinutesActiveOnSpecificDayForUser(dateString, id) {
    return this.allActivityData.filter(day => day.date === dateString && day.userID === id)[0].minutesActive;
  }

  findMinutesActiveAvgForGivenWeekForUser(startDateString, endDateString) {
    return Math.round(this.currentUserData.filter((day) => {
      if (new Date(day.date) >= new Date(startDateString) && new Date(day.date) <= new Date(endDateString)) {
        return day
      }
    }).reduce((acc, currentDay) => {
      acc += currentDay.minutesActive
      return acc
    }, 0) / 7);
  }

  findIfStepGoalReachedOnDateForUser(dateString) {
    let stepGoal = this.allUsers.filter(user =>  user.id === this.currentUserId)[0].dailyStepGoal;
    let stepsForDay = this.currentUserData.filter(day => day.date === dateString)[0].numSteps;
    if (stepsForDay >= stepGoal) {
      return true
    } else {
      return false
    }
  }

  findDaysWhereStepGoalExceededForUser() {
    let stepGoal = this.allUsers.filter(user =>  user.id === this.currentUserId)[0].dailyStepGoal;
    return this.currentUserData.reduce((acc, currentDay) => {
      if(currentDay.numSteps > stepGoal) {
        acc.push(currentDay.date)
      }
      return acc
    }, [])
  }

  findAllTimeStairClimbingRecordForUser() {
    return this.currentUserData.reduce((acc, currentDay) => {
      if (currentDay.flightsOfStairs > acc.flightsOfStairs) {
        acc.date = currentDay.date;
        acc.flightsOfStairs = currentDay.flightsOfStairs;
      }
      return acc
    }, {date: "", flightsOfStairs: 0})
  }

  findAverageOfAnyActivityByDateForAllUsers(dateString, property) {
    let dates = this.allActivityData.filter(day => day.date === dateString);
    let avg = dates.reduce((acc, currentDay) => {
      acc += currentDay[property]
      return acc
    }, 0) / dates.length;
    return Math.round(avg);
  }

  findChampionUserOfAnyActivityByDateForAllUsers(dateString, property) {
    let dates = this.allActivityData.filter(day => day.date === dateString);
    let champion = dates.reduce((acc, currentDay) => {
      if (currentDay[property] > acc[property]  ) {
        acc = currentDay
      }
      return acc
    });
    let championName = this.allUsers.filter(user => user.id === champion.userID)[0].name;
    return championName
  }

  findActivityForMostRecentDay(dateString, property) {
    return this.currentUserData.find(data => data.date === dateString)[property]
  }

  findAnyActivityEachDayOverWeekForAUser(startDate, endDate, property) {
    let answer = [];
    let week = this.currentUserData.filter(eachDay => {
      if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)) {
        return eachDay
      }
    }).reduce((acc, day) => {
      if (!acc.date) {
        acc.date = day.date
      }
      if (!acc[property]) {
        acc[property] = day[property]
      }
      answer.push(acc)
      return {};
    }, {})
    return answer;
    
  }


  findTrendOfIncreasingStepsForMoreThanThreeDaysForAllUsers() {
    let answerListOfDates = [];

    this.currentUserData.some((currentDay, i, userArray) => {
      // console.log("line 118", userArray)
      console.log("indexBefore", i)
      // console.log("line 119:", userArray[i + 1].numSteps)
      if (i > 0 && i < 98 && userArray[i].numSteps < userArray[i + 1].numSteps && userArray[i + 1].numSteps < userArray[i + 2].numSteps) {
        console.log("indexafter", i)
        console.log(userArray[i].numSteps)
        console.log(userArray[i + 1].numSteps)
        console.log(userArray[i + 2].numSteps)
        answerListOfDates.push(userArray[i])
        answerListOfDates.push(userArray[i + 1])
        answerListOfDates.push(userArray[i + 2])
        console.log("AnswersDates:", answerListOfDates)
      }
    })
      console.log("Answers:", answerListOfDates)
        return answerListOfDates;
    }

    findTrendOfIncreasingStairsForMoreThanThreeDaysForAllUsers() {
      let answerListOfDates = [];
  
      this.currentUserData.some((currentDay, i, userArray) => {
        // console.log("line 118", userArray)
        // console.log("indexBeforeStairs", i)
        // console.log("line 119:", userArray[i + 1].numSteps)
        if (i > 0 && i < 98 && userArray[i].flightsOfStairs < userArray[i + 1].flightsOfStairs && userArray[i + 1].flightsOfStairs < userArray[i + 2].flightsOfStairs) {
          console.log("indexafterStairs", i)
          console.log("NumberOfStairs", userArray[i].flightsOfStairs)
          console.log(userArray[i].flightsOfStairs)
          console.log(userArray[i + 1].flightsOfStairs)
          console.log(userArray[i + 2].flightsOfStairs)
          answerListOfDates.push(userArray[i])
          answerListOfDates.push(userArray[i + 1])
          answerListOfDates.push(userArray[i + 2])
          console.log("AnswersDates:Stairs", answerListOfDates)
        }
      })
        console.log("Answers:Stairs", answerListOfDates)
          return answerListOfDates;
      }
}





if (typeof module !== 'undefined') {
  module.exports = Activity;
}