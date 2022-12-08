import userHydrationData from '../src/data/hydration-data.js'
import userData from '../src/data/users.js'

class Hydration {
    constructor(id, userHydrationData) {
         this.userID = id;
         this.date = userHydrationData[0].date;
         this.numOunces = userHydrationData[0].numOunces;
         this.data = userHydrationData
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