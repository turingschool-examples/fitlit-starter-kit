import hydrationDataSet from '../src/data/hydration-data.js'
// import userData from '../src/data/users.js'

class Hydration {
    constructor(hydrationDataSet) {
         this.userID = hydrationDataSet[0].userID;
         this.date = hydrationDataSet[0].date;
         this.numOunces = hydrationDataSet[0].numOunces;
         this.dataSet = hydrationDataSet;
         this.userHydrationData = this.setUserHydrationData(hydrationDataSet);
    }
    setUserHydrationData(hydrationDataSet) {
        const userHydration = hydrationDataSet.filter(userHydrationData => {
        if (this.userID === this.userHydrationData.userID) {
            return this.userHydrationData;
        }
        });
       // userHydration.reverse();
       // return userHydration
    }

    returnAverageOuncesConsumed() {
        let ouncesConsumedPerDay = this.dataSet.filter(element => element.userID === this.userID).map(element => element.numOunces);
        let ouncesConsumedPerDayLength = ouncesConsumedPerDay.length;
        let ouncesConsumedPerDayTotal = ouncesConsumedPerDay.reduce((accumulator, currentValue) => {
          accumulator += currentValue
          return accumulator;
        }, 0);
        return Math.round(ouncesConsumedPerDayTotal / ouncesConsumedPerDayLength);
      };

    returnOuncesConsumedForDay(thisDate) {
        let ouncesByDate = this.dataSet.find(element => element.date === thisDate);
        return ouncesByDate.numOunces;
    }
    returnOuncesConsumedForWeek() {
        //open fitness app
            //would show me today
            //would show me past six days
        //return weeklyIntake
            /* weeklyIntake = {
                 date: [],
                 numOunces: []
            } */
    }
}


//module.exports = Hydration;
export default Hydration;