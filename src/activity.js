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

    returnMinutesActive(data, date) {
      let matchedElem = data.find(elem => {
        if(elem.userID === this.userID && elem.date === date) {
          console.log(elem);
          
          return elem
        }
      })
      return matchedElem.minutesActive;
    }

    




  
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}