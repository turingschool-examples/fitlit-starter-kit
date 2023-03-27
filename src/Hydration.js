import User from './User.js'
import hydrationData from './data/hydration'

class Hydration {
    constructor(entry) {
        // this.userID = entry.userID;
        // this.date = entry.date;
        // this.numOunces = entry.numOunces
        this.hydrationData = entry
    }

    findUserID(id) {
        console.log(this.hydrationData)
        let currentUser = this.hydrationData.filter(data => data.userID === id)
        return currentUser
    }

    calculateAverageFluidDay(id, date) {
        const userHydration = hydrationData.filter((data) => {
            if (id.user.ID === data.userID && date === data.date) {
                return numOunces
            }
            return userHydration
        })

        calculateAverageFluidWeek(user)


    }
}

export default Hydration;

// getAvgFluidOunces(id) {
//     const userDrinks = this.hydrationData.filter(data => data.userID === id);
//     const totalOunces = userDrinks.reduce((acc, data) => {
//         acc += data.numOunces;
//         return acc;
//     }, 0);
//     return Math.floor(totalOunces / userDrinks.length);
// }
//   getAvgFluidOunces(id) {
//     const userDrinks = this.hydrationData.filter(data => data.userID === id);
//     const totalOunces = userDrinks.reduce((acc, data) => {
//       acc += data.numOunces;
//       return acc; 
//     }, 0);
//     return Math.floor(totalOunces / userDrinks.length);
//   }

class Hydration {
    constructor(data) {
        this.data = data;
    }

    getDailyWaterIntake(date) {
        return this.data.find(user => user.date === date).numOunces;
    }

    const hydrationData = [
        {
            userID: 1,
            date: '2019/06/15',
            numOunces: 37
        },
        {
            userID: 2,
            date: '2019/06/15',
            numOunces: 75
        },
        {
            userID: 3,
            date: '2019/06/15',
            numOunces: 47
        }
      }
module.exports = hydraationData