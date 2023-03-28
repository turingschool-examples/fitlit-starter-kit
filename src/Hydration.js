//import mock from '../src/data/mock';

class Hydration {
    constructor(hydrationData) {
        this.hydration = hydrationData
    }

    findUserData(id) {
        let currentUser = this.hydration.filter(data => data.userID === id)
        return currentUser
    }

    findDailyFluidIntake(id, date) {
        const userHydration = this.hydration.reduce((acc, currVal) => {
            if (id === currVal.userID && date === currVal.date) {
                acc += currVal.numOunces
            }
            return acc
        }, 0)
        return userHydration
    }

    calculateFluidWeekly(id) {
        const userWeekly = this.hydration.filter(data => data.userID === id).sort((a, b) => {
            return b.date - a.date
        }).map((day) => day.numOunces)
        const week = userWeekly.slice(0, 7)
        return week
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

// class Hydration {
//     constructor(data) {
//         this.data = data;
//     }

//     getDailyWaterIntake(date) {
//         return this.data.find(user => user.date === date).numOunces;
//     }

// }