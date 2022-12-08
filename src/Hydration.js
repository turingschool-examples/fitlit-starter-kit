import hydrationDataSet from '../src/data/hydration-data.js'
import userData from '../src/data/users.js'

class Hydration {
    constructor(id, hydrationDataSet) {
         this.userID = id;
         this.date = hydrationDataSet[0].date;
         this.numOunces = hydrationDataSet[0].numOunces;
         this.dataSet = hydrationDataSet
    }
    getAvgOuncesConsumed() {

    }
    getOuncesConsumedForDay() {

    }
    getOuncesConsumedForWeek() {

    }
}


//module.exports = Hydration;
export default Hydration;