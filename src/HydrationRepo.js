const Hydration = require('../src/Hydration');

class HydrationRepo {
  constructor(dataset) {
    this.data = dataset.map(data => new Hydration(data));
    this.userData;
  }

  filterUserData(userId) {
    this.userData = this.data.filter(oneDataPiece => oneDataPiece.id === userId);    
  }

  calculateAvgOzOverTime(userId) {    
    this.filterUserData(userId);
    const totalHydration = this.userData.reduce((total, oneDaysData) => oneDaysData.numOunces + total, 0);
    return Math.round(totalHydration / this.userData.length);
  }

  returnWaterConsumed(userId, date) {        
    this.filterUserData(userId);
    const start = this.userData.findIndex(element => element.date === date);    
    const waterConsumed = [];
    for (let i = start; i < start + 7; i++) {
      waterConsumed.push(this.userData[i].numOunces);
    }

    return waterConsumed;
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}