//---> what does the fetched data look like for the param hydrationData?
class Hydration {
    constructor(id, hydrationData) {
         this.userID = id;
         this.date;
         this.numOunces;
         this.dataSet = hydrationData;
         this.oneUserDataSet;
    }
​
    getOneUserData(hydrationData) {
        let oneUserArray = hydrationData.filter(element => {
            if (this.userID === this.dataSet.userID) {
                return element;
            }
        });
​
        this.oneUserDataSet = oneUserArray;
        console.log("Is this one user's info: ", this.oneUserDataSet);
        console.log("Is this the same one user's info: ", oneUserArray);
    }
​
    getAvgConsumed() {
        let ouncesConsumedPerDay = this.dataSet.filter(element => element.userID === this.userID).map(element => element.numOunces);
        let ouncesConsumedPerDayLength = ouncesConsumedPerDay.length;
        let ouncesConsumedPerDayTotal = ouncesConsumedPerDay.reduce((accumulator, currentValue) => {
          accumulator += currentValue
          return accumulator;
        }, 0);
        return Math.round(ouncesConsumedPerDayTotal / ouncesConsumedPerDayLength);
    }
​
    getOneDayTotal(thisDate) {
        let ouncesByDate = this.oneUserDataSet.find(element => element.date === thisDate);
        return ouncesByDate.numOunces;
    }
​
    getToday() {
        return this.oneUserDataSet[-1];
    }
​
    getOneWeekTotal() {
        let waterWeek = this.oneUserDataSet.slice(-7);
        return waterWeek;
    }
}
​
​
//module.exports = Hydration;
export default Hydration;