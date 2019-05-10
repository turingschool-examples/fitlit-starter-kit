if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  const ActivityRepository = require('./ActivityRepository');
  const UserRepository = require('./UserRepository');
}

class Activity {
   constructor(userID) {
    this.userID = userID;
   }

   userData() {
     const userRepository = new UserRepository('../data/usersSub.js')
     return userRepository.returnUserData(this.userID)
   }

   userActivityData() {
     const activityRepository = new ActivityRepository('../data/activitySample.js');
     return activityRepository.getActivityDataOfAUser(this.userID)
   }
   stepsToMiles(date) {
     const steps = this.userActivityData().find(el => el.date === date).numSteps;
     console.log(steps)
     console.log(this.userData().strideLength)
   }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = Activity;
}