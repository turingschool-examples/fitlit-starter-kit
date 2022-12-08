import userHydrationData from "./data/hydration-data"

Hydration
     constructor({userHydrationData})
         this.userID = userHydrationData.userID
         this.date = userHydrationData.date
         this.numOunces = userHydrationData.numOunces

module.exports = Hydration;