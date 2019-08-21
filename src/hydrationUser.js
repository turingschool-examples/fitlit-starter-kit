class Hydration {
    constructor(waterData) {
        this.waterData = waterData;
    }
    dailyHydration(id, date) {


    }
    allTimeHydration(id) {
        let userSample = this.waterData.filter(user => {
           return user.userID === id;
        });
        let mapped = userSample.map(element => {
            return element.numOunces;
        })
        let userAvg = mapped.reduce((acc, currentVal) => {
            return acc+=currentVal
        },0)/userSample.length;
        return userAvg  
    }

    weeklyHydration(id, date) {
        
    }
}



if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }