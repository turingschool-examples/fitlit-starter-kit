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
          return elem
        }
      })
      return matchedElem.minutesActive;
    }

    returnWeekAvg(data, date) {
      let week = [];
      let user = data.filter(elem => {
        return elem.userID === this.userID;
      });
      let index = user.findIndex(elem => elem.date === date)
      for(let i = index; i < (index + 7); i++) {
        week.push(user[i]);
      }
      let total = week.reduce((acc, curVal) => {
        acc += curVal['minutesActive'];
        return acc;
      }, 0)
      return (total / 7)
    }
    
    matchGoal(date, data) {
      let user = data.filter(elem => {
        return elem.userID === this.userID && elem.date === date;
      })
      if (user[0].numSteps >= this.stepGoal) {
        return true;
      } else {
        return false;
      }
    }




  
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}