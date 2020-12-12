// const User = require("./user");
// const userRepo = require("./userRepo");

class UserActivity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  mapUserActivity(id) {
    return this.activityData.reduce((total, value) => {
      if (value.userID === id) {
        total.push(value);
      }
      return total;
    }, []);
  }

  calculateMilesWalked(userRepo, user, date) {
    let findActivityByDate = this.activityData.find((day) => day.date === date);
    let currentUser = userRepo.getAUser(user.id);
    let userStride = currentUser.strideLength;
    let userSteps = findActivityByDate.numSteps;
    let miles = (userStride * userSteps) / 5280;
    return miles;
  }

  calculateActiveMinutes(date, id) {
    this.mapUserActivity(id); //array of one users all activity
    let findActivityByDate = this.activityData.find((day) => day.date === date);
    return findActivityByDate.minutesActive;
  }

  calculateAvgMinWeek(startDate, id) {
    const activityItems = this.mapUserActivity(id);
    const findIndex = activityItems.findIndex(day => day.date === startDate);
    const activityItemPerWeek = activityItems.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value.minutesActive);
      } else {
        total.push(value.minutesActive);
      }
      return total;
    }, []).splice([findIndex], 7);
    
    let totalMinutes = activityItemPerWeek.reduce((total, value) => {
      total += value
      return total
    },0)
    return (totalMinutes / 7)
  }


  }





if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}