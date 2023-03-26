import User from './User.js'
import hydrationData from 'src/data/hydration.js'

class Hydration {
    constructor(entry) {
        this.userID = entry.userID;
        this.date = entry.date;
        this.numOunces = entry.ounces
    }

    calculateAverageFluidDay(user, date) {
        const userHydration = hydrationData.filter((data) => {
            if (user.ID === data.userID && date === data.date) {
                return numOunces
            }
            return userHydration
        })


    }
}

export default Hydration;