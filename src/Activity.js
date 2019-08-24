class Activity {
  constructor(allActivityData, id, allUsers) {
    this.allActivityData = allActivityData;
    this.currentUserId = id;
    this.currentUserData;
    this.allUsers = allUsers;
    
  }

  findCurrentUserData() {
    this.currentUserData = this.allActivityData.filter((data) => data.userID === this.currentUserId);
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


}





if (typeof module !== 'undefined') {
  module.exports = Activity;
}