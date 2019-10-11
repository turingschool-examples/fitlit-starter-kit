class Activity {
  constructor(user) {
    this.userID = user.id;
    this.strideLength = user.strideLength;
    this.stepGoal = user.dailyStepGoal;
  }
  
    returnUserMiles(activityData, curDate) {
      let matchedElem = activityData.find(elem => {
         if(elem.userID === this.userID && elem.date === curDate) {
           return elem
         };
      });
      return Math.round(((matchedElem.numSteps * this.strideLength) / 5280) * 100) / 100;
    }

    


  
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}