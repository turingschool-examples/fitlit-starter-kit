import userHydrationData from '../src/data/hydration-data.js'

class Hydration {
     constructor(id, userHydrationData) {
         this.userID = id;
         this.date = userHydrationData[0].date;
         this.numOunces = userHydrationData.numOunces;
         this.data = userHydrationData
     }
}
//module.exports = Hydration;
export default Hydration;