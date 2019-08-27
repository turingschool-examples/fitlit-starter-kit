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

  // findTrendOfIncreasingStepsForMoreThanThreeDaysForAllUsers() {

  //   //find all users whose steps increase for three or more days
  //   //will ultimately need their ids, (their names if we want), but it will
  //   //be an array of data.

  //   //set an empty answer array for ids.
  //   // thought is to first forEach over all users and one at a time to find only
  //   // their dataset by calling findCurrentUserData(id) and pass in their id. 
  //   //then at that time that user will be the current user
  //   //then reduce over their this.currentUserData and use the extra index argument
  //   //will need to check if the current index (besides index 0 and the last index)
  //   // is greater than the index before it but less than the index after it, and this must
  //   //be true for atleast i++ 3x
  //   //we need the userId and the dates that are true for greater that three
  //   //so maybe final answer is actually an array of objects
  //   // each object can have a key of id correlated to the user Id
  //   // with an array of dates that are true for greater than three. 

  //   let answerListOfIDs = [];
  //   this.allActivityData.forEach(dataSet => {
  //     let dataForCurrentUser = this.findCurrentUserData(dataSet.userID);
  //     dataForCurrentUser.some((currentDay, i, userArray) => {
  //       console.log("line 118", userArray)
  //       console.log("line 119:", userArray[i + 1])
        
  //       if (userArray[i].numSteps < userArray[i + 1].numSteps && userArray[i + 1].numSteps < userArray[i + 2].numSteps) {
  //         answerListOfIDs.push(userArray[i + 2])
  //       }
  //     })
  //   })
  //   console.log("line 125:", answerListOfIDs)
  //   return answerListOfIDs;
  // }


  

}





if (typeof module !== 'undefined') {
  module.exports = Activity;
}