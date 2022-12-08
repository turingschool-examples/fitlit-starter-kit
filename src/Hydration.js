import userHydrationData from '../src/data/hydration-data.js'

class Hydration {
     constructor(userHydrationData) {
         this.userID = userHydrationData.userID
         this.date = userHydrationData.date
         this.numOunces = userHydrationData.numOunces
     }
}
//module.exports = Hydration;
export default Hydration;