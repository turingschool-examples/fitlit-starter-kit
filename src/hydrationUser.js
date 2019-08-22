class Hydration {
    constructor(waterData) {
        this.waterData = waterData;
    }
    
        findUser(id) {
            return this.waterData.filter(user => {
                return user.userID === id;
            });   
        }
    
        dailyHydration(id, date) {
            return this.findUser(id).find(user => user.date === date).numOunces;
        }

        allTimeHydration(id) {
            let userAvg = this.findUser(id).map(element => {
                return element.numOunces}).reduce((acc, currentVal) => {
                return acc+=currentVal
            },0)/this.findUser(id).length;
                return userAvg;
        }

        weeklyHydration(id) {
            let totalOz = this.findUser(id).map(element => {
                return element.numOunces
            }).slice(-7);
            return totalOz;
        }
}



if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }