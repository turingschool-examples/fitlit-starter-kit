// const User = require("./user");
// const userRepo = require("./userRepo");

class UserActivity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesWalked(userRepo, user, date) {
    let findActivityByDate = this.activityData.find(day => day.date === date)
   let currentUser = userRepo.getAUser(user.id);
  let userStride = currentUser.strideLength;
  let userSteps = findActivityByDate.numSteps;
  let miles = (userStride * userSteps) / 5280;
  return miles;
  }

  // strideLength * steps = feet walked and then divide that by 5280 for miles walked
  // take userID and look in user data file and user activity file
}





if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}